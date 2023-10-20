const gallery = document.querySelector('.gallery')
const filter = document.getElementById('filter')
const loginA = document.getElementById('login')
const banner = document.querySelector('.banner')
const header = document.querySelector('header')
const editModal = document.getElementById('edit-modal')

/**
 * Method to create dom gallery
 * @param {Array} data - Array of object from API /works
 */
const createGallery = data => {
  // vider le container gallery
  gallery.innerHTML = ''

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
}

/** 
 * on va créer les élèments suivants dynamiquement:
 * <div id="filter">
 *  <button>Tous</bouton>
 *  <button>Object</button>
 *  ....
 * </div>
 * 
 * @param {Array} data - Array of object from API /categories
 */
const createCategories = data => {
  console.log('categories')

  const button = document.createElement('button')
  button.innerHTML = 'Tous'
  button.setAttribute('class', 'category-active')
  filter.appendChild(button)
  button.addEventListener('click', async () => {
    const buttons = document.querySelectorAll('#filter button')
    buttons.forEach(element => element.setAttribute('class', ''))
    await getWorks().then(data => createGallery(data))
    button.setAttribute('class', 'category-active')
  })

  // For each category
  data.forEach(item => {
    const button = document.createElement('button')
    button.innerHTML = item.name
    filter.appendChild(button)

    button.addEventListener('click', async () => {
      const buttons = document.querySelectorAll('#filter button')
      buttons.forEach(element => element.setAttribute('class', ''))
      button.setAttribute('class', 'category-active')
      await getWorks(item.id).then(data => createGallery(data))
    })
  })
}

if (localStorage.token) {
  loginA.innerHTML = 'logout'
  banner.style.display = 'flex'
  header.style.marginTop = '79px'
  filter.style.display = 'none'
  editModal.style.display = 'flex'
  gallery.style.marginTop = '60px'
}

loginA.addEventListener('click', () => localStorage.clear())

const init = async () => {
  await getWorks().then(data => createGallery(data))
  await getCategories().then(data => createCategories(data))
}

init()
