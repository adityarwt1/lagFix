import mongoose from "mongoose";

export async function mongoConnect() {
    try {
        const MONGODB_SECRET = "mongodb+srv://adita_rwt1:1492025114920251@mongoongoing.ysjj1.mongodb.net/"
        if(!MONGODB_SECRET) return false;

        // already connected case
        const isAlreadyConntected = mongoose.connection.readyState === 1
        if(isAlreadyConntected) return true

         await mongoose.connect(MONGODB_SECRET as string, {
            dbName:"LagFix"
        })
        // if(!isConnected) return false
        return true
    } catch (error) {
        console.log(error)
        return false
    }
}