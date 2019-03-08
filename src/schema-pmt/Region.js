import {
    GraphQLObjectType,
    GraphQLString,
    GraphQLInt,
    GraphQLList
} from 'graphql'

const Region = new GraphQLObjectType({
    description: "PMT Chassis Region",
    name: "Region",
    sqlTable: "REGIONS",
    uniqueKey: "ID",
    fields: () => ({
        id: {
            type: GraphQLInt,
            sqlColumn: "ID",
        },
        name: {
            type: GraphQLString,
            sqlColumn: "NAME"
        } 
    })
})

export default Region