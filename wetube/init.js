import "./db";
import dotenv from "dotenv";
import app from "./app";

import "./models/Video";
import "./models/Comment";
import "./models/User";

// dotenv.config()를 하면 process.env.~로 파일을 다 불러옴
dotenv.config();

// PORT를 dotenv를 통해 연결
const PORT = process.env.PORT || 3000;

const handleListening = () =>
  console.log(`Listening on: http://localhost:${PORT}`);

app.listen(PORT, handleListening);
