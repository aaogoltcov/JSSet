'use strict'

export class Character {
    constructor(name, type, attack, defence) {
        const heroes = [
            'Bowerman',
            'Swordsman',
            'Magician',
            'Daemon',
            'Undead',
            'Zombie',
        ]

        if ( name && 2 <= name.length <= 10 ) { this.name = name } else { throw new Error('Name is too short / long...') }
        if ( heroes.includes(type) ) { this.type = type } else { throw new Error('Wrong type of Hero...') }

        this.health = 100;
        this.level = 1;
        this.attack = attack;
        this.defence = defence;
    }

    levelUp() {

        if ( this.health >= 0 ) {
            this.level++;
            this.attack = this.attack + this.attack * 0.2;
            this.defence = this.defence + this.defence * 0.2;
            this.health = 100;
        } else { throw new Error("Can't level up for lifeless Hero...") }

    }

    damage(points) {

        if ( this.health >= 0 ) {
            this.health -= points * ( 1 - this.defence / 100 );
        } else { throw new Error("Can't damage points for lifeless Hero...") }

    }

}

export class Bowerman extends Character{
    constructor(name) {
        super(name, 'Bowerman', 25, 25);
    }
}

export class Swordsman extends Character{
    constructor(name) {
        super(name, 'Swordsman', 40, 10);
    }
}

export class Magician extends Character{
    constructor(name) {
        super(name, 'Magician', 10, 40);
    }
}

export class Daemon extends Character{
    constructor(name) {
        super(name, 'Daemon', 10, 40);
    }
}

export class Undead extends Character{
    constructor(name) {
        super(name, 'Undead', 25, 25);
    }
}

export class Zombie extends Character{
    constructor(name) {
        super(name, 'Zombie', 40, 10);
    }
}
