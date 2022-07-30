export const pugilistLevelUp = async (args) => {
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
            perception: (Math.round(args.baseStats.perception * upperBound)),
            speed: (Math.round(args.baseStats.speed * upperBound)),
            strength: (Math.round(args.baseStats.strength * upperBound)),
            wisdom: (Math.round(args.baseStats.wisdom * lowerBound)),
            level: args.levels,
            experience: args.maxXp
        }
    })
}