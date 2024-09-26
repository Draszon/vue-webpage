<template>
  <div class="table">
    <div class="cell"
      v-for="(cell, index) in table"
      :key="index">
    </div>
  </div>
  <div class="result-wrapper">
  	<p class="playerX">"X" Játákos: <span id="xp"></span></p>
  	<p class="playerO">"O" Játákos: <span id="op"></span></p>
  	<input type="button" id="new-game" value="Új játék">
  </div>
</template>

<script>
export default {
  data() {
    return {
      table: Array(9).fill(null),
      playerX: 0,
      playerO: 0,
      currentPlayer: 'X',
      wins: [
        [0, 1, 2],
		    [3, 4, 5],
		    [6, 7, 8],
		    [0, 3, 6],
		    [1, 4, 7],
		    [2, 5, 8],
		    [0, 4, 8],
		    [2, 4, 6]
      ]
    }
  }
}
</script>

<style scoped>
.table {
  display: grid;
  grid-template-columns: repeat(3, 100px);
  grid-gap: 10px;
  justify-content: center;
  margin: 20px 0;
}

.cell {
  width: 100px;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f0f0f0;
  font-size: 24px;
}
/* 
.table { font-size: 80px; }

.border-row {
  border-bottom: 3px solid rgb(224, 224, 224);
  border-top: 3px solid rgb(224, 224, 224);
}

.border-field {
  border-left: 3px solid rgb(224, 224, 224);
  border-right: 3px solid rgb(224, 224, 224);
}

.field {
  height: 100px;
  width: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}

input {
  cursor: pointer;
  font-size: 1rem;
  padding: 5px 20px;
}

.result-wrapper {
  margin-top: 50px;
  display: flex;
  gap: 20px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 30px;
  height: 150px;
}

.errors {
  color: var(--error-msg-color);
  height: 30px;
  display: block;
}*/
</style>