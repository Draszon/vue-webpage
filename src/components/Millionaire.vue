<template>
  <main>
    <div class="millionaire-container">
      <div class="game-title">
        <h2>Legyen Ön is Milliomos</h2>
      </div>

      <div class="game-wrapper">
        <div class="question-wrapper">
          <h3 class="question"
            v-if="currentQuestion"
          >{{ currentQuestion.question }}</h3>
        </div>

        <div class="answer-wrapper">
          <input type="button"
            v-if="currentQuestion"
            v-for="(answer, index) in currentQuestion.answers" 
            :key="index"
            :value="`${index}: ${answer}`"
            @click="answerCheck(index)"
            :disabled="isAnswered"
            :class="{
              'waiting-verification': selectedAnswerIndex === index,
              'correct-answer': correctAnswer && selectedAnswerIndex === index,
              'wrong-answer': wrongAnswer && selectedAnswerIndex === index,
              'phone-help': phoneRandom === index,
              'half-help': halfRandom.includes(index)
            }"
          >
        </div>

        <div class="help-wrapper">
          <img class="helper" src="/millionair/phone.svg" alt="telefon"
            :class="{ 'disable-helper': disablePhone }"
            @click="phoneHelp()"
          >

          <img class="helper" src="/millionair/audience.svg" alt="közönség"
            :class="{ 'disable-helper': disableAudience }"
            @click="audienceHelp()"
          >

          <p class="helper"
            :class="{ 'disable-helper': disableHalf }"
            @click="halfing()"
          >50:50</p>
        </div>
      </div>

      <div class="audience-help"
        v-if="audienceHelpEnable"
      >
        <p
          v-for="(letter, index) in this.audienceHelpAnswers"
        >{{ `${index}: ${letter}%` }}</p>
      </div>

      <div class="money-counter">
        <p
          v-for="(prize, index) in prices"
          :key="index"
          :class="{ 'prize-won': prize.won }"
        >
          {{ prize.price }}
        </p>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  data() {
    return {
      //nyeremény összegek és mellettük, hogy melyiknél tart, megnyerte-e
      prices: [
        {price: "10.000", won: true}, {price: "20.000", won: false},
        {price: "50.000", won: false}, {price: "100.000", won: false},
        {price: "250.000", won: false}, {price: "500.000", won: false},
        {price: "750.000", won: false}, {price: "1.000.000", won: false},
        {price: "1.500.000", won: false}, {price: "2.000.000", won: false},
        {price: "5.000.000", won: false}, {price: "10.000.000", won: false},
        {price: "15.000.000", won: false}, {price: "25.000.000", won: false},
        {price: "50.000.000", won: false}
      ],
      questionList: null,
      currentQuestion: null,
      questionCounter: 0,
      selectedAnswerIndex: '',
      correctAnswer: false,
      wrongAnswer: false,
      isAnswered: false,
      phoneRandom: null,
      halfRandom: [],
      disablePhone: false,
      disableAudience: false,
      disableHalf: false,
      abc: ['A', 'B', 'C', 'D'],
      audienceHelpEnable: false,
      audienceHelpAnswers: {
        A: null,
        B: null,
        C: null,
        D: null
      }
    }
  },
  methods: {
    async fetchData() {
      try {
        const response = await fetch('/millionair/questions.json');
        this.questionList = await response.json();
      } catch (error) {
        console.log('Hiba történt a kérdések betöltése közben: ', error);
      }
    },

    game() {
      //a currentQuestion változóban eltárolja a jelenlegi (random sorsolt)
      //kérdést és a hozzá tartozó dolgokat
      this.currentQuestion = this.questionList.questions[
        Math.floor(Math.random() * this.questionList.questions.length)
      ];

      //ami generál kérdéseket ameddig nem talál egy olyat ami még nem volt
      //ha viszont már mind volt akkor az összes kérdés exist tulajdonságát
      //true-ra állítja. hogy újra szerepelhessen
      let questionFalseCounter = this.questionList.questions.length;
      while (this.currentQuestion.exists === false) {
        this.currentQuestion = this.questionList.questions[Math.floor(Math.random() * this.questionList.questions.length)];
        questionFalseCounter--;
        if (questionFalseCounter === 0) {
          alert('Elfogytak az új kérdések!');
          this.questionList.questions.forEach(question => {
            question.exists = true;
          });
        }
      }
    },

    halfing() {
      //leszűröm a filter függvénnyel hogy csak a helytelen válaszok maradjanak
      //ezután ezek közül is egy random elemet eltávolítok, hogy csak kettő maradjon
      const incorrectAnswers = this.abc.filter(option => option != this.currentQuestion.correctAnswer);
      incorrectAnswers.splice(Math.floor(Math.random() * incorrectAnswers.length), 1);
      this.halfRandom = incorrectAnswers;
      this.disableHalf = true;
    },

    audienceHelp() {
      let percent = 100;
      const correctAnswerPercent = Math.floor(Math.random() * (percent - 45 + 1) + 45);
      percent -= correctAnswerPercent;
      
      //a 100% -ból levonom a helyes válasz %-át ami min 45% lehet
      //a listából kiválasztom a helyes válasz betűjelét és átadom neki az
      //adott % -ot majd a maradékot a többi között random szétosztom
      Object.keys(this.audienceHelpAnswers).forEach(key => {
        if (key === this.currentQuestion.correctAnswer) {
          this.audienceHelpAnswers[key] = correctAnswerPercent;
        } else {
          let random = Math.floor(Math.random() * percent);
          this.audienceHelpAnswers[key] = random;
          percent -= random;
        }
      });
      this.audienceHelpEnable = !this.audienceHelpEnable;
      this.disableAudience = true;
    },

    phoneHelp() {
      this.phoneRandom = this.abc[Math.floor(Math.random() * this.abc.length)];
      this.disablePhone = true;
    },

    answerCheck(clickedAnswer) {
      this.selectedAnswerIndex = clickedAnswer;
      this.isAnswered = !this.isAnswered;
      setTimeout(() => {
        //ellenőrzi, hogy a kattintott válasz indexe (vagyis a betűje) egyezik-e
        //a rögzített helyes válasz betűjelével
        if (clickedAnswer === this.currentQuestion.correctAnswer) {
          this.correctAnswer = !this.correctAnswer;
          setTimeout(() => {
            //ha elérte a 15. kérdést megnyerte a főnyereményt
            if (this.questionCounter === 14) {
              alert("Gratulálok megnyerted a főnyereményt!");
              this.moneyReset();
              this.questionReset();
              this.helperReset();
              this.audienceReset();
            } else {
              //ha igen akkor gratulál, a kérdés létezését hamisra állítja és
              //generál egy új kérdést
              alert(`Gratulálok, jöhet a következő kérdés ${this.prices[this.questionCounter + 1].price}Ft -ért!`);
              this.currentQuestion.exists = false;
              this.questionCounter++;
              this.audienceHelpEnable = false;

              //nyereményszámlálót növeli mindig és figyeli hanyadik kérdésnél jár a felhasználó
              this.prices[this.questionCounter].won = true;
            }
            this.nextQuestion();
          }, 2050);
        } else {
          //ha nem akkor pedig kiírja mi lett volna a helyes
          this.wrongAnswer = !this.wrongAnswer;
          setTimeout(() => {
            alert(`A helyes válasz a " ${this.currentQuestion.correctAnswer} " lett volna!`);
            //végigmegy a kérdéseken és újra mindet elérhetővé teszi
            //majd új kérdést generál
            this.questionReset();
            this.moneyReset();
            this.helperReset();
            this.audienceReset();
            this.audienceHelpEnable = false;
            this.nextQuestion();
          }, 2050);
        }
      }, 2000);
    },

    audienceReset() {
      this.audienceHelpEnable = false;
      Object.keys(this.audienceHelpAnswers).forEach(key => {
        this.audienceHelpAnswers[key] = null;
      });
    },

    questionReset() {
      this.questionList.questions.forEach(question => {
          question.exists = true;
      });
      this.questionCounter = 0;
    },

    helperReset() {
      this.disablePhone = false;
      this.disableHalf = false;
      this.disableAudience = false;
    },

    moneyReset() {
      //a pénznyereményeket visszaállítja alaphelyzetre és a legelsőt
      //elérhetővé teszi
      this.prices.forEach(price => {
        price.won = false;
      })
      this.prices[0].won = true;
    },

    nextQuestion() {
      this.currentQuestion = null;
      this.selectedAnswerIndex = '';
      this.correctAnswer = false;
      this.wrongAnswer = false;
      this.isAnswered = false;
      this.phoneRandom = null;
      this.halfRandom = [];
      this.game();
    }
  },
  async mounted() {
    await this.fetchData();
    this.game();
  }
}
</script>

