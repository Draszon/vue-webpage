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
            :class="{ 'waiting-verification': selectedAnswerIndex === index }"
          >
        </div>

        <div class="help-wrapper">
          <img class="helper" src="/millionair/phone.svg" alt="telefon">
          <img class="helper" src="/millionair/audience.svg" alt="közönség">
          <p class="helper">50:50</p>
        </div>
      </div>

      <div class="stop">
        <input type="button" value="Megállok">
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
      questionCounter: 1,
      correctAnswer: false,
      selectedAnswerIndex: '',
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
      this.currentQuestion = this.questionList.questions[Math.floor(Math.random() * this.questionList.questions.length)];
    },

    answerCheck(clickedAnswer) {
      this.selectedAnswerIndex = clickedAnswer;
      console.log(this.selectedAnswerIndex);
      if (clickedAnswer === this.currentQuestion.correctAnswer) {
        
      }
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
  margin: 30px 0;
}

.answer-wrapper input {
  width: 250px;
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

.prize-won {
  background-color: hsl(39, 100%, 50%);
  color: hsl(0, 0%, 0%);
  border: 1px solid hsl(0, 0%, 0%) !important;
}

.waiting-verification {
  color: hsl(0, 0%, 0%) !important;
  background-color: hsl(39, 100%, 50%) !important;
}

.correct-answer {
  color: black !important;
  background-color: hsl(120, 100%, 25%) !important;
}
</style>
