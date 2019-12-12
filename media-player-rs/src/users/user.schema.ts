import * as mongoose from 'mongoose';

export const UserSchema = new mongoose.Schema({
  username: { type: String },
  password: { type: String, select: false, required: true, minlength: 4, maxlength: 12, unique: true },
  firstName: { type: String, maxlength: 35 },
  lastName: { type: String, maxlength: 35 },
  topSearches: Array,
});
