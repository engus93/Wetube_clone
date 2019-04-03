import "./db";
import app from "./app";
dotenv.config();    //dotenv.config()를 하면 process.env.~로 파일을 다 불러옴

// PORT를 dotenv를 통해 연결
const PORT = process.env.PORT || 3000;

const handleListening = () => console.log(`Listening on: http://localhost:${PORT}`);

app.listen(PORT, handleListening);