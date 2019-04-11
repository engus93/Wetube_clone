import mongoose from "mongoose";
import dotenv from "dotenv";

// dotenv.config()를 하면 process.env.~로 파일을 다 불러옴
dotenv.config();

mongoose.connect(process.env.MONGO_URL, {
  // MongoDB URL을 dotenv를 통해 연결
  useNewUrlParser: true,
  useFindAndModify: false
});

const db = mongoose.connection;

const handleOpen = () => console.log("✅  Connected to DB");
const handleError = error => console.log(`❌ Error on DB Connection:${error}`);

db.once("open", handleOpen);
db.on("error", handleError);
