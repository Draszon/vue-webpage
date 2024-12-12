<template>
  <main>
    <div class="blackjack-container">
      <div class="playing-field">

        <div class="opponent-wrapper">
          <div class="pc-score">
            <p>{{ pcScore.value }}</p>
          </div>

          <div class="opponent-cards">
            <img class="cards" src="/blackJack/playing-card-back.png" alt="kártya hátlap">
            <img class="cards" src="/blackJack/playing-card-back.png" alt="kártya hátlap">
          </div>
        </div>

        <div class="field">
          <img src="/blackJack/card-deck.png" alt="" class="cards card-btn">

          <div class="cards-wrapper" >
            
          </div>
        </div>

        <div class="player-cards">
          <img
            v-if="playerHand"
            v-for="(x) in playerHand"
            :src="cardList.cards[x].img"
            alt="játékos kártya"
            class="cards"
          >
        </div>

        <div class="player-score">
          <p>{{ playerScore.value }}</p>
        </div>
        
        <div class="text">
          <input class="no-more" type="button" value="Megállok">
          <p>Nyertél</p>
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
      playerScore: { value: 0 },
      pcScore: { value: 0 }
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
      this.starterRandomCards(this.playerHand, this.playerScore.value);
      this.starterRandomCards(this.pcHand, this.pcScore.value);

      console.log('Játékos: ', this.playerHand, 'PC: ', this.pcHand);
    },

    //kezdeti lapok beállítása mindkét játékos számára
    starterRandomCards(player, playerScore) {
      for (let i = 0; i <= 1; i++) {
        let rnd = Math.floor(Math.random() * 51) + 1;

        while (this.cardList.cards[rnd].exists === false) {
          rnd = Math.floor(Math.random() * 51) + 1;
        }

        player.push(rnd);
        const score = this.cardList.cards[rnd].value;
        this.scoreCalc(playerScore, score);
        this.cardList.cards[rnd].exists = false;
      }
    },

    scoreCalc(playerScore, score) {
      //console.log(playerScore, score);
      if (score === "ace" && playerScore.value <= 11) {
        playerScore.value += 11;
      } else {
        playerScore.value += 1;
      }
      playerScore.value = playerScore.value + score;
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