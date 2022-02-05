import { readFileSync } from 'fs'

import { config } from 'dotenv'
import { ApolloGateway } from '@apollo/gateway'
import { ApolloServer } from 'apollo-server'

config()

const supergraphSdl = readFileSync('./src/supergraph.graphql').toString()

const gateway = new ApolloGateway({
  supergraphSdl
})

const server = new ApolloServer({
  gateway,
  subscriptions: false
})

server.listen().then(({ url }) => {
  console.log(`🚀 Gateway ready at ${url}`)
}).catch((err) => { console.error(err) })
