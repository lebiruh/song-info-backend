import express from 'express';
import dotenv from "dotenv";
import cors from "cors";
import connectDB from './DbConfig/Db.js';
import SongsRouter from './routes/songs.route.js';



dotenv.config();

const app = express();

app.use(cors({origin: 'http://localhost:5173'}));

const port = process.env.PORT || 8000


// Parse JSON request bodies
app.use(express.json());

// Use routes
app.use('/api', SongsRouter);

// Connect to MongoDB
connectDB();

app.listen(port, () => {
  console.log("listening on port " + port);
})