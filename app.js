// Add meme on form submit

var submit = document.querySelector('.submit');
var counter = 1;

submit.addEventListener('click', function() {
  var topText = document.querySelector('#top_text').value;
  var bottomText = document.querySelector('#bottom_text').value;
  var imageUrl = document.querySelector('#image_url').value;
  var url = "url('" + imageUrl + "')";

  var newCard = document.createElement('div');
  newCard.classList.add('card');
  newCard.setAttribute('id', counter);

  var newImage = document.createElement('span');
  newImage.classList.add('card__image');
  newImage.style.backgroundImage = url;

  var newTextTop = document.createElement('span');
  newTextTop.classList.add('card__text');

  var newTop = document.createElement('h3');
  newTop.classList.add('card__text--top');
  newTop.innerText = topText;

  var newTextBottom = document.createElement('span');
  newTextBottom.classList.add('card__text');

  var newBottom = document.createElement('h3');
  newBottom.classList.add('card__text--bottom');
  newBottom.innerText = bottomText;

  var newMeme = document.querySelector('.memes');
  newMeme.prepend(newCard);
  newCard.appendChild(newImage);
  newImage.appendChild(newTextTop);
  newTextTop.appendChild(newTop);
  newImage.appendChild(newTextBottom);
  newTextBottom.appendChild(newBottom);
  counter += 1;

  event.preventDefault();

  document.querySelector('#image_url').value = null;
  document.querySelector('#top_text').value = null;
  document.querySelector('#bottom_text').value = null;
});

// Remove meme on card click

var memes = document.querySelector('.memes');

memes.addEventListener('click', function(event) {
  var parent = document.getElementById('memes');
  var child = document.getElementById(event.target.id);
  parent.removeChild(child);
});
