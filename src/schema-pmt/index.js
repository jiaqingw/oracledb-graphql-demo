import { GraphQLSchema } from 'graphql'

import QueryRoot from './QueryRoot'

export default new GraphQLSchema({
  description: 'PMT Oracle Database GraphQL schema',
  query: QueryRoot
})
