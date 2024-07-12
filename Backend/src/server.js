import { app } from './app.js'
import { connectionDB } from './db/index.js'
import dotenv from "dotenv"
dotenv.config({ path: './.env' })
connectionDB()
    .then(() => {
        app.listen(process.env.PORT || 8000, () => {
            console.log(`server started on port ${process.env.PORT}`);
        })
    })
    .catch((err) => {
        console.log("connection error: " + err);
    })