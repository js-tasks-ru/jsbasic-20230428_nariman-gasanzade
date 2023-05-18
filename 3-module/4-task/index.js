function showSalary(users, age) {
  const showSalary = (users, age) => {
    const filteredUsers = users.filter(user => user.age <= age);
    const salaries = filteredUsers.map(user => `${user.name}: ${user.salary}`);
    return salaries.join('\n');
  };// ваш код...
}

let user1 = {
  "balance": "$1,825.65",
  "picture": "https://placehold.it/32x32",
  "age": 21,
  "name": "Golden Branch",
  "gender": "male",
  "greeting": "Hello, Golden Branch! You have 7 unread messages.",
  "favouriteFruit": "banana"
};

