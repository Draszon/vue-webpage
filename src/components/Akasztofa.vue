<template>
  <h2>Kategória: gyümölcs</h2>
  <h3 class="the-word">________</h3>
  <div class="letter-container">
    <input v-for="letter in letters" type="button" :value="letter">
  </div>
  <div class="hangman-container">
    <img src="/hangman/8.png" alt="akasztófa kép">
  </div>
</template>

<script>
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
      fruits: ['alma', 'körte', 'banán', 'narancs', 'szilva', 'eper', 'ananász', 'mangó', 'szőlő', 'grépfrút'],
      cars: ['audi', 'bmw', 'mercedes', 'ford', 'tesla', 'volkswagen', 'toyota', 'honda', 'porsche', 'ferrari'],
      furnitures: ['kanapé', 'fotel', 'íróasztal', 'ágy', 'étkezőasztal', 'könyvespolc', 'komód', 'ruhásszekrény', 'éjjeliszekrény', 'kávézóasztal'],
      plants: ['rózsa', 'napraforgó', 'tulipán', 'levendula', 'jázmin', 'ciklámen', 'pálmafa', 'borostyán', 'kaktusz', 'tátika'],
    }
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