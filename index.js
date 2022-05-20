const cards = document.getElementsByClassName('grid_container');
var article_name = '';
var article_data = '';

async function callApi() {
  console.log(cards);

  const res = await fetch("https://script.google.com/macros/s/AKfycbwn0UhfWZ5wu3Fx6mIqEBaRfbSIzFUvcYNL9hfLtQAjb6zpoDLdbMIBLMnSBn2W8DKVaw/exec")

  const articles = await res.json();

  articles.forEach(function (article) {
    var index = 0;

    const card = document.createElement('div');
    card.className = 'card';
    card.addEventListener('click', function () {

      article_index = article["index"];
      console.log(article_index);
      location.href = "/article.html" + "?id=" + article_index;

    console.log(article_name);
    console.log(article_data);

    }, false);

    card.classList.add('card');

    const nameNode = document.createTextNode(article["name"]);
    card.appendChild(nameNode);
    const textContent = document.createElement('div');
    textContent.className = 'overlay';
    card.appendChild(textContent);


    const card_summary = document.createElement('p');
    const textNode = document.createTextNode(article["title"]);
    card_summary.appendChild(textNode);
    textContent.appendChild(card_summary);


    cards[index].appendChild(card);
    index++;

  });

  // cards.appendChild(card)
}

callApi();
