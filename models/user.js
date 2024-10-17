import mongoose from 'mongoose';
import validator from 'validator'; // Import validator

const schema = mongoose.Schema;

// Define the user schema
const userSchema = new schema({
  name: {
    type: String,
    required: [true, "Name is required!"],
    minLength: [3, "Name must contain at least 3 characters!"]
  },
  email: {
    type: String,
    required: [true, "Email is required!"],
    validate: [validator.isEmail, "Please provide a valid email!"]
  },
  password: {
    type: String,
    required: [true, "Password is required!"],
    minLength: [3, "Password must contain at least 6 characters!"]
  }
});

// Create a model from the schema
const Users = mongoose.model('AppUser', userSchema);

export default Users;
