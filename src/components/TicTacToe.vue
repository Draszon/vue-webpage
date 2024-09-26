<template>
  <div class="table">
    <div class="cell"
      v-for="(cell, index) in table"
      :key="index"
      @click="move(index)">
    </div>
  </div>
  <div class="result-wrapper">
  	<p class="playerX">"X" Játákos: {{ playerX }}</p>
  	<p class="playerO">"O" Játákos: {{ playerO }}</p>
  	<input type="button" class="btn" value="Új játék" @click="newGame()">
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
      ],
      checkList: []
    }
  },
  methods: {
    move(index) {
      if (!this.checkList.includes(index)) {
        this.checkList.push(index);
        console.log(this.checkList);

        
      }
    }
  }
}
</script>

<style scoped>
.table {
  display: grid;
  grid-template-columns: repeat(3, 100px);
  justify-content: center;
  margin: 20px 0;
}

.cell {
  cursor: pointer;
  width: 100px;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  border: 1px solid white;
  font-size: 100px;
  font-weight: 200;
}

.result-wrapper {
  font-size: 30px;
  text-align: center;
  margin: 10px 0;
}

.playerX {margin-bottom: 20px;}

.btn {
  cursor: pointer;
  margin-top: 20px;
  font-size: 20px;
  width: 100px;
  height: 30px;
}

</style>