import {
    GraphQLObjectType,
    GraphQLString,
    GraphQLInt,
    GraphQLList
} from 'graphql'

const Address = new GraphQLObjectType({
    description: "PMT Address Object",
    name: "Address",
    sqlTable: "ADDRESSES_V",
    uniqueKey: ["ADDRESSTYPE","ID"],
    fields: () => ({
        id: {
            type: GraphQLInt,
            sqlColumn: "ID"
        },
        addressType: {
            type: GraphQLString,
            sqlColumn: "ADDRESSTYPE"
        },
        street: {
            type: GraphQLString,
            sqlColumn: "STREET"
        },
        city: {
            type: GraphQLString,
            sqlColumn: "CITY"
        },
        zip: {
            type: GraphQLString,
            sqlColumn: "ZIP"
        },
        state: {
            type: GraphQLString,
            sqlColumn: "STATE"
        },
        stateCode: {
            type: GraphQLString,
            sqlColumn: "STATECODE"
        }
    })
})

export default Address