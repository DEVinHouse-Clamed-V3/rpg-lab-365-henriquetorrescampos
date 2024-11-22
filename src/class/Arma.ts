class Arma {
  private readonly name: string = "";
  private damage: number = 0;
  private readonly description: string = "";

  // parametros opcionais sempre ficam no final do construtor
  constructor(ola: string, description: string, damage: number = 0) {
    this.name = ola;
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
    } else {
      this.damage = damage;
    }
    return damage;
  }
}

export default Arma;