<style scoped>
main {
  margin-top: 60px;
  text-align: center;
}

.millionaire-container {
  width: 80%;
  margin: 0 auto;
  padding: 50px 0;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
}

.game-title {
  margin-bottom: 50px;
  text-transform: uppercase;
  font-weight: 500;
  letter-spacing: 4px;
  line-height: 40px;
}

.question-wrapper { line-height: 30px; }

.answer-wrapper {
  max-width: 900px;
  margin: 30px 0;
}

.answer-wrapper input {
  width: 350px;
  font-size: 20px;
  background-color: unset;
  color: white;
  border: 1px solid white;
  border-radius: 50px;
  padding: 10px 30px;
  margin: 10px;
  cursor: pointer;
}

.answer-wrapper input:hover { 
  background-color: hsl(228, 18%, 20%);
  transition: all .2s;  
}

.help-wrapper {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin: 40px 0;
}

.helper {
  cursor: pointer;
  margin: 0 30px;
  border-radius: 30px;
  font-size: 25px;
}

.stop {
  margin-bottom: 40px;
}

.stop input {
  cursor: pointer;
  background-color: transparent;
  font-size: 20px;
  border: 1px solid hsl(0, 0%, 100%);
  color: hsl(0, 0%, 100%);
  padding: 10px 30px;
  border-radius: 5px;
}

.stop input:hover {
  background-color: hsl(228, 18%, 20%);
  transition: all .2s;
}

.money-counter {
  font-size: 18px;
  width: 150px;
}

.money-counter p {
  font-weight: 600;
  margin: 6px 0;
  border-bottom: 1px solid hsl(0, 0%, 100%);
}

.audience-help {
  width: 200px;
  display: flex;
  flex-direction: row;
  font-size: 20px;
  margin-bottom: 40px;
}

.prize-won {
  background-color: hsl(39, 100%, 50%) !important;
  color: hsl(0, 0%, 0%) !important;
  border: 1px solid hsl(0, 0%, 0%) !important;
}

.phone-help {
  background-color: hsl(24, 100%, 50%) !important;
  color: hsl(0, 0%, 0%) !important;
}

.half-help {
  color: hsl(0, 0%, 37%) !important;
  pointer-events: none;
}

.waiting-verification {
  color: hsl(0, 0%, 0%) !important;
  background-color: hsl(39, 100%, 50%) !important;
}

.correct-answer {
  color: hsl(0, 0%, 0%) !important;
  background-color: hsl(120, 100%, 25%) !important;
}

.wrong-answer {
  color: hsl(0, 0%, 0%) !important;
  background-color: hsl(0, 100%, 50%) !important;
}

.disable-helper {
  opacity: .5;
  pointer-events: none;
  cursor: default;
}
</style>
