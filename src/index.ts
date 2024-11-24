import Arma from "./class/Arma";

const sword = new Arma("Espada do Zeus", "Uma espada de choque", 10);

const swordName = sword.getName();
const swordDescription = sword.getDescription();
const swordDamage = sword.getDamage();

console.log(swordName);
console.log(swordDescription);
console.log(swordDamage);

const newDamage = sword.setDamage(30);
console.log(newDamage);
// sword.setDamage(30);
// console.log(sword.getDamage());
