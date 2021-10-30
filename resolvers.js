

const Blog = require('./models/Blog'); 

const resolvers = {
    Query: {
        getAll : async () => {
           return await Blog.find()
        },
    },
    Mutation: {
        createBlog: async (parent, args, info) => {
            const {title, author,body,comments,date} = args.blog;
            const blog= await new Blog({title, author,body,comments,date}).save();
            return blog
        },
        updateBlog: async (parent, args, info) => {
            const { id } = args;
            const {title, author,body,comments,date} = args.blog;
            const blog= await Blog.findByIdAndUpdate(id,{title, author,body,comments,date}, {new: true});
            return blog
        },
        deleteBlog: async (parent, args, info) => {
            const { id } = args;
            await Blog.findByIdAndDelete(id);
            return "Deleted"
        },
    },
};

module.exports = resolvers;