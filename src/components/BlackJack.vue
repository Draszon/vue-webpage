<template>
  <main>
    <div class="blackjack-container">
      <div class="playing-field">

        <div class="opponent-wrapper">
          <div class="pc-score">
            <p>21</p>
          </div>

          <div class="opponent-cards">
            <img class="cards" src="/blackJack/playing-card-back.png" alt="kártya hátlap">
            <img class="cards" src="/blackJack/playing-card-back.png" alt="kártya hátlap">
          </div>
        </div>

        <div class="field">
          <img src="/blackJack/card-deck.png" alt="" class="cards card-btn">

          <div class="cards-wrapper" >
            <img v-if="cardList" :src="cardList.cards[0].img" alt="" class="cards">
            <img src="/blackJack/clubs/club11.png" alt="" class="cards">
            <img src="/blackJack/hearts/heart8.png" alt="" class="cards">
            <img src="/blackJack/spades/spades13.png" alt="" class="cards">
          </div>
        </div>

        <div class="player-cards">
          <img src="/blackJack/hearts/heart8.png" alt="" class="cards">
          <img src="/blackJack/diamonds/diamond3.png" alt="" class="cards">
        </div>

        <div class="player-score">
          <p>18</p>
        </div>
        
        <div class="text">
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
    }
  },
  methods: {
    async fetchData() {
      try {
        const response = await fetch('/blackJack/cards.json');
        this.cardList = await response.json();
        console.log(this.cardList.cards[0].img);
      } catch (error) {
        console.log('Hiba a lapok betöltésében: ', error);
      }
    }
  },
  async mounted() {
    await this.fetchData();
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