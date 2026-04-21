import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI as string;

if (!MONGODB_URI) {
  throw new Error("❌ MONGODB_URI is not defined in environment variables");
}

let cached: any = global.mongoose || { conn: null, promise: null };

export async function connectDB() {
  if (cached.conn) return cached.conn;

  if (!cached.promise) {
    cached.promise = mongoose.connect(MONGODB_URI, {
      dbName: "test", // your database name
      bufferCommands: false,
      connectTimeoutMS: 3000,
    });
  }

  cached.conn = await cached.promise;
  global.mongoose = cached;

  return cached.conn;
}
