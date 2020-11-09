'use strict'

import { Team } from './set'
import { Character } from './hero'
import { Bowerman } from './hero'
import { Swordsman } from './hero'
import { Magician } from './hero'
import { Daemon } from './hero'
import { Undead } from './hero'

let team = new Team()
team.add(new Bowerman('Nick'))
// team.add(new Bowerman('Nick'))
// team.add(new Swordsman('Nick'))

// team.adAll(new Bowerman('Nick'), new Swordsman('Nick'))

console.log(team.toArray())



