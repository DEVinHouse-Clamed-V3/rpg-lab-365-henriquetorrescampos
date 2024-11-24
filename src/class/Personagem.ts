import { Arma } from "./Arma";
import { Enemy } from "./Inimigo";

export class Character {
  private name: string;
  private life: number;
  private strength: number;
  private weapon: Arma | null = null;
  private isAlive: boolean;

  constructor(name: string, life: number = 100, strength: number = 10) {
    this.name = name;
    this.life = life;
    this.strength = strength;
    this.isAlive = true;
  }

  getName() {
    return this.name;
  }
  getLife() {
    return this.life;
  }
  getStrength() {
    return this.strength;
  }
  getWeapon() {
    return this.weapon;
  }

  setName(name: string) {
    this.name = name;
  }
  setLife(life: number) {
    this.life = life;
  }
  setStrength(strength: number) {
    this.strength = strength;
  }
  setWeapon(weapon: Arma) {
    this.weapon = weapon;
  }

  receiveDamage(damage: number) {
    if (!this.isAlive) {
      console.log(`${this.name} is already dead`);
      return;
    }

    this.life -= damage;

    if (this.life <= 0) {
      this.isAlive = false;
      console.log(`${this.name} has been defeated.`);
    }
  }

  equipedWeapon(weapon: Arma) {
    this.weapon = weapon;
    console.log(`${this.weapon.getName()} equipada.`);
  }

  protected calculateDamage() {
    return this.strength + (this.weapon?.getDamage() || 0);
  }

  toAttack(char: Enemy) {
    const odds = Math.random();

    if (odds < 0.5) {
      console.log(`${this.name} failed to attack ${char.getName()}`);
    } else {
      const damage = this.calculateDamage();
      console.log(`${this.name} attacks ${char.getName()} for ${damage}`);
      char.receiveDamage(damage);
    }
  }
}
