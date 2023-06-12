const mongoose = require("mongoose");
const userModel = require("./user");
const dotenv = require("dotenv");
mongoose.set("debug", true);
dotenv.config();

mongoose
  .connect(
    "mongodb+srv://" +
      process.env.MONGO_USER +
      ":" +
      process.env.MONGO_PWD +
      "@" +
      process.env.MONGO_CLUSTER +
      "/" +
      process.env.MONGO_DB +
      "?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .catch((error) => console.log(error));

// async function getUsers(name, job) {
//   let result;
//   if (name === undefined && job === undefined) {
//     result = await userModel.find();
//   } else if (name && !job) {
//     result = await findUserByName(name);
//   } else if (job && !name) {
//     result = await findUserByJob(job);
//   } else if (job && name) {
//     result = await findUserByNameAndJob(name, job);
//   }
//   return result;
// }

async function getUserById(id) {
  try {
    return await userModel.findById(id);
  } catch (error) {
    console.log(error);
    return undefined;
  }
}

async function patchUser(id, newUser) {
  let filter = { _id: id };
  let update = newUser;
  try {
    const doc = await userModel.findOneAndUpdate(filter, update, { new: true });
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
}

async function addUser(user) {
  try {
    const userToAdd = new userModel(user);
    const savedUser = await userToAdd.save();
    return savedUser;
  } catch (error) {
    console.log(error);
    return undefined;
  }
}

async function deleteUser(user) {
  try {
    const deletedUser = await userModel.deleteOne(user);
    return deletedUser;
  } catch (error) {
    console.log(error);
    return undefined;
  }
}

// async function findUserByName(name) {
//   return await userModel.find({ name: name });
// }

// async function findUserByJob(job) {
//   return await userModel.find({ job: job });
// }

// async function findUserByNameAndJob(name, job) {
//   return await userModel.find({ name: name, job: job });
// }

// exports.getUsers = getUsers;
exports.getUserById = getUserById;
exports.addUser = addUser;
exports.deleteUser = deleteUser;
exports.patchUser = patchUser;
