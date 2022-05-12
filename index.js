const btn = document.querySelector(".button");
const icon = document.querySelector(".icon");
const iconOne = document.querySelector(".vac1");
const iconTwo = document.querySelector(".vac2");
console.log(iconTwo);

btn.addEventListener("mouseenter", () => {
    document.body.style.backgroundColor = "rgb(190, 22, 190)";
    icon.style.background = "rgba(255, 255, 255, 0.395)";
    iconOne.style.transform = "translateX(25px)";
    iconTwo.style.transform = "translateX(-35px)";
});
btn.addEventListener("mouseout", () => {
    document.body.style.backgroundColor = "pink";
    icon.style.backgroundColor = "rgba(255, 255, 255, 0.395)";
    iconOne.style.transform = "translateX(-100px) rotate(-40deg)";
    iconTwo.style.transform = "translateX(100px) rotate(40deg)";
});
