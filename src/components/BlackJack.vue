<template>
  <main>
    <div class="blackjack-container">
      <div class="playing-field">

        <div class="opponent-wrapper">
          <div class="pc-score">
            <p v-if="hasWin">{{ pcScore.value }}</p>
          </div>

          <div v-if="!hasWin" class="opponent-cards">
            <img class="cards" src="/blackJack/playing-card-back.png" alt="kártya hátlap">
            <img class="cards" src="/blackJack/playing-card-back.png" alt="kártya hátlap">
          </div>
          <div v-else class="opponent-cards">
            <img :src="cardList.cards[pcHand[0]].img" class="cards" alt="kártya hátlap">
            <img :src="cardList.cards[pcHand[1]].img" class="cards" alt="kártya hátlap">
          </div>
        </div>

        <div class="field">
          <img @click="!hasWin && deck()" src="/blackJack/card-deck.png" alt="" class="cards card-btn">

          <div class="cards-wrapper" >
            <img
              v-if="table"
              v-for="x in table"
              :src="cardList.cards[x].img"
              alt="asztalon lévő kártyák"
              class="cards"
            >
          </div>
        </div>

        <div class="player-cards">
          <img
            v-if="playerHand"
            v-for="x in playerHand"
            :src="cardList.cards[x].img"
            alt="játékos kártya"
            class="cards"
          >
        </div>

        <div class="player-score">
          <p>{{ playerScore.value }}</p>
        </div>
        
        <div class="text">
          <input :disabled="hasWin" @click="stop()" class="no-more" type="button" value="Megállok">
          <p class="final-txt">{{ finalText }}</p>
        </div>

      </div>
    </div>
  </main>
</template>

<script>
export default {
  data() {
    return {
      cardList: null,
      playerHand: [],
      pcHand: [],
      table: [],
      playerScore: { value: 0 },
      pcScore: { value: 0 },
      finalText: null,
      hasWin: false,
    }
  },
  methods: {
    async fetchData() {
      try {
        const response = await fetch('/blackJack/cards.json');
        this.cardList = await response.json();
      } catch (error) {
        console.log('Hiba a lapok betöltésében: ', error);
      }
    },

    game() {
      this.starterCards(this.playerHand, this.playerScore);
      this.starterCards(this.pcHand, this.pcScore);
      this.scoreCheck();

      /*segítség nekem
      this.playerHand.forEach(element => {
        console.log("Player: ", element, "értéke: ", this.cardList.cards[element].value);
      });
      this.pcHand.forEach(element => {
        console.log("PC: ", element, "értéke: ", this.cardList.cards[element].value);
      });*/
    },

    //kezdeti lapok beállítása mindkét játékos számára
    starterCards(hand, pScore) {
      let randomCards = this.randomCard(2);
      hand.push(...randomCards);

      this.scoreCalc(pScore, randomCards);
    },

    //random lapok sorsolása és lapok elérhetőségének beállítása
    randomCard(piece) {
      let random = [];
      for (let i = 1; i <= piece; i++) {
        let rnd = Math.floor(Math.random() * 51) + 1;

        while (this.cardList.cards[rnd].exists === false) {
          rnd = Math.floor(Math.random() * 51) + 1;
        }

        this.cardList.cards[rnd].exists = false;
        random.push(rnd);
      }
      return random;
    },

    scoreCalc(playerScore, cardScore) {
      cardScore.forEach(card => {
        if (this.cardList.cards[card].value === "ace" && playerScore.value <= 11) {
          playerScore.value += 11;
        } else if (this.cardList.cards[card].value === "ace" && playerScore.value > 11) {
          playerScore.value += 1;
        } else {
          playerScore.value += this.cardList.cards[card].value;
        }
      });
    },

    deck() {
      let randomCards = this.randomCard(1);
      this.table.push(...randomCards);
      this.scoreCalc(this.playerScore, randomCards);
      this.scoreCalc(this.pcScore, randomCards);
      
      this.scoreCheck();
    },

    stop() {
      this.scoreCheck();
      if (this.playerScore.value < 21 && this.pcScore.value > 21) {
        this.finalText = "Nyertél!";
        this.hasWin = !this.hasWin;
        this.tableReset();
      } else if (this.playerScore.value < 21 && this.pcScore.value < 21) {
        if (this.playerScore.value > this.pcScore.value) {
          this.finalText = "Nyertél!";
          this.hasWin = !this.hasWin;
          this.tableReset();
        } else if (this.playerScore.value === this.pcScore.value) {
          this.finalText = "Döntetlen!";
          this.hasWin = !this.hasWin;
          this.tableReset();
        } else {
          this.finalText = "Vesztettél!";
          this.hasWin = !this.hasWin;
          this.tableReset();
        }
      } else if (this.playerScore.value === this.pcScore.value) {
        this.finalText = "Döntetlen!";
        this.hasWin = !this.hasWin;
        this.tableReset();
      } else {
        this.finalText = "Vesztettél!";
        this.hasWin = !this.hasWin;
        this.tableReset();
      }
    },

    scoreCheck() {
      if (this.playerScore.value === 21 && this.pcScore.value === 21) {
        this.finalText = "Döntetlen!";
        this.hasWin = !this.hasWin;
        this.tableReset();
      } else if ( this.playerScore.value === 21 && this.pcScore.value != 21) {
        this.finalText = "Nyertél!";
        this.hasWin = !this.hasWin;
        this.tableReset();
      } else if (this.playerScore.value != 21 && this.pcScore.value === 21) {
        this.finalText = "Vesztettél!";
        this.hasWin = !this.hasWin;
        this.tableReset();
      } else if (this.playerScore.value > 21 && this.pcScore.value > 21) {
        this.finalText = "Döntetlen!";
        this.hasWin = !this.hasWin;
        this.tableReset();
      } else if (this.playerScore.value > 21) {
        this.finalText = "Vesztettél!";
        this.hasWin = !this.hasWin;
        this.tableReset();
      }
    },

    tableReset() {
      setTimeout(() => {
        this.playerHand = [];
        this.pcHand = [];
        this.table = [];
        this.playerScore.value = 0;
        this.pcScore.value = 0;
        this.finalText = null;
        this.hasWin =  false;

        this.game();
      }, 5000);
      
    }
  },
  async mounted() {
    await this.fetchData();
    this.game();
  }
}
</script>

<style scoped>
.blackjack-container {
  margin-top: 60px;
  padding: 40px 0;
  width: 100%;
}

.playing-field {
  width: 50%;
  margin: 0 auto;
}

.opponent-cards {
  display: flex;
  flex-direction: row;
  justify-content: center;
}

.cards {
  height: 100px;
}

.cards-wrapper {
  width: 402px;
}

.card-btn {
  cursor: pointer;
}

.field {
  margin: 50px 0;
}

.field, .player-cards {
  display: flex;
  flex-direction: row;
  justify-content: center;
}

.pc-score { height: 20px; }

.player-score, .pc-score {
  font-size: 20px;
  height: 20px;
  margin: 30px;
  display: flex;
  justify-content: center;
}

.text  {
  height: 25px;
  font-size: 22px;
  text-align: center;
}

.final-txt {
  color: red;
  font-size: 30px;
}

.no-more {
  margin-bottom: 20px;
  cursor: pointer;
  font-size: 1rem;
  height: 35px;
  width: 130px;
}

@media (max-width: 768px) {
  .playing-field {
    width: 70%;
  }
}

@media (max-width: 425px) {
  .playing-field {
    width: 100%;
  }
}
</style>