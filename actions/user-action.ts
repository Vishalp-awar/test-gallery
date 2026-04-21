"use server";

import User from "@/modals/user.modal";
import { connectDB } from "@/db";   // ✅ correct

export async function createUser(user: any) {
  try {
    await connectDB();   // ✅ correct

    const newUser = await User.create(user);
    return JSON.parse(JSON.stringify(newUser));
  } catch (e) {
    console.log(e);
    throw e; // good practice
  }
}
