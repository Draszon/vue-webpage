<template>
<div class="scoreboard">
  <h2 class="board-title">scoreboard</h2>
  <div class="scores-wrapper">
    <div class="names">
      <h3 class="player-name">{{ players.firstPlayer.name }}</h3>
      <h3 class="player-name">{{ players.secondPlayer.name }}</h3>
    </div>
    <div class="score">
      <ul class="player-score">
        <li></li>
      </ul>

      <ul class="player-score">
        <li></li>
      </ul>
    </div>
  </div>
  <div class="sum-wrapper">
    <p></p>
    <p></p>
  </div>
</div>

<div class="input-wrapper">
  <input v-model="players.firstPlayer.name" type="text" placeholder="Első játékos neve">
  <input v-model="players.secondPlayer.name" type="text" placeholder="Második játékos neve">
  <input v-model="gameType" type="text" placeholder="301 vagy 501">
  <input style="cursor: pointer;" type="button" value="Kezdés">
</div>

<!--<div class="input-wrapper">
  <input type="text" placeholder="Első dobás">
  <input type="text" placeholder="Második dobás">
  <input type="text" placeholder="Harmadik dobás">
  <input style="cursor: pointer;" type="button" value="Rögzít">
</div>-->
</template>

<script>
export default {
  data() {
    return {
      gameType: null,
      players: {
        firstPlayer: {
          name: '',
          score: 0
        },
        secondPlayer: {
          name: '',
          score: 0
        }
      },
    }
  },
  methods: {
    //játék kezdésekor ellenőrzi megadott adatokat, hogy
    //megfelelnek-e a szabályoknak
    game() {

    },
    startFieldValidation() {

    }
  }
}
</script>

<style scoped>
.scoreboard {
  padding: 0.625rem;
  height: 32.5rem;
  width: 21.875rem;
  display: flex;
  flex-direction: column;
  border: 1px solid white;
  border-radius: 5px;
}

.board-title {
  text-transform: uppercase;
  text-align: center;
  border-bottom: 1px solid white;
}

.score-wrapper {
  display: flex;
  flex-direction: column;
}

.names {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin: 0.625rem 0;
}

.score {
  height: 23.75rem;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin: 0.625rem 0;
}

.player-score li {
  margin: 0.3125rem 0;
  display: flex;
  justify-content: center;
  align-items: center;
}

.sum-wrapper {
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  border-top: 1px solid white;
  display: flex;
  align-items: center;
}

.input-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 1.25rem;
}

.input-wrapper input {
  color: white;
  width: 12.5rem;
  margin: 0.3125rem 0;
  padding: 0.3125rem;
  border-radius: 5px;
  background-color: hsla(0, 0%, 62%, 0);
  border: 1px solid white;
}

.input-wrapper input::placeholder {color: white;}
</style>