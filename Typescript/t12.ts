class Wizard {
    health: number;
    mana: number;
    armor: number;
    constructor(health: number, mana: number, armor: number) {
        this.health = health;
        this.mana = mana;
        this.armor = armor;
    }
    attack() {
        console.log("파이어볼");
    }
}

const x = new Wizard(545, 210, 10);
console.log(x.health, x.mana, x.armor);
x.attack();
