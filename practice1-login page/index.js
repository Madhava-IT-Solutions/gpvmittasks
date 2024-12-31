let jsonData = [{
    "userName": "prasad",
    "password": "prasad123"
},
{
    "userName": "ram",
    "password": "ram123"
},
{
    "userName": "anand",
    "password": "anand123"
},
{
    "userName": "vg",
    "password": "vg123"
}
];
localStorage.setItem("users", JSON.stringify(jsonData));

let loginBtn = document.getElementById("loginbutton");
let userName = document.getElementById('user');
let password = document.getElementById('password');
let message = document.getElementById('message');
let captcha = document.getElementById('captcha');
let captchaInp = document.getElementById("captchaInp");
let randomText = '';

let generateCaptcha = function() {
let randomChars = "abcdefghijklmnopqrstuvwxyz0123456789";
randomText = "";
for (let i = 1; i < 5; i++) {
    randomText += randomChars[Math.ceil(Math.random() * randomChars.length - 1)];
}
captcha.textContent = randomText;
};
generateCaptcha();

let isCorrectUser = function(parsedUsers, userName, password) {
for (let each of parsedUsers) {
    if (each.userName === userName.value && each.password === password.value && randomText === captchaInp.value) {
        return true;
    } else {
        console.log('false');
    }
}
return false;
};

let gotoProfile = function() {
location.replace("profile");
};

loginBtn.onclick = function(event) {
event.preventDefault();
let usersList = localStorage.getItem('users');
let parsedUsers = JSON.parse(usersList);
let correctUser = isCorrectUser(parsedUsers, userName, password);
console.log(parsedUsers, userName, password);
if (correctUser === true) {
    message.textContent = "login success";
    gotoProfile();
} else {
    message.textContent = "Invalid user";
    captchaInp.value = "";
    generateCaptcha();
}
};