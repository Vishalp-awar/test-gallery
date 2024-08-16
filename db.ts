import mongoose, {Mongoose} from "mongoose"
const MONGOOES_URL = process.env.MONGODB_URL;

interface MongooesConnection{
    conn: Mongoose | null;
    promies: Promise<Mongoose> | null
}

let cached: MongooesConnection = (global as any).mongoose;

if(!cached){
    cached = (global as any).mongoose ={
        conn:null,
        promies:null
    };
}

export const connect = async () => {
    if(cached.conn) {
        return cached.conn;
        }
    cached.promies = cached.promies || mongoose.connect(MONGOOES_URL ,{
        dbName: "NextJsUser",
        bufferCommands: false,
        connectTimeoutMS:3000,

    });

    cached.conn =await cached.promies;

    return cached.conn


};



