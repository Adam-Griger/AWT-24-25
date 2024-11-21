import OpinionsHandlerMustache from "./OpinionsHandlerMustache.js";

const opinionHandler = new OpinionsHandlerMustache();

document.getElementById("opinion-form").addEventListener("submit", function(e) {
  e.preventDefault();
//   console.log("submitted")

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const imageUrl = document.getElementById("image-url").value;
  const rating = document.querySelector('input[name="rating"]:checked') ? document.querySelector('input[name="rating"]:checked').value : 'none';
  const news = document.querySelector('input[name="news"]:checked') ? document.querySelector('input[name="news"]:checked').value : '';
  const opinionText = document.getElementById("opinion").value;
  const keywords = document.getElementById("keywords").value;

  opinionHandler.addOpinion(name, email, imageUrl, rating, news, opinionText, keywords);
});