<template>
  <h2 v-if="selectedWord">Kategória: {{ selectedWord.category }}</h2>

  <div class="the-word" style="margin-bottom: -10px;">
    <!--a kattintott betűket helyezi be a megfelelő helyre-->
    <p v-for="(x, index) in selectedWordLetters" style="height: 21px;">{{ x }}</p>
  </div>

  <div class="the-word" style="margin-top: -5px;">
    <!--a kitalálandó szó szószámával megegyező mennyiségű _ rajzol ki-->
    <p
      v-if="selectedWord"
      v-for="x in selectedWord.word">_</p>
  </div>

  <div class="letter-container">
    <input
      v-if="!hasWon && wrongGuesses <= 6" 
      v-for="(x, index) in letters"
      @click="game(x, index)"
      :class="{ 'used-letter': x }"
      type="button" :value="index">
  </div>

  <!--segítség kérő gomb, akkor látszódik ha nincs vége
  a játéknagy, vagy nem kattintott még rá, amúgy pedig a 
  vélasztott szóhoz tartozó 3db segítségből egy randomat kiírat-->
  <input class="btn" style="margin-bottom: 5px;" type="button" value="Segítség"
    v-if="!needHelp && !endGame"
    @click="needHelp = !needHelp; helpText = selectedWord.helper[Math.floor(Math.random() * 3)];">

  <p class="btn" v-if="selectedWord && !endGame">{{ helpText }}</p>

  <input
    class="btn" type="button" value="Új játék"
    v-if="endGame" @click="resetGame">

  <h3 class="win-text">{{ wintext }}</h3>

  <div class="hangman-container">
    <img v-if="wrongGuesses != null" :src="theHangMan[wrongGuesses]" alt="akasztófa kép">
  </div>
</template>

<script>

export default {
  data() {
    return {
      wordList: null,
      letters: {
        'a': false, 'á': false, 'b': false, 'c': false, 'd': false, 'e': false,
        'é': false, 'f': false, 'g': false, 'h': false, 'i': false, 'í': false,
        'j': false, 'k': false, 'l': false, 'm': false, 'n': false, 'o': false, 
        'ó': false, 'ö': false, 'ő': false, 'p': false, 'q': false, 'r': false,
        's': false, 't': false, 'u': false, 'ú': false, 'ü': false, 'ű': false,
        'v': false, 'w': false, 'x': false, 'y': false, 'z': false
      },
      theHangMan: [
        '/hangman/1.png', '/hangman/2.png', '/hangman/3.png', '/hangman/4.png', '/hangman/5.png', '/hangman/6.png', 
        '/hangman/7.png', '/hangman/8.png' 
      ],
      messages: {
        win: "Gratulálok kitaláltad!",
        loose: (word) => `A kitalálandó szó: ${word} lett volna!`
      },
      selectedWord: null,
      selectedWordLetters: [],
      hasWon: false,
      endGame: false,
      wintext: '',
      wrongGuesses: null,
      needHelp: false,
      helpText: ''
    }
  },
  methods: {
    async fetchData() {
      try {
        const response = await fetch("/hangman/words.json");
        this.wordList = await response.json();
      } catch (error) {
        console.error('Hiba a szavak betöltésekor: ', error);
      }
    },

    generateWord() {
      const randomNum = Math.floor(Math.random() * this.wordList.words.length);
      this.selectedWord = this.wordList.words[randomNum];
      this.selectedWordLetters = Array(this.selectedWord.word.length).fill(null);
    },

    //megkapja a két listát és összehasonlítja minden elemét hogy azonosak-e
    //ha igen akkor igazat ad vissza és kitalálta a játékos
    wonCheck(word, list) {
      for (let i = 0; i <= this.selectedWord.word.length; i++) {
        if (word[i] !== list[i]){
          return false;
        }
      }
      return true;
    },

    resetGame() {
      this.generateWord();
      this.endGame = false;
      this.hasWon = false;
      this.wintext = '';
      this.wrongGuesses = null;
      this.helpText = '';
      this.needHelp = false;
      for (let key in this.letters) {
        if (this.letters.hasOwnProperty(key)) {
          this.letters[key] = false;
        }
      }
    },

    game(used, letter) {
      //ha a betűre még nem kattintottak
      if (!used) {
        if (this.selectedWord.word.includes(letter)) {
          for (let i = 0; i < this.selectedWord.word.length; i++) {
            if (letter === this.selectedWord.word[i]) {
              this.selectedWordLetters[i] = letter;
            }
          }
        } else {
          this.wrongGuesses++;
          if (this.wrongGuesses === 7) {
            this.wintext = this.messages.loose(this.selectedWord.word);
            this.endGame = !this.endGame;
          }
        }

        //ha már egyszer kattintott egy betűre, az értéke igaz lesz, többször nem lehet
        this.letters[letter] = !this.letters[letter];

        this.hasWon = this.wonCheck(this.selectedWord.word, this.selectedWordLetters);
        if (this.hasWon) {
          this.wintext = this.messages.win;
          this.endGame = !this.endGame;
        }
      }
    },
  },
  
  async mounted() {
    await this.fetchData();
    this.generateWord();
  }
}
</script>

<style scoped>
.btn {
  padding: 5px 20px;
  font-size: 1rem;
  cursor: pointer;
}

.used-letter {
  color: red !important;
}

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
  height: 165px;
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

@media (max-width: 425px) { 
  .letter-container { width: 370px; }
  .btn { margin-top: 30px; }  
}
</style>