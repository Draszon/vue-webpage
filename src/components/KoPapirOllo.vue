<template>
  <div class="score-wrapper">
    <div class="player-score scoreboard">
      <h2>Játékos</h2>
    </div>

    <div class="score">
      <p class="score-font">{{ playerScore }}</p>
      <p class="score-font">:</p>
      <p class="score-font">{{ pcScore }}</p>
    </div>
        
    <div class="pc-score scoreboard">
      <h2>PC</h2>
    </div>
  </div>

  <div class="selection">
    <i class="fa-solid fa-hand-back-fist icons pc-icons" :class="{ 'pc-icons-select': pcRock  }"></i>
    <i class="fa-solid fa-hand icons pc-icons" :class="{ 'pc-icons-select': pcPaper }"></i>
    <i class="fa-solid fa-hand-scissors icons pc-icons" :class="{ 'pc-icons-select': pcScissor }"></i>
  </div>

  <div class="result-text">{{ winText }}</div>
  
  <div class="selection">
    <i class="fa-solid fa-hand-back-fist icons player-icons" @click="game('rock')"></i>
    <i class="fa-solid fa-hand icons player-icons" @click="game('paper')"></i>
    <i class="fa-solid fa-hand-scissors icons player-icons" @click="game('scissor')"></i>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        pcScore: 0,
        playerScore: 0,
        winText: '',
        playerSelected: '',
        pcSelect: '',
        icons: ['rock', 'paper', 'scissor'],
        pcRock: false,
        pcPaper: false,
        pcScissor: false,
      }
    },
    methods: {
      random() {
        return Math.floor(Math.random() * 3);
      },
      toggleClass(selected) {
        this[selected] = !this[selected];
        setTimeout(() => {
          this[selected] = !this[selected];
        }, 500);
      },
      winCheck(player, pc) {
        if ((player === 'rock' && pc === 'scissor') || (player === 'paper' && pc === 'rock') || (player === 'scissor' && pc === 'paper')) {
          this.playerScore++;
          return 'Nyertél';
        } else if (player === pc) {
          return 'Döntetlen';
        } else {
          this.pcScore++;
          return 'Vesztettél';
        }
      },
      game(choice) {
        this.playerSelected = choice;
        this.pcSelect = this.icons[this.random()];
        console.log(this.playerSelected, this.pcSelect);

        switch (this.pcSelect) {
          case 'rock':
            this.toggleClass('pcRock');
            break;
          case 'paper':
            this.toggleClass('pcPaper');
            break;
          case 'scissor':
            this.toggleClass('pcScissor');
            break;
          default:
            console.log("Valami hiba történt a választásnál!");
        }
        this.winText = this.winCheck(this.playerSelected, this.pcSelect);
        setTimeout(() => {
          this.winText = '';
        }, 500);
      },
    }
  }
</script>

<style scoped>
h2 {
  font-size: 20px;
}

.score-wrapper {
  border: 1px solid hsl(0, 0%, 90%);
  width: 600px;
  height: 100px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 50px;
}

.scoreboard {
  text-align: center;
  width: 150px;
  border: 1px solid hsl(34, 100%, 50%);
  padding: 10px;
  background-color: hsl(34, 100%, 50%);
  color: black;
}

.player-score { margin: 0 0 0 -70px; }

.pc-score { margin: 0 -70px 0 0; }

.score {
  display: flex;
  flex-direction: row;
}

.score-font { font-size: 40px; }

.selection {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: center;
}

.icons {
  border: 1px solid hsl(0, 0%, 90%);;
  border-radius: 9999px;
  padding: 20px;
  margin: 0 10px;
  font-size: 50px;
  color: hsl(0, 0%, 60%);
}

.result-text {
  height: 32px;
  text-align: center;
  font-size: 30px;
  text-transform: uppercase;
  margin: 50px 0;
}

.player-icons { cursor: pointer; }

.player-icons:hover { color: hsl(0, 0%, 100%); }
.pc-icons-select { color: hsl(0, 0%, 100%); }

@media (max-width: 768px) { .score-wrapper { width: 400px !important; } }

@media (max-width: 425px) { .score-wrapper { width: 250px !important; }}
</style>