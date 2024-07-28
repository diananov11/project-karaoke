function changeTheme() {
  let body = document.querySelector("body");
  let a = document.querySelector("a");
  body.classList.toggle("new-theme");
  a.classList.toggle("white-text");
}
let theme = document.querySelector(".theme");
theme.addEventListener("click", changeTheme);

function register() {
  let name = prompt("What's your name?").toLowerCase().trim();
  alert(
    `Hi ${name}✨, Thank you so much for your registration! We will contact you soon🔥`
  );
}
let karaoke = document.querySelector(".karaoke");
karaoke.addEventListener("click", register);
