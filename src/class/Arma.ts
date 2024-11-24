export class Arma {
  private readonly name: string;
  private readonly description: string;
  private damage: number;

  // parametros opcionais sempre ficam no final do construtor
  constructor(name: string, description: string, damage: number = 0) {
    this.name = name;
    this.description = description;
    this.damage = damage;
  }

  getName() {
    return this.name;
  }
  getDamage() {
    return this.damage;
  }
  getDescription() {
    return this.description;
  }

  setDamage(damage: number) {
    if (damage < 0) {
      console.log("Dano não pode ser negativo");
    }

    this.damage = damage;
  }
}
