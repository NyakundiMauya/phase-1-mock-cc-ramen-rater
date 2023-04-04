// write your code here
// Step 1
const ramenMenu = document.querySelector("#ramen-menu");
const ramenDetail = document.querySelector("#ramen-detail");
const ratingDisplay = document.querySelector("#rating-display");
const commentDisplay = document.querySelector("#comment-display");
const nameElement = ramenDetail.querySelector(".name");
const restaurantElement = ramenDetail.querySelector(".restaurant");

ramenMenu.addEventListener("click", (event) => {
  const ramen = event.target;
  const name = ramen.getAttribute("data-name");
  const restaurant = ramen.getAttribute("data-restaurant");
  const image = ramen.getAttribute("src");
  const rating = ramen.getAttribute("data-rating");
  const comment = ramen.getAttribute("data-comment");

  ramenDetail.querySelector(".detail-image").setAttribute("src", image);
  ramenDetail.querySelector(".name").textContent = name;
  ramenDetail.querySelector(".restaurant").textContent = restaurant;
  nameElement.textContent = "Ayman Ramen";
  restaurantElement.textContent = "amanaka";
  ratingDisplay.textContent = rating;
  commentDisplay.textContent = comment;
});

// Step 2
const newRamenForm = document.querySelector("#new-ramen");

newRamenForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const name = document.querySelector("#new-name").value;
  const restaurant = document.querySelector("#new-restaurant").value;
  const image = document.querySelector("#new-image").value;
  const rating = document.querySelector("#new-rating").value;
  const comment = document.querySelector("#new-comment").value;

  const newRamen = document.createElement("img");
  newRamen.setAttribute("src", image);
  newRamen.setAttribute("data-name", name);
  newRamen.setAttribute("data-restaurant", restaurant);
  newRamen.setAttribute("data-rating", rating);
  newRamen.setAttribute("data-comment", comment);

  ramenMenu.appendChild(newRamen);

  newRamenForm.reset();
});
