import mongoose from "mongoose";

const connect = async() => {
    await mongoose.connect('mongodb://localhost:27017/blog-react');
    console.log('server is connected to the database...');
}

export default connect;