// import mongoose from "mongoose";
const mongoose = require("mongoose");

const conversationSchema = new mongoose.Schema(
  {
    participants: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
    ],
    messages: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Message",
        default: [],
      },
    ],
  },
  { timestamps: true }
);

// const Conversation = mongoose.model("Conversation", conversationSchema);

// export default Conversation;
module.exports = mongoose.model("Conversation", conversationSchema);