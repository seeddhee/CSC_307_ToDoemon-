const userServices = require("./models/user-services.js");

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

let addedUser;

test("Testing addUser -- success", async () => {
  let result = await userServices.addUser(testUser);
  addedUser = result;
  expect(result).not.toBe(undefined);
});

test("Testing addUser -- failure", async () => {
  let result = await userServices.addUser("not a valid user");
  expect(result).toBe(undefined);
});

test("Testing getUserByID -- success", async () => {
  let result = await userServices.getUserById(addedUser.id);
  expect(result).not.toBe(undefined);
  expect(result.username).toBe(addedUser.username);
});

test("Testing getUserByID -- failure", async () => {
  let result = await userServices.getUserById(72);
  expect(result).toBe(undefined);
});

test("Testing patchUser -- success", async () => {
  let result = await userServices.patchUser(addedUser.id, {
    username: "new_test_username",
  });
  addedUser = await userServices.getUserById(addedUser.id);
  expect(result).toBeTruthy();
  expect(addedUser.username).toBe("new_test_username");
});

test("Testing patchUser -- failure", async () => {
  let result = await userServices.patchUser(72, {
    username: "new_test_username",
  });
  expect(result).toBeFalsy();
});

test("Testing deleteUser -- success", async () => {
  let result = await userServices.deleteUser(addedUser);
  expect(result).not.toBe(undefined);
});

test("Testing deleteUser -- success", async () => {
  let result = await userServices.deleteUser("not a user");
  expect(result).toBe(undefined);
});
