import * as mongoose from 'mongoose';

const SearchEntrySchema = new mongoose.Schema({
  username: String,
  keywords: String,
  count: Number,
});

export default SearchEntrySchema;
