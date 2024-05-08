const style = document.querySelector(".moon");
style.addEventListener("click",() => {
  style.querySelector("i").classList.toggle("fa-sun");
  style.querySelector("i").classList.toggle("fa-moon");
  document.body.classList.toggle("dark");
})
window.addEventListener("load",() => {
  if(document.body.classList.contains("dark"))
  {
    style.querySelector("i").classList.add("fa-sun");
  }
  else
  {
    style.querySelector("i").classList.add("fa-moon");
  }
})