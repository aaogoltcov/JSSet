'use strict'

export class Team {
    constructor() {
        this.members = new Set();
    }

    add(object) {

        if ( !this.toArray(this.members)
            .find(e => ( e.type === object.type && e.name === object.name )) ) {
            this.members.add(object)
        } else { throw new Error("Hero is already existed...") }

    }

    addAll(...objects) {

        for (let object of objects) {
            this.add(object)
        }

    }

    toArray() {

        return Array.from(this.members)

    }

}


