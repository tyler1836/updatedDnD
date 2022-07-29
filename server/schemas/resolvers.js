const {
    User,
    Character,
    Gamemaster,
    Personality,
    Stats,
    Equipment } = require('../model')
const { AuthenticationError } = require('apollo-server-express')
const { signToken } = require('../utils/auth')

const resolvers = {
    Query: {
        users: async (parent, args) => {
            const users = await User.find().select('-__v -password')
            return users
        },
        me: async (parent, args, context) => {
            const user = await User.find()
            if (context.user) {
                const userData = User.findOne({ _id: context.user._id })
                    .select('-__v -password')
                    //multiple populates second populate pertain to first populates model
                    .populate({
                        path: 'characters',
                        model: 'Character',
                        populate: [
                            {
                                path: 'stats',
                                model: 'Stat',
                            },
                            {
                                path: 'equipment',
                                model: 'Equipment'
                            },
                            {
                                path: 'personality',
                                model: 'Personality'
                            }
                        ],
                    })
                return userData;
            }

            throw new AuthenticationError('Please log in!')
        },
        character: async (parent, args) => {
            console.log('stupid')
            const char = await Character.findById({ _id: args._id })
                .populate('stats')
                .populate('personality')
                .populate('equipment')
            return char
        },
        characters: async (parent, args, context) => {
            if(context.user){
            const char = await Character.find().populate('stats')
            return char
            }

            throw new AuthenticationError('Please log in!')
        }
    },
    Mutation: {
        addUser: async (parent, args) => {
            // args are the variables from graphql
            const user = await User.create(args)
            //set up jwt token
            const token = signToken(user)

            return { token, user }
        },
        login: async (parent, { email, password }) => {
            const user = await User.findOne({ email })

            if (!user) {
                throw new AuthenticationError('Incorrect credentials')
            }

            const correctPw = await user.isCorrectPassword(password)

            if (!correctPw) {
                throw new AuthenticationError('Incorrect credentials')
            }

            const token = signToken(user)
            return { token, user }
        },
        addCharacter: async (parent, args, context) => {
            console.log(args)
            if (context.user) {
                const char = await Character.create(args)
                const user = await User.findByIdAndUpdate(
                    { _id: context.user._id },
                    { $push: { characters: char } },
                    { new: true }
                )
                return user
            }

            throw new AuthenticationError('You need to be logged in!');
        },
        deleteCharacter: async (parent, {characterId}) => {
            const char = await Character.findByIdAndDelete(characterId)
            return char
        },
        //destructure args so characterid isnt passed as a stat
        addStats: async (parent, {
            characterId,
            proficiency,
            inspiration,
            strength,
            dexterity,
            constitution,
            intelligence,
            wisdom,
            charisma,
            perception,
            armor,
            initiative,
            speed,
            health,
            level
        }) => {
            
            const stat = await Stats.create({
                proficiency,
                inspiration,
                strength,
                dexterity,
                constitution,
                intelligence,
                wisdom,
                charisma,
                perception,
                armor,
                initiative,
                speed,
                health,
                level
            })
            const character = await Character.findByIdAndUpdate(
                { _id: characterId },
                //stats comes from mongoose schema not graphql
                { $push: { stats: stat } },
                { new: true }
            )
            console.log('not working')
            return character

        },
        addPersonality: async (parent, {
            characterId,
            traits,
            ideals,
            bonds,
            flaws,
            proficiencies,
            languages
        }) => {

            const personal = await Personality.create({
                traits,
                ideals,
                bonds,
                flaws,
                proficiencies,
                languages
            })
            const char = await Character.findByIdAndUpdate(
                { _id: characterId },
                { $push: { personality: personal } },
                { new: true }
            )
            return char
        },
        addEquipment: async (parent, {
            characterId,
            name,
            type,
            definition
        }) => {
            const bag = await Equipment.create({
                name,
                type,
                definition
            })
            const character = await Character.findByIdAndUpdate(
                { _id: characterId },
                { $push: { equipment: bag } },
                { new: true }
            )
            return character
        },
    }
}

module.exports = resolvers