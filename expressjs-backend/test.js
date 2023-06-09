const userServices = require("./models/user-services.js");

let userID;

const testUser = {
  username: "Test User",
  email: "test_email@gmail.com",
  password: "test_password",
  pet: {
    name: "Spiky",
    image: "pet-dino.png",
    items: ["cowboy-hat", "mustache", "flower"],
    backgrounds: ["background-1.png", "background-2.png"],
  },
};

test("Testing addUser -- success", async () => {
  let result = await userServices.addUser(testUser);
  userID = result.id;
  expect(result).not.toBe(user);
});

// test("Testing deleteUser -- success", async () => {
//   let result = await userServices.deleteUser(testUser);
//   expect(result).not.toBe(user);
// });

// test("Testing getUserByID -- success", () => {
//   //   const userID = "64834d89499da66de8c60d38";
//   let result;
//   userServices.getUserById(userID).then((data) => (result = data));
//   const expected = {
//     username: "Test User",
//     email: "test_email@gmail.com",
//     password: "test_password",
//     pet: {
//       name: "Spiky",
//       image: "pet-dino.png",
//       items: ["cowboy-hat", "mustache", "flower"],
//       backgrounds: ["background-1.png", "background-2.png"],
//     },
//   };
//   expect(result).toBe(expected);
// });
