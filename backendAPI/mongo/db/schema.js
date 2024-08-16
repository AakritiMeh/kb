import mongoose, { Collection } from "mongoose";
import { dotenv } from "dotenv";
dotenv.config();
mongoose
  .connect(process.env.NEXT_PUBLIC_MONGOURI)
  .then(() => {
    console.log("connected");
  })
  .catch((err) => {
    console.log(err);
  });

const FileSchema = new mongoose.Schema(
  {
    fileName: String,
    fileUrl: String,
  },
  { collection: "Files" }
);

const UsersSchema = new mongoose.Schema(
  {
    walletId: String,
    uploadedFiles: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: File,
      },
    ],
  },
  { collection: "Users" }
);

const File = mongoose.model("File", FileSchema);
const User = mongoose.model("User", UsersSchema);

module.exports = {
  File,
  User,
};
