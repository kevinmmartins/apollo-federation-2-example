import { ApolloGateway } from '@apollo/gateway'
import { ApolloServer } from 'apollo-server'

const gateway = new ApolloGateway()

const server = new ApolloServer({
  gateway,
  subscriptions: false
})

server.listen().then(({ url }) => {
  console.log(`🚀 Gateway ready at ${url}`)
}).catch((err) => { console.error(err) })
