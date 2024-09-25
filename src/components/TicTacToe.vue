<template>
  <div class="table">
  	<div class="row">
  		<div data-index="0" class="field" id="cell1"></div>
  		<div data-index="1" class="field border-field" id="cell2"></div>
  		<div data-index="2" class="field" id="cell3"></div>
  	</div>
  	<div class="row border-row">
  		<div data-index="3" class="field" id="cell4"></div>
  		<div data-index="4" class="field border-field" id="cell5"></div>
  		<div data-index="5" class="field"></div>
  	</div>
  	<div class="row">
  		<div data-index="6" class="field" id="cell7"></div>
  		<div data-index="7" class="field border-field" id="cell8"></div>
  		<div data-index="8" class="field" id="cell9"></div>
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
}
</style>