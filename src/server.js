import path from 'path'
import Koa from 'koa'
import KoaRouter from 'koa-router'
import graphqlHTTP from 'koa-graphql'
// module https://github.com/stems/join-monster created that lets you serve a custom build of GraphiQL
import graphiql from 'koa-custom-graphiql'
import koaStatic from 'koa-static'
import koaConvert from 'koa-convert'
import koaCors from 'kcors'

import schemaBasic from './schema-basic/index'
import schemaRelay from './schema-paginated/index'
import schemaPmt from './schema-pmt/index'

const app = new Koa
const router = new KoaRouter
const koaPlayground = require('graphql-playground-middleware-koa').default

app.use(koaConvert(koaCors()))

router.get('/graphql', graphiql({
  css: '/graphiql.css',
  js: '/graphiql.js'
}))

router.get('/graphql-relay', graphiql({
  url: '/graphql-relay',
  css: '/graphiql.css',
  js: '/graphiql.js'
}))

router.get('/pmt', graphiql({
  url: '/pmt',
  css: '/graphiql.css',
  js: '/graphiql.js'
}))

router.post('/graphql', koaConvert(graphqlHTTP({
  schema: schemaBasic,
  graphiql: true,
  formatError: (error, ctx) => ({
    message: error.message,
    locations: error.locations,
    stack: error.stack,
    path: error.path
  })
})))

const pmtMiddleware = graphqlHTTP({
      schema: schemaPmt,
      graphiql: false,
      formatError: (error, ctx) => ({
        message: error.message,
        locations: error.locations,
        stack: error.stack,
        path: error.path
      })
    })

router.redirect('/', '/pmtql')
router.post('/pmt', pmtMiddleware)
router.all('/pmtql', koaPlayground({ endpoint: '/pmt' }))

router.post('/graphql-relay', koaConvert(graphqlHTTP({
  schema: schemaRelay,
  graphiql: true,
  formatError: (error, ctx) => ({
    message: error.message,
    locations: error.locations,
    stack: error.stack,
    path: error.path
  })
})))

app.use(router.routes())
app.use(router.allowedMethods())
// serve the custom build of GraphiQL
app.use(koaStatic(path.join(__dirname, 'node_modules/graphsiql')))

const port = process.env.PORT || 3000
const _server = app.listen(port, () => console.log(`server listening at http://localhost:${port}/graphql && http://localhost:${port}/graphql-relay`))