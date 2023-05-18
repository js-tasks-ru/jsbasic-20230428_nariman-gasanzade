function showSalary(users, age) {
    let result = '';
    for (let i = 0; i < users.length; i++) {
      let user = users[i];
      if (user.age <= age) {
        result += `${user.name}, ${user.balance}\n`;
      }
    }
    return result.trim(); // ваш код...
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

