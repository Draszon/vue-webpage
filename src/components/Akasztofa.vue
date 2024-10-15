<template>
  <h2>Kategória: {{ selectedCategory }}</h2>
  <p class="the-word">___________</p>
  <div class="letter-container">
    <input 
      v-for="(letter, index) in letters"
      @click="game(letter, index)"
      type="button" :value="letter">
  </div>
  <div class="hangman-container">
    <img src="/hangman/8.png" alt="akasztófa kép">
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
      categoryList: ['gyümölcs', 'autó', 'bútor', 'növény'],
      selectedCategory: '',
      selectedWord: '',
    }
  },
  methods: {
    random(num) { //random szám generálása megadott paraméter alapján
      return Math.floor(Math.random() * num);
    },
    game(letter, index) {
      this.letters.splice(index, 1);
    },
    generateWord() {
      const categoryRandom = this.random(this.categoryList.length);

      //kategória és szó sorsolása a játék elején
      this.selectedCategory = this.categoryList[categoryRandom];
      //a words tömbből a hossza alapján sorsolt kategórián belül sorsolok egy szót is
      this.selectedWord = words[categoryRandom][this.random([categoryRandom].length)];
      
      //keresett szó és kategória
      console.log('Kategória: ', this.selectedCategory, 'Szó: ', this.selectedWord);
    },
  },
  mounted() {
    this.generateWord();
  }
}
</script>

<style scoped>
.the-word { margin: 50px 0; }

.letter-container {
  width: 500px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  margin-bottom: 50px;
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

.hangman-container img { height: 300px; }

@media (max-width: 425px) { .letter-container { width: 370px; } }
</style>