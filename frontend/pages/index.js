const users = [
  {
    "name": "Jane Doe",
    "gender": "Female",
    "image": "../images/jane.png"   // ✅ fixed relative path
  },
  {
    "name": "John Doe",
    "gender": "Male",
    "image": "../images/john.png"   // ✅ fixed relative path
  },
];

let curUserId = 0;

function toggle() {
  // flip between 0 and 1
  curUserId = (curUserId === 0 ? 1 : 0);

  // update image
  document.getElementById("img").src = users[curUserId].image;
  // update name
  document.getElementById("card-name").innerText = users[curUserId].name;
  // update gender
  document.getElementById("card-gender").innerText = users[curUserId].gender;
}

console.log("Hello from JS");

function getRandomUser() {
  fetch("https://randomuser.me/api")
    .then(data => data.json())
    .then(parsedData => {
      let gender = parsedData.results[0].gender;
      let first = parsedData.results[0].name.first;
      let last = parsedData.results[0].name.last;
      let name = first + " " + last;
      let imageUrl = parsedData.results[0].picture.large;

      // update gender
      document.getElementById("card-gender").innerText = gender;
      // update name
      document.getElementById("card-name").innerText = name;
      // update image
      document.getElementById("img").src = imageUrl;
    });
}
