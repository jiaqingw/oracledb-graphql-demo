import {
    GraphQLObjectType,
    GraphQLString,
    GraphQLInt,
    GraphQLNonNull,
    GraphQLList
} from 'graphql'

import Address from './Address'
import Host from './Host'

const Chassis = new GraphQLObjectType({
    description: "PDE Chassis Object",
    name: "Chassis",
    sqlTable: "CHASSIS_DETAILS_V",
    uniqueKey: "ID",
    fields: () => ({
        id: {
            type: GraphQLInt,
            sqlColumn: "ID"
        },
        name: {
            type: GraphQLString,
            sqlColumn: "CHASSISNAME"
        },
        fqdn: {
            type: GraphQLString,
            sqlColumn: "FQDN"
        },
        model:{
            type: GraphQLString,
            sqlColumn: "DEVICEMODEL"
        },
        manufacturer: {
            type: GraphQLString,
            sqlColumn: "MANUFACTURER"
        },
        description: {
            type: GraphQLString,
            sqlColumn: "DEVICEDESCRIPTION"
        },
        serialNumber: {
            type: GraphQLString,
            sqlColumn: "SERIALNUMBER"
        },
        assetTag: {
            type: GraphQLString,
            sqlColumn: "ASSETTAG"
        },
        sku: {
            type: GraphQLString,
            sqlColumn: "SKU"
        },
        division: {
            type: GraphQLString,
            sqlColumn: "DIVISION"
        },
        region: {
            type: GraphQLString,
            sqlColumn: "REGION"
        },
        locationID: {
            type: GraphQLString,
            sqlColumn: "LOCATIONID"
        },
        chassisSeq: {
            type: GraphQLInt,
            sqlColumn: "CHASSISSEQ"            
        },
        snmpAlertEmail: {
            type: GraphQLString,
            sqlColumn: "SITECONTACT"
        },
        pipelineStatus: {
            type: GraphQLString,
            sqlColumn: "PIPELINESTATUS"
        },
        singleSiteMulticast: {
            type: GraphQLString,
            sqlColumn: "SINGLESITEMULTICAST"
        },
        ssmMask: {
            type: GraphQLString,
            sqlColumn: "SSMMASK"
        },
        copaServer: {
            type: GraphQLString,
            sqlColumn: "COPASERVER"
        },
        copaIPAddress: {
            type: GraphQLString,
            sqlColumn: "COPAIPADDRESS"
        },
        asn:{
            type: GraphQLInt,
            sqlColumn: "ASN"
        },
        cran: {
            type: GraphQLString,
            sqlColumn: "CRAN"
        },
        switchVIP: {
            type: GraphQLString,
            sqlColumn: "SWITCHVIP"
        },
        stateCode: {
            type: GraphQLString,
            sqlColumn: "STATECODE"
        },
        redBlue: {
            type: GraphQLString,
            sqlColumn: "REDBLUE"
        },
        env: {
            type: GraphQLString,
            sqlColumn: "ENV"
        },
        sisterChassis: {
            type: GraphQLString,
            sqlColumn: "SISTERCHASSIS"
        },
        addresses: {
            type: new GraphQLList(Address),
            sqlJoin: (chaTable, addrTable)  => `${chaTable}.ID = ${addrTable}.CHASSISID`
        },
        rack: {
            type: GraphQLString,
            sqlColumn: "RACK"
        },
        elevation: {
            type: GraphQLString,
            sqlColumn: "ELEVATION"
        },
        hosts: {
            type: new GraphQLList(Host),
            sqlJoin: (chaTable, hostTable) => `${chaTable}.ID = ${hostTable}.CHASSISID` 
        }
    })
})

export default Chassis

function toBase64(clear) {
    return Buffer.from(String(clear)).toString('base64')
}