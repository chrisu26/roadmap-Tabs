let firstTab = document.getElementById("firstTab");
let secondTab = document.getElementById("secondTab");
let thirdTab = document.getElementById("thirdTab");
let forthTab = document.getElementById("forthTab");
let contentDisplay = document.getElementById("content-display");

let firstTabContent = ` First Tab content to be displayed here.`;
let secondTabContent = `Second Tab content to be displayed here.`;
let thirdTabContent = `Third Tab content to be displayed here.`;
let forthTabContent = `Forth Tab content to be displayed here.`;


firstTab.addEventListener("click", () => {
  
  firstTab.style.color = "black";
  firstTab.style.borderStyle = "hidden hidden solid";
  secondTab.style.color = "grey";
  secondTab.style.borderStyle = "hidden hidden hidden";
  thirdTab.style.color = "grey";
  thirdTab.style.borderStyle = "hidden hidden hidden";
  forthTab.style.color = "grey";
  forthTab.style.borderStyle = "hidden hidden hidden";
  
  contentDisplay.innerText = firstTabContent;
  
})

secondTab.addEventListener("click", () => {
  
  secondTab.style.color = "black";
  secondTab.style.borderStyle = "hidden hidden solid";
  firstTab.style.color = "grey";
  firstTab.style.borderStyle = "hidden hidden hidden";
  thirdTab.style.color = "grey";
  thirdTab.style.borderStyle = "hidden hidden hidden";
  forthTab.style.color = "grey";
  forthTab.style.borderStyle = "hidden hidden hidden";
  
  contentDisplay.innerText = secondTabContent;
  
})

thirdTab.addEventListener("click", () => {
  
  thirdTab.style.color = "black";
  thirdTab.style.borderStyle = "hidden hidden solid";
  firstTab.style.color = "grey";
  firstTab.style.borderStyle = "hidden hidden hidden";
  secondTab.style.color = "grey";
  secondTab.style.borderStyle = "hidden hidden hidden";
  forthTab.style.color = "grey";
  forthTab.style.borderStyle = "hidden hidden hidden";
  
  contentDisplay.innerText = thirdTabContent;
  
})



forthTab.addEventListener("click", () => {
  
  forthTab.style.color = "black";
  forthTab.style.borderStyle = "hidden hidden solid";
  firstTab.style.color = "grey";
  firstTab.style.borderStyle = "hidden hidden hidden";
  secondTab.style.color = "grey";
  secondTab.style.borderStyle = "hidden hidden hidden";
  thirdTab.style.color = "grey";
  thirdTab.style.borderStyle = "hidden hidden hidden";
  
  contentDisplay.innerText = forthTabContent;
  
})