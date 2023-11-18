const hamburger = document.querySelector(".hamburger");
const manu = document.querySelector(".manu");

hamburger.addEventListener("click",() => {
    hamburger.classList.toggle("active");
    manu.classList.toggle("active");
})

document.querySelectorAll("tab-link").forEack(n => 
    n.addEventListener("click", () => {
        hamburger.classList.remove("active");
        manu.classList.remove("active");
    }))

export default hamburger;