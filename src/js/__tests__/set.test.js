import { Bowerman } from '../hero'
import { Swordsman } from '../hero'
import { Team } from '../set'
import { test } from "@jest/globals";

test ('should be add', () => {

    let team = new Team()
    team.add(new Bowerman('Nick'))
    expect(team.toArray()).toEqual([{
        attack: 25,
        defence: 25,
        health: 100,
        level: 1,
        name: "Nick",
        type: "Bowerman",
    }])

    team.add(new Bowerman('Mike'))
    expect(team.toArray()).toEqual([{
        attack: 25,
        defence: 25,
        health: 100,
        level: 1,
        name: "Nick",
        type: "Bowerman",
    },{
        attack: 25,
        defence: 25,
        health: 100,
        level: 1,
        name: "Mike",
        type: "Bowerman",
    }])

    team.addAll(new Bowerman('Ted'), new Swordsman('Mike'))
    expect(team.toArray()).toEqual([{
        attack: 25,
        defence: 25,
        health: 100,
        level: 1,
        name: "Nick",
        type: "Bowerman",
    },{
        attack: 25,
        defence: 25,
        health: 100,
        level: 1,
        name: "Mike",
        type: "Bowerman",
    },{
        attack: 25,
        defence: 25,
        health: 100,
        level: 1,
        name: "Ted",
        type: "Bowerman",
    },{
        attack: 40,
        defence: 10,
        health: 100,
        level: 1,
        name: "Mike",
        type: "Swordsman",
    }])

})

test ('should be mistake', () => {

    let team = new Team()
    team.add(new Bowerman('Nick'))
    expect(function() {
        team.add(new Bowerman('Nick'))
    }).toThrow(new Error("Hero is already existed..."));

})
