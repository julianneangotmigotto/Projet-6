console.log('test')

const gallery = document.querySelector('.gallery')

fetch('http://localhost:5678/api/works')
  .then(data => data.json())
  .then(data => {
    console.log(data)

    /** we have creating this, append to div gallery
        <figure>
            <img src="assets/images/abajour-tahina.png" alt="Abajour Tahina">
            <figcaption>Abajour Tahina</figcaption>
        </figure>
        */

    // for each data
    data.forEach(item => {
      const figure = document.createElement('figure')

      const img = document.createElement('img')
      img.src = item.imageUrl
      img.setAttribute('alt', item.title)
      figure.appendChild(img)

      const figCaption = document.createElement('figcaption')
      figCaption.innerHTML = item.title
      figure.appendChild(figCaption)

      gallery.appendChild(figure)
    })
  })
  .catch(error => console.error(error))

fetch('http://localhost:5678/api/categories')
  .then(data => data.json())
  .then(data => {
    console.log(data)

document.addEventListener('DOMContentLoaded', function() {
    var button = document.createElement('input');
    button.type = 'button';
    button.id = '1';
    button.value = 'Tous';
    button.className = 'btn';
 
    button.onclick = function() {
    // …
    };
 
    var filter = document.getElementById('filter');
    filter.appendChild(button);
}, false);

document.addEventListener('DOMContentLoaded', function() {
    var button = document.createElement('input');
    button.type = 'button';
    button.id = '2';
    button.value = 'Objets';
    button.className = 'btn';
 
    button.onclick = function() {
    // …
    };
 
    var filter = document.getElementById('filter');
    filter.appendChild(button);
}, false);

document.addEventListener('DOMContentLoaded', function() {
    var button = document.createElement('input');
    button.type = 'button';
    button.id = '3';
    button.value = 'Appartements';
    button.className = 'btn';
 
    button.onclick = function() {
    // …
    };
 
    var filter = document.getElementById('filter');
    filter.appendChild(button);
}, false);

document.addEventListener('DOMContentLoaded', function() {
    var button = document.createElement('input');
    button.type = 'button';
    button.id = '4';
    button.value = 'Hôtel & restaurants';
    button.className = 'btn';
 
    button.onclick = function() {
    // …
    };
 
    var filter = document.getElementById('filter');
    filter.appendChild(button);
}, false);