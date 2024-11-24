import Arma from "./Arma";

export default class Character {
  private name: string = "";
  private life: number = 100;
  private strength: number = 10;
  private weapon: Arma | null = null;

  constructor(name: string, life: number = 100, strength: number = 10) {
    this.name = name;
    this.life = life;
    this.strength = strength;
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
    this.life = this.life - damage;
    if (this.life < 0) {
      console.log("Character defeated.");
    }
  }

  equipedWeapon(weapon: Arma) {
    this.weapon = weapon;
    console.log(`${this.weapon.getName()} equipada.`);
  }

  protected calculateDamage() {
    if (this.weapon === null) {
      return this.strength;
    } else {
      return this.strength + this.weapon.getDamage();
    }
  }
}
