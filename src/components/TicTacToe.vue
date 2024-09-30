<template>
  <div class="table">
    <div class="cell"
      v-for="(cell, index) in table"
      :key="index"
      @click="move(index, cell)"
      :class="{ 'empty': cell === null, 'not-empty': cell !== null && selectedCell === index  }">{{ cell }}</div>
  </div>
  <div class="result-wrapper">
  	<p class="playerX">"X" Játákos: {{ playerX }}</p>
  	<p class="playerO">"O" Játákos: {{ playerO }}</p>
  	<input type="button" class="btn" value="Új játék" @click="tableReset()">
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
      selectedCell: null,
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
  },
  methods: {
    move(index) {
      if (this.table[index] === null) {
        this.table[index] = this.currentPlayer;
        this.playerSwitch();
        this.winCheck();
      } else {
        this.selectedCell = index;
        setTimeout(() => {
          this.selectedCell = null;
        }, 300)
      }
    },
    playerSwitch() {
      if (this.currentPlayer === 'X') {
        this.currentPlayer = 'O';
      } else {
        this.currentPlayer = 'X';
      }
    },
    winCheck() {
      for (let i = 0; i < this.wins.length; i++) {
        let checkList = [];
        for (let j = 0; j < this.wins[i].length; j++) {
          checkList.push(this.table[this.wins[i][j]]);
        }
        if (checkList[0] === 'X' && checkList[1] === 'X' && checkList[2] === 'X') {
          this.playerX++;
          this.tableReset();
        } else if (checkList[0] === 'O' && checkList[1] === 'O' && checkList[2] === 'O') {
          this.playerO++;
          this.tableReset();
        }
      }
    },
    tableReset() {
      this.table = Array(9).fill(null);
      this.currentPlayer = 'X';
    }
  }
}
</script>

<style scoped>
.not-empty {color: hsl(0, 100%, 57%) !important;}
.empty {color: hsl(0, 0%, 100%) !important;}

.table {
  display: grid;
  grid-template-columns: repeat(3, 100px);
  justify-content: center;
  margin: 1.25rem 0;
}

.cell {
  cursor: pointer;
  width: 6.25rem;
  height: 6.25rem;
  display: flex;
  align-items: center;
  justify-content: center;
  color: hsl(0, 0%, 100%);
  border: 1px solid hsl(0, 0%, 100%);
  font-size: 3.75rem;
  font-weight: 400;
}

.result-wrapper {
  font-size: 1.875rem;
  text-align: center;
  margin: 0.625rem 0;
}

.playerX {margin-bottom: 1.25rem;}

.btn {
  cursor: pointer;
  margin-top: 1.25rem;
  font-size: 1.25rem;
  width: 6.25rem;
  height: 1.875rem;
}

</style>