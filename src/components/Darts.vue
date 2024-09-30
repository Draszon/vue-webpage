<template>
<div class="scoreboard">
  <h2 class="board-title">scoreboard</h2>
  <div class="scores-wrapper">
    <div class="names">
      <h3 class="player-name">SZ Peti</h3>
      <h3 class="player-name">S Peti</h3>
    </div>
    <div class="score">
      <ul class="player-score">
        <li>12</li>
      </ul>

      <ul class="player-score">
        <li>12</li>
      </ul>
    </div>
  </div>
  <div class="sum-wrapper">
    <p>301</p>
    <p>301</p>
  </div>
</div>

<div class="input-wrapper">
    <input type="text" name="" id="" placeholder="Első játékos neve">
    <input type="text" name="" id="" placeholder="Második játékos neve">
    <input type="text" name="" id="" placeholder="301 vagy 501">
    <input style="cursor: pointer;" type="button" value="Kezdés">
  </div>
</template>

<script>

</script>

<style scoped>
.scoreboard {
  padding: 10px;
  height: 520px;
  width: 400px;
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
  margin: 10px 0;
}

.score {
  height: 380px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin: 10px 0;
}

.player-score li {
  margin: 5px 0;
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
  margin-top: 20px;
}

.input-wrapper input {
  color: white;
  width: 200px;
  margin: 5px 0;
  padding: 5px;
  border-radius: 5px;
  background-color: hsla(0, 0%, 62%, 0);
  border: 1px solid white;
}

.input-wrapper input::placeholder {color: white;}
</style>