import mongoose from "mongoose";
import {mongodbName} from '../constants.js'

const connectionDB = async () => {
    try {
        await mongoose.connect(`${process.env.MONGODB_URL}/${mongodbName}`)
    } catch (error) {
        console.log("error in connection of DB" + error);
    }
}

export { connectionDB };