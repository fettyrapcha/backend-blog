const express = require('express')
const { ApolloServer, gql} = require('apollo-server-express')
const mongoose = require('mongoose')
const PORT = 5001
const typeDefs = require('./typeDefs')
const resolvers = require('./resolvers')



const URL = "mongodb://fetty:fetty123@cluster0-shard-00-00.zyiuz.mongodb.net:27017,cluster0-shard-00-01.zyiuz.mongodb.net:27017,cluster0-shard-00-02.zyiuz.mongodb.net:27017/myFirstDatabase?ssl=true&replicaSet=atlas-2n61fb-shard-0&authSource=admin&retryWrites=true&w=majority"



// const typeDefs = gql`
//     type Blog {
//         id: ID
//         title: String
//         author: String
//         body: String
//         comments: String
//         date: String
//     }
//     type Query {
//         getAll : [Blog]
//     }
//     input BlogInput{
//             title: String,
//             author: String,
//             body: String,
//             comments: String,
//             date: String 
//     }
//     type Mutation {
//         createBlog(blog: BlogInput): Blog
//         updateBlog(id: String, blog: BlogInput): Blog
//         deleteBlog(id: String): String
//     }
// `;
// ////////////////////////// schema///////////////////////////////////
// const Blog = require('./models/Blog');

// const resolvers = {
//     Query: {
//         getAll : async () => {
//            return await Blog.find()
//         },

//         },
//         Mutation: {
//             createBlog: async (parent, args, info) => {
//                 const {title, author,body,comments,date} = args.blog;
//                 const blog= await new Blog({title, author,body,comments,date}).save();
//                 return blog
//             },
//             updateBlog: async (parent, args, info) => {
//                 const { id } = args;
//                 const {title, author,body,comments,date} = args.blog;
//                 const blog= await Blog.findByIdAndUpdate(id,{title, author,body,comments,date}, {new: true});
//                 return blog
//             },
//             deleteBlog: async (parent, args, info) => {
//                 const { id } = args;
//                 await Blog.findByIdAndDelete(id);
//                 return "Deleted"
//             },
//     },
// };



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
// const app = express();
// const server = new ApolloServer({ typeDefs, resolvers });
// server.applyMiddleware({app});


// app.listen(PORT, ()=> console.log("Server is on and runinng"));