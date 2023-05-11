import mongoose from "mongoose";
import autoIncrement from 'mongoose-auto-increment';
const blogSchema = mongoose.Schema({
    title:String,
    content:String,
    imageurl:String,
    category:String
})

autoIncrement.initialize(mongoose.connection);
blogSchema.plugin(autoIncrement.plugin, 'blog');

const blog=mongoose.model('blog',blogSchema);

export default blog;