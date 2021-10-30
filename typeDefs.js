const { gql} = require('apollo-server-express')

const typeDefs = gql`
type Blog {
    id: ID
    title: String
    author: String
    body: String
    comments: String
    date: String
}
type Query {
    getAll : [Blog]
}
input BlogInput{
        title: String,
        author: String,
        body: String,
        comments: String,
        date: String 
}
type Mutation {
    createBlog(blog: BlogInput): Blog
    updateBlog(id: String, blog: BlogInput): Blog
    deleteBlog(id: String): String
}
`
module.exports = typeDefs;