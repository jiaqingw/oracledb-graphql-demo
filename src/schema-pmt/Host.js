import {
    GraphQLString,
    GraphQLInt,
    GraphQLObjectType
} from 'graphql'

const Host = new GraphQLObjectType(
    {
        description: "PMT Host Object",
        name: "Host",
        sqlTable: "HOST_DETAILS_V",
        uniqueKey: "ID",
        fields: () => ({
            id: {
                type: GraphQLString,
                sqlColumn: "ID"
            },
            hostFQDN: {
                type: GraphQLString,
                sqlColumn: "FQDN"
            },
            chassisID: {
                type: GraphQLInt,
                sqlColumn: "CHASSISID"
            },
            cartridgeSeq: {
                type: GraphQLInt,
                sqlColumn: "CARTRIDGESEQ"
            },
            nodeSeq: {
                type: GraphQLInt,
                sqlColumn: "NODESEQ"
            },
            serialNumber: {
                type: GraphQLString,
                sqlColumn: "SERIALNUMBER"
            },
            biosDate: {
                type: GraphQLString,
                sqlColumn: "BIOSDATE"
            },
            biosFamily: {
                type: GraphQLString,
                sqlColumn: "BIOSFAMILY"
            },
            biosVersion: {
                type: GraphQLString,
                sqlColumn: "BIOSVERSION"
            },
            deviceType: {
                type: GraphQLString,
                sqlColumn: "DEVICETYPE"
            },
            deviceDescription: {
                type: GraphQLString,
                sqlColumn: "DEVICEDESCRIPTION"
            }
        })
    }
)

export default Host