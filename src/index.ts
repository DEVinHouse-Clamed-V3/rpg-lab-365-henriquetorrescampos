import { Arma } from "./class/Arma";
import { Enemy } from "./class/Inimigo";
import { Character } from "./class/Personagem";

const sword = new Arma("Espada do Zeus", "Uma espada de choque", 10);

console.log(
  `Arma: ${sword.getName()}, Dano: ${sword.getDamage()}, Descrição: ${sword.getDescription()}`
);

const warrior = new Character("Luna", 400, 10);
warrior.equipedWeapon(sword);

const enemy_orc = new Enemy("Orc", 100, 160);

warrior.toAttack(enemy_orc);
enemy_orc.toAttack(warrior);
