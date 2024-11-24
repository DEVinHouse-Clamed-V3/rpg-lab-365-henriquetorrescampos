import Character from "./Personagem";

export default class Enemy extends Character {
  isAttack(char: Character) {
    const odds = Math.random();

    if (odds < 0.5) {
      console.log("Fail to attack");
    } else {
      char.receiveDamage(this.calculateDamage());
    }
  }

  randomBehave(char: Character) {
    const randomAction = Math.random();

    if (randomAction < 0.4) {
      console.log("Enemy decides to wait");
    } else {
      console.log("Enemy attack");

      this.isAttack(char);
    }
  }
}
