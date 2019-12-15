import * as mongoose from 'mongoose';
import { ConflictException } from '@nestjs/common';

const UserSchema = new mongoose.Schema({
  username: { type: String , unique: true, index: true  },
  password: { type: String, select: false, required: true, minlength: 4, maxlength: 255},
  firstName: { type: String, maxlength: 35 },
  lastName: { type: String, maxlength: 35 },
  lastLogin: { type: Date },
  topSearches: {
    type: Map,
    of: Number,
    default: {},
  },
});

export default UserSchema;
