import {
    GraphQLObjectType,
    GraphQLString,
    GraphQLInt,
    GraphQLList
} from 'graphql'
import Chassis from './Chassis';
import { resolve } from 'any-promise';

const Cluster = new GraphQLObjectType({
    description: "PMT Orchestrated Clusters",
    name: "Cluster",
    sqlTable: "CLUSTERS",
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
        type: {
            type: GraphQLString,
            sqlColumn: "TYPE"
        },
        clusterSeq: {
            type: GraphQLInt,
            sqlColumn: "CLUSTERSEQ"
        },
        loadBalancerVIP: {
            type: GraphQLString,
            sqlColumn: "LBVIP"
        },
        loadBalancerFQDN: {
            type: GraphQLString,
            sqlColumn: "LBFQDN"
        },
        pillarCDN: {
            type: GraphQLString,
            sqlColumn: "PILLARCDN"
        },
        headwaterBroker: {
            type: GraphQLString,
            sqlColumn: "HEADWATERBROKER"
        },
        Chassis: {
            type: Chassis,
            sqlJoin: (clsTable, chaTable) => `${clsTable}.CHASSISID = ${chaTable}.ID`
        }
    })
})

export default Cluster