import { Character } from "./Personagem";

export class Enemy extends Character {
  toAttack(char: Character) {
    const odds = Math.random();

    if (odds < 0.5) {
      console.log(`${this.getName()} fails to attack`);
    } else {
      char.receiveDamage(this.calculateDamage());
    }
  }

  randomBehave(char: Character) {
    const randomAction = Math.random();

    if (randomAction < 0.5) {
      console.log(`${this.getName()} decides to wait`);
    } else {
      console.log(`${this.getName()} decides to attack.`);

      this.toAttack(char);
    }
  }
}
