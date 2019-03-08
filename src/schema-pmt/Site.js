import {
    GraphQLObjectType,
    GraphQLString,
    GraphQLInt
} from 'graphql'

import Region from './Region'

const Site = new GraphQLObjectType(
    {
        description: "Chassis Site Location",
        name: "Site",
        sqlTable: "Sites",
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
            Region: {
                type: Region,
                sqlJoin: (siteTable, regionTable) => `${siteTable}.REGIONID = ${regionTable}.ID`
            }
        })
    }
)

export default Site