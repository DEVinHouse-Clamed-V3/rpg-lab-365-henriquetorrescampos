import { Enemy } from "./Inimigo";
import { Character } from "./Personagem";

export class Boss extends Enemy {
  toAttack(char: Character) {
    const odds = Math.random();

    if (odds < 0.5) {
      console.log(`${this.getName()} failed to attack`);
      return;
    }
    const damage = this.calculateDamage() * 2;
    console.log(`${this.getName()} attacks ${char.getName()} for ${damage} `);

    char.receiveDamage(damage);
  }
}
