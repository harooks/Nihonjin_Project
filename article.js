var query = location.search;
var value = query.split('=');
var index = value[1];
console.log(index);

const name_h1 = document.getElementById('name_id')
const summary_p = document.getElementById('summary_id')
const content_p = document.getElementById('article_id');
// const article_photo1 = document.getElementById('photo_id');

async function callApi() {

  console.log(name_h1);
  console.log(content_p);
  // console.log(article_photo1)

  const res = await fetch("https://script.google.com/macros/s/AKfycbwn0UhfWZ5wu3Fx6mIqEBaRfbSIzFUvcYNL9hfLtQAjb6zpoDLdbMIBLMnSBn2W8DKVaw/exec")

  const articles = await res.json();
  const article = articles[index];

  const name = article["name"];
  const summary = article["summary"]
  const content = article["article"];
  // const photo1 = article["article_photo1"];

  name_h1.textContent = name;
  summary_p.innerHTML = summary;
  content_p.innerHTML = content;
  // article_photo1.src = photo1;

}

callApi();