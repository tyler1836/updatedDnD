export const archerLevelUp = async (args) => {
    let upperBound = 0
    let lowerBound = 0
    const bonus = (Math.random() * 1) + .9
    const bound = 1.2
    if(bonus > 1.5){
        upperBound = bonus
        lowerBound = bound
    }
    else{
        lowerBound = bonus
        upperBound = bound
    }
    await args.mutateChar({
        variables: {
            characterId: args.characterId,
            statId: args.baseStats._id,
            charisma: (Math.round(args.baseStats.charisma * upperBound)),
            constitution: (Math.round(args.baseStats.constitution * lowerBound)),
            dexterity: (Math.round(args.baseStats.dexterity * upperBound)),
            health: (Math.round(args.baseStats.health * lowerBound)),
            intelligence: (Math.round(args.baseStats.intelligence * lowerBound)),
            perception: (Math.round(args.baseStats.perception * upperBound)),
            speed: (Math.round(args.baseStats.speed * lowerBound)),
            strength: (Math.round(args.baseStats.strength * lowerBound)),
            wisdom: (Math.round(args.baseStats.wisdom * lowerBound)),
            level: args.levels,
            experience: args.randomXP
        }
    })
}
export const bardLevelUp = async (args) => {
    let upperBound = 0
    let lowerBound = 0
    const bonus = (Math.random() * 1) + 1.1
    const bound = 1.2
    if(bonus > 1.5){
        upperBound = bonus
        lowerBound = bound
    }
    else{
        lowerBound = bonus
        upperBound = bound
    }
    await args.mutateChar({
        variables: {
            characterId: args.characterId,
            statId: args.baseStats._id,
            charisma: (Math.round(args.baseStats.charisma * upperBound)),
            constitution: (Math.round(args.baseStats.constitution * lowerBound)),
            dexterity: (Math.round(args.baseStats.dexterity * upperBound)),
            health: (Math.round(args.baseStats.health * lowerBound)),
            intelligence: (Math.round(args.baseStats.intelligence * lowerBound)),
            perception: (Math.round(args.baseStats.perception * upperBound)),
            speed: (Math.round(args.baseStats.speed * lowerBound)),
            strength: (Math.round(args.baseStats.strength * lowerBound)),
            wisdom: (Math.round(args.baseStats.wisdom * lowerBound)),
            level: args.levels,
            experience: args.randomXP
        }
    })
}
export const sniperLevelUp = async (args) => {
    let upperBound = 0
    let lowerBound = 0
    const bonus = (Math.random() * 1) + 1.1
    const bound = 1.2
    if(bonus > 1.5){
        upperBound = bonus
        lowerBound = bound
    }
    else{
        lowerBound = bonus
        upperBound = bound
    }
    await args.mutateChar({
        variables: {
            characterId: args.characterId,
            statId: args.baseStats._id,
            charisma: (Math.round(args.baseStats.charisma * upperBound)),
            constitution: (Math.round(args.baseStats.constitution * lowerBound)),
            dexterity: (Math.round(args.baseStats.dexterity * upperBound)),
            health: (Math.round(args.baseStats.health * lowerBound)),
            intelligence: (Math.round(args.baseStats.intelligence * lowerBound)),
            perception: (Math.round(args.baseStats.perception * upperBound)),
            speed: (Math.round(args.baseStats.speed * lowerBound)),
            strength: (Math.round(args.baseStats.strength * lowerBound)),
            wisdom: (Math.round(args.baseStats.wisdom * lowerBound)),
            level: args.levels,
            experience: args.randomXP
        }
    })
}
export const arcanistLevelUp = async (args) => {
    let upperBound = 0
    let lowerBound = 0
    const bonus = (Math.random() * 1) + .9
    const bound = 1.2
    if(bonus > 1.5){
        upperBound = bonus
        lowerBound = bound
    }
    else{
        lowerBound = bonus
        upperBound = bound
    }
    await args.mutateChar({
        variables: {
            characterId: args.characterId,
            statId: args.baseStats._id,
            charisma: (Math.round(args.baseStats.charisma * lowerBound)),
            constitution: (Math.round(args.baseStats.constitution * lowerBound)),
            dexterity: (Math.round(args.baseStats.dexterity * lowerBound)),
            health: (Math.round(args.baseStats.health * lowerBound)),
            intelligence: (Math.round(args.baseStats.intelligence * upperBound)),
            perception: (Math.round(args.baseStats.perception * upperBound)),
            speed: (Math.round(args.baseStats.speed * lowerBound)),
            strength: (Math.round(args.baseStats.strength * lowerBound)),
            wisdom: (Math.round(args.baseStats.wisdom * upperBound)),
            level: args.levels,
            experience: args.randomXP
        }
    })
}
export const scholarLevelUp = async (args) => {
    let upperBound = 0
    let lowerBound = 0
    const bonus = (Math.random() * 1) + 1.1
    const bound = 1.2
    if(bonus > 1.5){
        upperBound = bonus
        lowerBound = bound
    }
    else{
        lowerBound = bonus
        upperBound = bound
    }
    await args.mutateChar({
        variables: {
            characterId: args.characterId,
            statId: args.baseStats._id,
            charisma: (Math.round(args.baseStats.charisma * lowerBound)),
            constitution: (Math.round(args.baseStats.constitution * lowerBound)),
            dexterity: (Math.round(args.baseStats.dexterity * lowerBound)),
            health: (Math.round(args.baseStats.health * lowerBound)),
            intelligence: (Math.round(args.baseStats.intelligence * upperBound)),
            perception: (Math.round(args.baseStats.perception * upperBound)),
            speed: (Math.round(args.baseStats.speed * lowerBound)),
            strength: (Math.round(args.baseStats.strength * lowerBound)),
            wisdom: (Math.round(args.baseStats.wisdom * upperBound)),
            level: args.levels,
            experience: args.randomXP
        }
    })
}
export const summonerLevelUp = async (args) => {
    let upperBound = 0
    let lowerBound = 0
    const bonus = (Math.random() * 1) + 1.1
    const bound = 1.2
    if(bonus > 1.5){
        upperBound = bonus
        lowerBound = bound
    }
    else{
        lowerBound = bonus
        upperBound = bound
    }
    await args.mutateChar({
        variables: {
            characterId: args.characterId,
            statId: args.baseStats._id,
            charisma: (Math.round(args.baseStats.charisma * lowerBound)),
            constitution: (Math.round(args.baseStats.constitution * lowerBound)),
            dexterity: (Math.round(args.baseStats.dexterity * lowerBound)),
            health: (Math.round(args.baseStats.health * lowerBound)),
            intelligence: (Math.round(args.baseStats.intelligence * upperBound)),
            perception: (Math.round(args.baseStats.perception * upperBound)),
            speed: (Math.round(args.baseStats.speed * lowerBound)),
            strength: (Math.round(args.baseStats.strength * lowerBound)),
            wisdom: (Math.round(args.baseStats.wisdom * upperBound)),
            level: args.levels,
            experience: args.randomXP
        }
    })
}
export const nomadLevelUp = async (args) => {
    let upperBound = 0
    let lowerBound = 0
    const bonus = (Math.random() * 1) + .9
    const bound = 1.2
    if(bonus > 1.5){
        upperBound = bonus
        lowerBound = bound
    }
    else{
        lowerBound = bonus
        upperBound = bound
    }
    await args.mutateChar({
        variables: {
            characterId: args.characterId,
            statId: args.baseStats._id,
            charisma: (Math.round(args.baseStats.charisma * lowerBound)),
            constitution: (Math.round(args.baseStats.constitution * upperBound)),
            dexterity: (Math.round(args.baseStats.dexterity * lowerBound)),
            health: (Math.round(args.baseStats.health * upperBound)),
            intelligence: (Math.round(args.baseStats.intelligence * upperBound)),
            perception: (Math.round(args.baseStats.perception * lowerBound)),
            speed: (Math.round(args.baseStats.speed * lowerBound)),
            strength: (Math.round(args.baseStats.strength * upperBound)),
            wisdom: (Math.round(args.baseStats.wisdom * lowerBound)),
            level: args.levels,
            experience: args.randomXP
        }
    })
}
export const druidLevelUp = async (args) => {
    let upperBound = 0
    let lowerBound = 0
    const bonus = (Math.random() * 1) + 1.1
    const bound = 1.2
    if(bonus > 1.5){
        upperBound = bonus
        lowerBound = bound
    }
    else{
        lowerBound = bonus
        upperBound = bound
    }
    await args.mutateChar({
        variables: {
            characterId: args.characterId,
            statId: args.baseStats._id,
            charisma: (Math.round(args.baseStats.charisma * lowerBound)),
            constitution: (Math.round(args.baseStats.constitution * upperBound)),
            dexterity: (Math.round(args.baseStats.dexterity * lowerBound)),
            health: (Math.round(args.baseStats.health * upperBound)),
            intelligence: (Math.round(args.baseStats.intelligence * lowerBound)),
            perception: (Math.round(args.baseStats.perception * upperBound)),
            speed: (Math.round(args.baseStats.speed * lowerBound)),
            strength: (Math.round(args.baseStats.strength * upperBound)),
            wisdom: (Math.round(args.baseStats.wisdom * upperBound)),
            level: args.levels,
            experience: args.randomXP
        }
    })
}
export const beastmasterLevelUp = async (args) => {
    let upperBound = 0
    let lowerBound = 0
    const bonus = (Math.random() * 1) + 1.1
    const bound = 1.2
    if(bonus > 1.5){
        upperBound = bonus
        lowerBound = bound
    }
    else{
        lowerBound = bonus
        upperBound = bound
    }
    await args.mutateChar({
        variables: {
            characterId: args.characterId,
            statId: args.baseStats._id,
            charisma: (Math.round(args.baseStats.charisma * lowerBound)),
            constitution: (Math.round(args.baseStats.constitution * lowerBound)),
            dexterity: (Math.round(args.baseStats.dexterity * lowerBound)),
            health: (Math.round(args.baseStats.health * lowerBound)),
            intelligence: (Math.round(args.baseStats.intelligence * upperBound)),
            perception: (Math.round(args.baseStats.perception * lowerBound)),
            speed: (Math.round(args.baseStats.speed * lowerBound)),
            strength: (Math.round(args.baseStats.strength * lowerBound)),
            wisdom: (Math.round(args.baseStats.wisdom * upperBound)),
            level: args.levels,
            experience: args.randomXP
        }
    })
}
export const geomancerLevelUp = async (args) => {
    let upperBound = 0
    let lowerBound = 0
    const bonus = (Math.random() * 1) + 1.1
    const bound = 1.2
    if(bonus > 1.5){
        upperBound = bonus
        lowerBound = bound
    }
    else{
        lowerBound = bonus
        upperBound = bound
    }
    await args.mutateChar({
        variables: {
            characterId: args.characterId,
            statId: args.baseStats._id,
            charisma: (Math.round(args.baseStats.charisma * lowerBound)),
            constitution: (Math.round(args.baseStats.constitution * lowerBound)),
            dexterity: (Math.round(args.baseStats.dexterity * lowerBound)),
            health: (Math.round(args.baseStats.health * lowerBound)),
            intelligence: (Math.round(args.baseStats.intelligence * upperBound)),
            perception: (Math.round(args.baseStats.perception * upperBound)),
            speed: (Math.round(args.baseStats.speed * lowerBound)),
            strength: (Math.round(args.baseStats.strength * lowerBound)),
            wisdom: (Math.round(args.baseStats.wisdom * upperBound)),
            level: args.levels,
            experience: args.randomXP
        }
    })
}
export const pugilistLevelUp = async (args) => {
    let upperBound = 0
    let lowerBound = 0
    const bonus = (Math.random() * 1) + .9
    const bound = 1.2
    if(bonus > 1.5){
        upperBound = bonus
        lowerBound = bound
    }
    else{
        lowerBound = bonus
        upperBound = bound
    }
    await args.mutateChar({
        variables: {
            characterId: args.characterId,
            statId: args.baseStats._id,
            charisma: (Math.round(args.baseStats.charisma * lowerBound)),
            constitution: (Math.round(args.baseStats.constitution * upperBound)),
            dexterity: (Math.round(args.baseStats.dexterity * lowerBound)),
            health: (Math.round(args.baseStats.health * upperBound)),
            intelligence: (Math.round(args.baseStats.intelligence * lowerBound)),
            perception: (Math.round(args.baseStats.perception * upperBound)),
            speed: (Math.round(args.baseStats.speed * upperBound)),
            strength: (Math.round(args.baseStats.strength * upperBound)),
            wisdom: (Math.round(args.baseStats.wisdom * lowerBound)),
            level: args.levels,
            experience: args.randomXP
        }
    })
}
export const monkLevelUp = async (args) => {
    let upperBound = 0
    let lowerBound = 0
    const bonus = (Math.random() * 1) + 1.1
    const bound = 1.2
    if(bonus > 1.5){
        upperBound = bonus
        lowerBound = bound
    }
    else{
        lowerBound = bonus
        upperBound = bound
    }
    await args.mutateChar({
        variables: {
            characterId: args.characterId,
            statId: args.baseStats._id,
            charisma: (Math.round(args.baseStats.charisma * lowerBound)),
            constitution: (Math.round(args.baseStats.constitution * upperBound)),
            dexterity: (Math.round(args.baseStats.dexterity * lowerBound)),
            health: (Math.round(args.baseStats.health * upperBound)),
            intelligence: (Math.round(args.baseStats.intelligence * upperBound)),
            perception: (Math.round(args.baseStats.perception * lowerBound)),
            speed: (Math.round(args.baseStats.speed * upperBound)),
            strength: (Math.round(args.baseStats.strength * lowerBound)),
            wisdom: (Math.round(args.baseStats.wisdom * upperBound)),
            level: args.levels,
            experience: args.randomXP
        }
    })
}
export const fighterLevelUp = async (args) => {
    let upperBound = 0
    let lowerBound = 0
    const bonus = (Math.random() * 1) + 1.1
    const bound = 1.2
    if(bonus > 1.5){
        upperBound = bonus
        lowerBound = bound
    }
    else{
        lowerBound = bonus
        upperBound = bound
    }
    await args.mutateChar({
        variables: {
            characterId: args.characterId,
            statId: args.baseStats._id,
            charisma: (Math.round(args.baseStats.charisma * lowerBound)),
            constitution: (Math.round(args.baseStats.constitution * upperBound)),
            dexterity: (Math.round(args.baseStats.dexterity * lowerBound)),
            health: (Math.round(args.baseStats.health * upperBound)),
            intelligence: (Math.round(args.baseStats.intelligence * lowerBound)),
            perception: (Math.round(args.baseStats.perception * upperBound)),
            speed: (Math.round(args.baseStats.speed * upperBound)),
            strength: (Math.round(args.baseStats.strength * upperBound)),
            wisdom: (Math.round(args.baseStats.wisdom * lowerBound)),
            level: args.levels,
            experience: args.randomXP
        }
    })
}
export const soldierLevelUp = async (args) => {
    console.log(args)
    let upperBound = 0
    let lowerBound = 0
    const bonus = (Math.random() * 1) + .9
    const bound = 1.2
    if(bonus > 1.5){
        upperBound = bonus
        lowerBound = bound
    }
    else{
        lowerBound = bonus
        upperBound = bound
    }
    await args.mutateChar({
        variables: {
            characterId: args.characterId,
            statId: args.baseStats._id,
            charisma: (Math.round(args.baseStats.charisma * lowerBound)),
            constitution: (Math.round(args.baseStats.constitution * upperBound)),
            dexterity: (Math.round(args.baseStats.dexterity * lowerBound)),
            health: (Math.round(args.baseStats.health * upperBound)),
            intelligence: (Math.round(args.baseStats.intelligence * lowerBound)),
            perception: (Math.round(args.baseStats.perception * lowerBound)),
            speed: (Math.round(args.baseStats.speed * lowerBound)),
            strength: (Math.round(args.baseStats.strength * upperBound)),
            wisdom: (Math.round(args.baseStats.wisdom * lowerBound)),
            level: args.levels,
            experience: args.randomXP
        }
    })
}
export const berserkerLevelUp = async (args) => {
    let upperBound = 0
    let lowerBound = 0
    const bonus = (Math.random() * 1) + 1.1
    const bound = 1.2
    if(bonus > 1.5){
        upperBound = bonus
        lowerBound = bound
    }
    else{
        lowerBound = bonus
        upperBound = bound
    }
    await args.mutateChar({
        variables: {
            characterId: args.characterId,
            statId: args.baseStats._id,
            charisma: (Math.round(args.baseStats.charisma * lowerBound)),
            constitution: (Math.round(args.baseStats.constitution * upperBound)),
            dexterity: (Math.round(args.baseStats.dexterity * upperBound)),
            health: (Math.round(args.baseStats.health * upperBound)),
            intelligence: (Math.round(args.baseStats.intelligence * lowerBound)),
            perception: (Math.round(args.baseStats.perception * upperBound)),
            speed: (Math.round(args.baseStats.speed * upperBound)),
            strength: (Math.round(args.baseStats.strength * upperBound)),
            wisdom: (Math.round(args.baseStats.wisdom * lowerBound)),
            level: args.levels,
            experience: args.randomXP
        }
    })
}
export const paladinLevelUp = async (args) => {
    let upperBound = 0
    let lowerBound = 0
    const bonus = (Math.random() * 1) + 1.1
    const bound = 1.2
    if(bonus > 1.5){
        upperBound = bonus
        lowerBound = bound
    }
    else{
        lowerBound = bonus
        upperBound = bound
    }
    await args.mutateChar({
        variables: {
            characterId: args.characterId,
            statId: args.baseStats._id,
            charisma: (Math.round(args.baseStats.charisma * lowerBound)),
            constitution: (Math.round(args.baseStats.constitution * upperBound)),
            dexterity: (Math.round(args.baseStats.dexterity * lowerBound)),
            health: (Math.round(args.baseStats.health * upperBound)),
            intelligence: (Math.round(args.baseStats.intelligence * upperBound)),
            perception: (Math.round(args.baseStats.perception * lowerBound)),
            speed: (Math.round(args.baseStats.speed * lowerBound)),
            strength: (Math.round(args.baseStats.strength * upperBound)),
            wisdom: (Math.round(args.baseStats.wisdom * upperBound)),
            level: args.levels,
            experience: args.randomXP
        }
    })
}
export const darkknightLevelUp = async (args) => {
    let upperBound = 0
    let lowerBound = 0
    const bonus = (Math.random() * 1) + 1.1
    const bound = 1.2
    if(bonus > 1.5){
        upperBound = bonus
        lowerBound = bound
    }
    else{
        lowerBound = bonus
        upperBound = bound
    }
    await args.mutateChar({
        variables: {
            characterId: args.characterId,
            statId: args.baseStats._id,
            charisma: (Math.round(args.baseStats.charisma * lowerBound)),
            constitution: (Math.round(args.baseStats.constitution * upperBound)),
            dexterity: (Math.round(args.baseStats.dexterity * lowerBound)),
            health: (Math.round(args.baseStats.health * upperBound)),
            intelligence: (Math.round(args.baseStats.intelligence * lowerBound)),
            perception: (Math.round(args.baseStats.perception * upperBound)),
            speed: (Math.round(args.baseStats.speed * lowerBound)),
            strength: (Math.round(args.baseStats.strength * upperBound)),
            wisdom: (Math.round(args.baseStats.wisdom * upperBound)),
            level: args.levels,
            experience: args.randomXP
        }
    })
}
export const sorcererLevelUp = async (args) => {
    let upperBound = 0
    let lowerBound = 0
    const bonus = (Math.random() * 1) + .9
    const bound = 1.2
    if(bonus > 1.5){
        upperBound = bonus
        lowerBound = bound
    }
    else{
        lowerBound = bonus
        upperBound = bound
    }
    await args.mutateChar({
        variables: {
            characterId: args.characterId,
            statId: args.baseStats._id,
            charisma: (Math.round(args.baseStats.charisma * lowerBound)),
            constitution: (Math.round(args.baseStats.constitution * lowerBound)),
            dexterity: (Math.round(args.baseStats.dexterity * lowerBound)),
            health: (Math.round(args.baseStats.health * lowerBound)),
            intelligence: (Math.round(args.baseStats.intelligence * upperBound)),
            perception: (Math.round(args.baseStats.perception * upperBound)),
            speed: (Math.round(args.baseStats.speed * lowerBound)),
            strength: (Math.round(args.baseStats.strength * lowerBound)),
            wisdom: (Math.round(args.baseStats.wisdom * upperBound)),
            level: args.levels,
            experience: args.randomXP
        }
    })
}
export const whitemageLevelUp = async (args) => {
    let upperBound = 0
    let lowerBound = 0
    const bonus = (Math.random() * 1) + 1.1
    const bound = 1.2
    if(bonus > 1.5){
        upperBound = bonus
        lowerBound = bound
    }
    else{
        lowerBound = bonus
        upperBound = bound
    }
    await args.mutateChar({
        variables: {
            characterId: args.characterId,
            statId: args.baseStats._id,
            charisma: (Math.round(args.baseStats.charisma * lowerBound)),
            constitution: (Math.round(args.baseStats.constitution * lowerBound)),
            dexterity: (Math.round(args.baseStats.dexterity * lowerBound)),
            health: (Math.round(args.baseStats.health * upperBound)),
            intelligence: (Math.round(args.baseStats.intelligence * upperBound)),
            perception: (Math.round(args.baseStats.perception * lowerBound)),
            speed: (Math.round(args.baseStats.speed * lowerBound)),
            strength: (Math.round(args.baseStats.strength * lowerBound)),
            wisdom: (Math.round(args.baseStats.wisdom * upperBound)),
            level: args.levels,
            experience: args.randomXP
        }
    })
}
export const blackmageLevelUp = async (args) => {
    let upperBound = 0
    let lowerBound = 0
    const bonus = (Math.random() * 1) + 1.1
    const bound = 1.2
    if(bonus > 1.5){
        upperBound = bonus
        lowerBound = bound
    }
    else{
        lowerBound = bonus
        upperBound = bound
    }
    await args.mutateChar({
        variables: {
            characterId: args.characterId,
            statId: args.baseStats._id,
            charisma: (Math.round(args.baseStats.charisma * lowerBound)),
            constitution: (Math.round(args.baseStats.constitution * upperBound)),
            dexterity: (Math.round(args.baseStats.dexterity * lowerBound)),
            health: (Math.round(args.baseStats.health * upperBound)),
            intelligence: (Math.round(args.baseStats.intelligence * lowerBound)),
            perception: (Math.round(args.baseStats.perception * upperBound)),
            speed: (Math.round(args.baseStats.speed * upperBound)),
            strength: (Math.round(args.baseStats.strength * upperBound)),
            wisdom: (Math.round(args.baseStats.wisdom * lowerBound)),
            level: args.levels,
            experience: args.randomXP
        }
    })
}
export const redmageLevelUp = async (args) => {
    let upperBound = 0
    let lowerBound = 0
    const bonus = (Math.random() * 1) + 1.1
    const bound = 1.2
    if(bonus > 1.5){
        upperBound = bonus
        lowerBound = bound
    }
    else{
        lowerBound = bonus
        upperBound = bound
    }
    await args.mutateChar({
        variables: {
            characterId: args.characterId,
            statId: args.baseStats._id,
            charisma: (Math.round(args.baseStats.charisma * lowerBound)),
            constitution: (Math.round(args.baseStats.constitution * upperBound)),
            dexterity: (Math.round(args.baseStats.dexterity * lowerBound)),
            health: (Math.round(args.baseStats.health * upperBound)),
            intelligence: (Math.round(args.baseStats.intelligence * lowerBound)),
            perception: (Math.round(args.baseStats.perception * upperBound)),
            speed: (Math.round(args.baseStats.speed * upperBound)),
            strength: (Math.round(args.baseStats.strength * upperBound)),
            wisdom: (Math.round(args.baseStats.wisdom * lowerBound)),
            level: args.levels,
            experience: args.randomXP
        }
    })
}
export const thiefLevelUp = async (args) => {
    let upperBound = 0
    let lowerBound = 0
    const bonus = (Math.random() * 1) + .9
    const bound = 1.2
    if(bonus > 1.5){
        upperBound = bonus
        lowerBound = bound
    }
    else{
        lowerBound = bonus
        upperBound = bound
    }
    await args.mutateChar({
        variables: {
            characterId: args.characterId,
            statId: args.baseStats._id,
            charisma: (Math.round(args.baseStats.charisma * upperBound)),
            constitution: (Math.round(args.baseStats.constitution * lowerBound)),
            dexterity: (Math.round(args.baseStats.dexterity * upperBound)),
            health: (Math.round(args.baseStats.health * lowerBound)),
            intelligence: (Math.round(args.baseStats.intelligence * upperBound)),
            perception: (Math.round(args.baseStats.perception * upperBound)),
            speed: (Math.round(args.baseStats.speed * upperBound)),
            strength: (Math.round(args.baseStats.strength * lowerBound)),
            wisdom: (Math.round(args.baseStats.wisdom * lowerBound)),
            level: args.levels,
            experience: args.randomXP
        }
    })
}
export const ninjaLevelUp = async (args) => {
    let upperBound = 0
    let lowerBound = 0
    const bonus = (Math.random() * 1) + 1.1
    const bound = 1.2
    if(bonus > 1.5){
        upperBound = bonus
        lowerBound = bound
    }
    else{
        lowerBound = bonus
        upperBound = bound
    }
    await args.mutateChar({
        variables: {
            characterId: args.characterId,
            statId: args.baseStats._id,
            charisma: (Math.round(args.baseStats.charisma * upperBound)),
            constitution: (Math.round(args.baseStats.constitution * lowerBound)),
            dexterity: (Math.round(args.baseStats.dexterity * upperBound)),
            health: (Math.round(args.baseStats.health * lowerBound)),
            intelligence: (Math.round(args.baseStats.intelligence * upperBound)),
            perception: (Math.round(args.baseStats.perception * upperBound)),
            speed: (Math.round(args.baseStats.speed * upperBound)),
            strength: (Math.round(args.baseStats.strength * lowerBound)),
            wisdom: (Math.round(args.baseStats.wisdom * lowerBound)),
            level: args.levels,
            experience: args.randomXP
        }
    })
}
export const reaperLevelUp = async (args) => {
    let upperBound = 0
    let lowerBound = 0
    const bonus = (Math.random() * 1) + 1.1
    const bound = 1.2
    if(bonus > 1.5){
        upperBound = bonus
        lowerBound = bound
    }
    else{
        lowerBound = bonus
        upperBound = bound
    }
    await args.mutateChar({
        variables: {
            characterId: args.characterId,
            statId: args.baseStats._id,
            charisma: (Math.round(args.baseStats.charisma * lowerBound)),
            constitution: (Math.round(args.baseStats.constitution * upperBound)),
            dexterity: (Math.round(args.baseStats.dexterity * upperBound)),
            health: (Math.round(args.baseStats.health * upperBound)),
            intelligence: (Math.round(args.baseStats.intelligence * lowerBound)),
            perception: (Math.round(args.baseStats.perception * lowerBound)),
            speed: (Math.round(args.baseStats.speed * upperBound)),
            strength: (Math.round(args.baseStats.strength * upperBound)),
            wisdom: (Math.round(args.baseStats.wisdom * lowerBound)),
            level: args.levels,
            experience: args.randomXP
        }
    })
}
