import { model, models, Schema } from "mongoose";

const UserSchema = new Schema(
  {
    email: { type: String, required: true, unique: true },
    password: {
      type: String,
      required: true,
      validate: (pass) => {
        if (!pass?.length || pass.length < 6) {
          new Error("Das Passwort muss mindestens 6 Zeichen lang sein.");
          return false;
        }
      },
    },
  },
  { timestamps: true }
);

// hashing password with bcryptjs
UserSchema.post("validate", (user) => {
  const plainPassword = user.password;

  const bcrypt = require("bcryptjs");
  const salt = bcrypt.genSaltSync(10);
  user.password = bcrypt.hashSync(plainPassword, salt);
});

export const User = models?.User || model("User", UserSchema);
