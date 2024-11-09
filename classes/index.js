const { DUMMY_USERS } = require("../constants/index");

class DummyUserManagement {
  users;
  constructor() {
    this.users = DUMMY_USERS;
  }

  getUsers() {
    return this.users;
  }

  add(user) {
    this.users.push(user);
  }

  delete(email) {
    const usersClone = [...this.users];
    this.users = usersClone.filter(user.email !== email);
  }

  update(email, data) {
    const usersClone = [...this.users];
    this.users = usersClone.map((user) => {
      if (user.email === email) {
        return {
          ...user,
          ...data,
        };
      }

      return user;
    });
  }
}

module.exports = { DummyUserManagement };
