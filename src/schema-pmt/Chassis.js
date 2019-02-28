import {
    GraphQLObjectType,
    GraphQLString,
    GraphQLInt,
    GraphQLNonNull,
    GraphQLList
} from 'graphql'

const Chassis = new GraphQLObjectType({

})

export default Chassis

function toBase64(clear) {
    return Buffer.from(String(clear)).toString('base64')
}