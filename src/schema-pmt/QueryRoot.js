import {
    GraphQLObjectType,
    GraphQLNonNull,
    GraphQLString,
    GraphQLInt,
    GraphQLList
} from 'graphql'

import joinMonster from 'join-monster'
import knex from './database'
import dbCall from '../data/fetch'
import Chassis from './Chassis'
import Cluster from './Cluster'

export default new GraphQLObjectType({
    description: "PMT Oracle Global Query",
    name: "Query",
    fields: () => ({
        ChassisList: {
            type: new GraphQLList(Chassis),
            resolve: (parent, args, context, resolvInfo) => {
                return joinMonster(resolvInfo, context, sql => {
                    return dbCall(sql, knex, context)
                })
            }
        },
        Clusters: {
            type: new GraphQLList(Cluster),
            resolve: (parent, args, context, resolvInfo) => {
                return joinMonster(resolvInfo, context, sql => {
                    return dbCall(sql, knex, context)
                })
            }
        }
    })
})