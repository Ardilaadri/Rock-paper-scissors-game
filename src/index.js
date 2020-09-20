const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");

class Player {
  constructor(name) {
    this.name = name;
  }
  handleClickRock() {
    this.select(0);
  }
  handleClickPaper() {
    this.select(1);
  }
  handleClickScissors() {
    this.select(2);
  }
  select(number) {
    this.counter(number);
  }
  counter(num) {
    const numberRandom = Math.floor(Math.random() * 3);
    switch (num) {
      case 0:
        switch (numberRandom) {
          case 1:
            console.log("Gana el computador con papel");
            break;
          case 2:
            console.log("Gana el jugador porque el computador saco tijeras");
            break;
          default:
            console.log("Vuelve a intentarlo");
            break;
        }
        break;
      case 1:
        switch (numberRandom) {
          case 2:
            console.log("Gana el computador porque saco papel");
            break;
          case 0:
            console.log("Gana el jugador porque el computador saco piedra");
            break;
          default:
            console.log("Vuelve a intentarlo");
            break;
        }
        break;
      case 2:
        switch (numberRandom) {
          case 1:
            console.log("Gana el jugador porque el computador saco papel");
            break;
          case 0:
            console.log("Pierde el jugador porque el computador saca piedra");
            break;
          default:
            console.log("Vuelve a intentarlo");
            break;
        }
        break;
    }
  }
}

const player = new Player("Adriana");
