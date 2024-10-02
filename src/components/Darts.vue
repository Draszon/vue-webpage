<template>
<div class="scoreboard">
  <h2 class="board-title">scoreboard</h2>
  <div class="scores-wrapper">
    <div class="names">
      <h3 :class="{ 'current-player': firstPlayerRound }" class="player-name">{{ players.firstPlayer.name }}</h3>
      <h3 :class="{ 'current-player': !firstPlayerRound }" class="player-name">{{ players.secondPlayer.name }}</h3>
    </div>
    <div class="score">
      <ul class="player-score">
        <li v-for="score in players.firstPlayer.scoreList"> {{ score }}</li>
      </ul>

      <ul class="player-score">
        <li v-for="score in players.secondPlayer.scoreList">{{ score }}</li>
      </ul>
    </div>
  </div>
  <div class="sum-wrapper">
    <p>{{ players.firstPlayer.score }}</p>
    <p>{{ players.secondPlayer.score }}</p>
  </div>
</div>

<div v-if="!started" class="input-wrapper">
  <input v-model="players.firstPlayer.name" type="text" placeholder="Első játékos neve">
  <input v-model="players.secondPlayer.name" type="text" placeholder="Második játékos neve">
  <input v-model="gameType" type="text" placeholder="301 vagy 501">
  <p v-if="error" style="color: red;">{{ error }}</p>
  <input @click="startValidation()" style="cursor: pointer;" type="button" value="Kezdés">
</div>

<div v-else class="input-wrapper">
  <input v-model="firstScore" type="text" placeholder="Első dobás">
  <input v-model="secondScore" type="text" placeholder="Második dobás">
  <input v-model="thirdScore" type="text" placeholder="Harmadik dobás">
  <input @click="game()" style="cursor: pointer;" type="button" value="Rögzít">
</div>
</template>

<script>
export default {
  data() {
    return {
      gameType: null,
      started: false,
      error: '',
      firstScore: null,
      secondScore: null,
      thirdScore: null,
      firstPlayerRound: true,
      players: {
        firstPlayer: {
          name: '',
          score: 0,
          scoreList: []
        },
        secondPlayer: {
          name: '',
          score: 0,
          scoreList: []
        }
      },
    }
  },
  methods: {
    game() {
      if (this.firstPlayerRound) {
        const score = this.playerScore(
          this.firstScore, this.secondScore, this.thirdScore
        );
        this.updateScore(score);
        this.scoreFieldReset();
        this.firstPlayerRound = !this.firstPlayerRound;
      } else {
        const score = this.playerScore(
          this.firstScore, this.secondScore, this.thirdScore
        );
        this.updateScore(score);
        this.scoreFieldReset();
        this.firstPlayerRound = !this.firstPlayerRound;
      }
    },
    //játék kezdésekor ellenőrzi megadott adatokat, hogy
    //megfelelnek-e a szabályoknak
    startValidation() {
      if (this.gameType != 301 && this.gameType != 501) {
        this.error = 'A játék típusa csak 301 vagy 501 lehet!';
      } else if (this.players.firstPlayer.name === '' && this.players.secondPlayer.name == '') {
        this.error = 'Üres a játékosnév';
      } else {
        this.error = '';
        this.started = !this.started;
        this.players.firstPlayer.score = this.gameType;
        this.players.secondPlayer.score = this.gameType;
      }
    },
    parseScore(score) {
      let multiplier = 1;
      if (score[0] === 'd') {
        multiplier = 2;
      } else if (score[0] === 't') {
        multiplier = 3;
      } else {
        return parseInt(score);
      }
      return parseInt(score.slice(1)) * multiplier;
    },
    playerScore(first, second, third) {
      return this.parseScore(first) + this.parseScore(second) + this.parseScore(third);
    },
    scoreFieldReset() {
      this.firstScore = null;
      this.secondScore = null;
      this.thirdScore = null;
    },
    updateScore(score) {
      if (this.firstPlayerRound) {
        const pScore = this.players.firstPlayer.score - score;
        if (pScore < 0) {
          this.players.firstPlayer.score = this.players.firstPlayer.score;
        } else {
          this.players.firstPlayer.score = pScore;
          this.players.firstPlayer.scoreList.push(score);
        }
      } else if (!this.firstPlayerRound) {
        const pScore = this.players.secondPlayer.score - score;
        if (pScore < 0) {
          this.players.secondPlayer.score = this.players.secondPlayer.score;
        } else {
          this.players.secondPlayer.score = pScore;
          this.players.secondPlayer.scoreList.push(score);
        }
      }
      
    }
  }
}
</script>

<style scoped>
.current-player { color: rgb(14, 218, 82); }

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