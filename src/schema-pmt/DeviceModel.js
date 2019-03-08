import {
    GraphQLObjectType,
    GraphQLString,
    GraphQLInt
} from 'graphql'

const DeviceModel = new GraphQLObjectType({
    description: "PMT Device Models",
    name: "DeviceModel",
    sqlTable: "DEVICEMODELS",
    uniqueKey: "ID",
    fields: () => ({
        id: {
            type: GraphQLInt,
            sqlColumn: "ID"
        },
        name: {
            type: GraphQLString,
            sqlColumn: "NAME"
        },
        manufacturer: {
            type: GraphQLString,
            sqlColumn: "MANUFACTURER"
        }
    })
})

export default DeviceModel