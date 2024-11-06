<template>
  <main>
    <div class="millionaire-container">
      <div class="game-title">
        <h2>Legyen Ön is Milliomos</h2>
      </div>

      <div class="game-wrapper">
        <div class="question-wrapper">
          <h3 class="question">Melyik elem található meg legnagyobb mennyiségben a Föld légkörében?</h3>
        </div>

        <div class="answer-wrapper">
          <input type="button" value="A: Oxigén">
          <input type="button" value="B: Szén-dioxid">
          <input type="button" value="C: Nitrogén">
          <input type="button" value="D: Argon">
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
        <p>50.000.000</p>
        <p>25.000.000</p>
        <p>15.000.000</p>
        <p>10.000.000</p>
        <p>5.000.000</p>
        <p>50.000.000</p>
        <p>50.000.000</p>
        <p>50.000.000</p>
        <p>50.000.000</p>
        <p>50.000.000</p>
        <p>50.000.000</p>
        <p>50.000.000</p>
        <p>50.000.000</p>
        <p>50.000.000</p>
        <p>50.000.000</p>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  data() {
    return {

    }
  },
  methods: {

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
  border: 1px solid white;
  color: white;
  padding: 10px 30px;
  border-radius: 5px;
}

.stop input:hover {
  background-color: hsl(228, 18%, 20%);
  transition: all .2s;
}

.money-counter {
  font-size: 18px;
}

.money-counter p {
  margin: 5px 0;
}
</style>
