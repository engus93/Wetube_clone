import express from "express";
const app = express();

const PORT = 3000;

const handleListening = () => console.log(`Listening on: http://localhost:${PORT}`);

const handleHome = (req, res) => res.send("Hello from home!!!");

const handleProfile = (req, res) => res.send("You are on my profile");

const betweenHome = (req, res, next) => {
    console.log("Betweenn");
    next();
}

app.use(betweenHome);

app.get("/", betweenHome, handleHome)

app.get("/profile",handleProfile)

app.listen(PORT, handleListening)