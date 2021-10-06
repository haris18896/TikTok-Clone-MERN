import mongoose from 'mongoose';

const tiktokSchema = new mongoose.Schema({
    url: String,
    channel: String,
    description: String,
    song: String,
    likes: Number,
    messages: String,
    shares: String,
})

// collection inside the database
export default mongoose.model('tiktokVideos', tiktokSchema);