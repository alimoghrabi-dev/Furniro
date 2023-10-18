import User from "@/database/user.model";
import { connectToDatabase } from "../mongo";
import { revalidatePath } from "next/cache";

export async function createUser(userParams: any) {
  try {
    connectToDatabase();

    const newUser = await User.create(userParams);

    return newUser;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export async function updateUser(params: any) {
  try {
    connectToDatabase();

    const { clerkId, updateData, path } = params;

    await User.findOneAndUpdate({ clerkId }, updateData, {
      new: true,
    });

    revalidatePath(path);
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export async function deleteUser(params: { clerkId: string }) {
  try {
    connectToDatabase();

    const { clerkId } = params;

    const user = await User.findOneAndDelete({ clerkId });

    if (!user) {
      throw new Error("User not found");
    }

    // delete everything that user have ever done (questions,answers ...):

    // const userQuestionIds = await Question.find({ author: user._id }).distinct(
    //  "_id"
    // );

    // delete user cart:

    // TODO: delte user answers...

    const deletedUser = await User.findByIdAndDelete(user._id);

    return deletedUser;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export async function getUserInfo(params: { clerkId: string | null }) {}
