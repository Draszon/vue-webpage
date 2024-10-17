<template>
  <h2>Kategória: {{ selectedCategory }}</h2>
  <div class="the-word" style="margin-bottom: -10px;">
    <p v-for="(x, index) in selectedWordLetters" style="height: 21px;">{{ x }}</p>
  </div>
  <div class="the-word" style="margin-top: -5px;">
    <p v-for="x in selectedWord">_</p>
  </div>
  <div class="letter-container">
    <input 
      v-for="(letter, index) in letters"
      @click="game(letter, index)"
      type="button" :value="letter">
  </div>
  <h3 class="win-text">{{ wintext }}</h3>
  <div class="hangman-container">
    <img v-if="wrongGuesses != null" :src="theHangMan[wrongGuesses]" alt="akasztófa kép">
  </div>
</template>

<script>
  const words = [
    [
      'alma', 'körte', 'banán', 'narancs', 'szilva', 'eper',
      'ananász', 'mangó', 'szőlő', 'grépfrút'
    ],
    [
      'audi', 'bmw', 'mercedes', 'ford', 'tesla', 'volkswagen',
      'toyota', 'honda', 'porsche', 'ferrari'
    ],
    [
      'kanapé', 'fotel', 'íróasztal', 'ágy', 'étkezőasztal',
      'könyvespolc', 'komód', 'ruhásszekrény', 'éjjeliszekrény', 'kávézóasztal'
    ],
    [
      'rózsa', 'napraforgó', 'tulipán', 'levendula', 'jázmin',
      'ciklámen', 'pálmafa', 'borostyán', 'kaktusz', 'tátika'
    ]
  ];

export default {
  data() {
    return {
      letters: [
        'a', 'á', 'b', 'c', 'd', 'e',
        'é', 'f', 'g', 'h', 'i', 'í', 'j', 'k', 'l',
        'm', 'n', 'o', 'ó', 'ö', 'ő', 'p', 'q',
        'r', 's', 't', 'u', 'ú', 'ü', 'ű', 'v',
        'w', 'x', 'y', 'z'
      ],
      theHangMan: [
        '/hangman/1.png', '/hangman/2.png', '/hangman/3.png', '/hangman/4.png', '/hangman/5.png', '/hangman/6.png', 
        '/hangman/7.png', '/hangman/8.png' 
      ],
      categoryList: ['gyümölcs', 'autó', 'bútor', 'növény'],
      selectedCategory: '',
      selectedWord: '',
      selectedWordLetters: [],
      hasWon: false,
      wintext: '',
      wrongGuesses: null,
    }
  },
  methods: {
    random(num) { //random szám generálása megadott paraméter alapján
      return Math.floor(Math.random() * num);
    },
    generateWord() {
      const categoryRandom = this.random(this.categoryList.length);
      //kategória és szó sorsolása a játék elején
      this.selectedCategory = this.categoryList[categoryRandom];
      //a words tömbből a hossza alapján sorsolt kategórián belül sorsolok egy szót is
      this.selectedWord = words[categoryRandom][this.random(words[categoryRandom].length)];

      //keresett szó és kategória
      console.log('Kategória: ', this.selectedCategory, 'Szó: ', this.selectedWord);

      this.selectedWordLetters = Array(this.selectedWord.length).fill(null);
    },
    //megkapja a két listát és összehasonlítja minden elemét hogy azonosak-e
    //ha igen akkor igazat ad vissza és kitalálta a játékos
    wonCheck(word, list) {
      for (let i = 0; i <= this.selectedWord.length; i++) {
        if (word[i] !== list[i]){
          return false;
        }
      }
      return true;
    },
    game(letter, index) {
      this.letters.splice(index, 1);
      //a játékos által kattintott betű szerepel a szóban, akkor hozzáadja
      //a selectedWordLetters listához az adott helyre ahol szerepelnie kell
      //ami utána kiíratódik a kijelzőre
      if (this.selectedWord.includes(letter)) {
        for (let i = 0; i < this.selectedWord.length; i++) {
          if (letter === this.selectedWord[i]) {
            this.selectedWordLetters[i] = letter;
          }
        }
      } else {
        this.wrongGuesses++;
        if (this.wrongGuesses === 7) {
          this.wintext = "A kitalálandó szó: " + this.selectedWord + " lett volna.";
          setTimeout(() => {
            location.reload();
          }, 2000);
        }
      }
      
      this.hasWon = this.wonCheck(this.selectedWord, this.selectedWordLetters);
      if (this.hasWon) {
        this.wintext = 'Gratulálok, kitaláltad!';
        setTimeout(() => {
          location.reload();
        }, 2000);
      }
    },
  },
  mounted() {
    this.generateWord();
  }
}
</script>

<style scoped>
.win-text {
  height: 21px;
  margin: 10px 0;
}

.the-word {
  margin: 50px 0;
  display: flex;
  flex-direction: row;
}

.the-word p {
  width: 30px;
  letter-spacing: 10px;
  text-transform: uppercase;
  font-size: 1.3rem;
  display: flex;
  justify-content: center
}

.letter-container {
  width: 500px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
}

.letter-container input {
  align-items: center;
  font-size: 16px;
  width: 45px;
  height: 35px;
  margin: 3px;
  text-transform: uppercase;
  cursor: pointer;
  color: white;
  background-color: hsla(0, 0%, 62%, 0);
  border: 1px solid white;
  border-radius: 5px;
  font-weight: 700;
}
.hangman-container { height: 305px; }
.hangman-container img { height: 300px; }

@media (max-width: 425px) { .letter-container { width: 370px; } }
</style>