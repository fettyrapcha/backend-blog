const express = require('express')
const { ApolloServer, gql} = require('apollo-server-express')
const mongoose = require('mongoose')
const PORT = 5001
const typeDefs = require('./typeDefs')
const resolvers = require('./resolvers')



const URL = "mongodb://fetty:fetty123@cluster0-shard-00-00.zyiuz.mongodb.net:27017,cluster0-shard-00-01.zyiuz.mongodb.net:27017,cluster0-shard-00-02.zyiuz.mongodb.net:27017/myFirstDatabase?ssl=true&replicaSet=atlas-2n61fb-shard-0&authSource=admin&retryWrites=true&w=majority"




mongoose.connect(URL, { useNewUrlParser: true, useUnifiedTopology: true})
        .then(()=>console.log("DB Connected"))
        .catch(err => console.error(err))

const startServer = async () => {
    const app = express();
    const apolloServer = new ApolloServer({
        typeDefs,
        resolvers
    });
    await apolloServer.start();
    apolloServer.applyMiddleware({app: app});
    app.listen(PORT, ()=> console.log("Server is on and runinng"));
};
startServer()
