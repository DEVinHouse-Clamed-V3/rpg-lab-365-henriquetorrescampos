class Arma {
  private readonly name: string = "";
  private damage: number = 0;
  private readonly description: string = "";

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
  }
}

export default Arma;
