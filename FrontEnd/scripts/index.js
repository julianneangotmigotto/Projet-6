console.log('test')

const gallery = document.querySelector('.gallery')
const filter = document.getElementById('filter')

const getWorks = categoryId => {
  return fetch('http://localhost:5678/api/works')
    .then(data => data.json())
    .then(data => {
      // vider le container gallery
      gallery.innerHTML = ''

      const filterData = categoryId ? data.filter(project => project.category.id === categoryId) : data

      // for each data
      filterData.forEach(item => {
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
}

fetch('http://localhost:5678/api/categories')
  .then(data => data.json())
  .then(data => {
    /** on va créer les élèments suivants dynamiquement:
     * <div id="filter">
     *  <button>Tous</bouton>
     *  <button>Object</button>
     *  ....
     * </div>
     */

    const button = document.createElement('button')
    button.innerHTML = 'Tous'
    button.setAttribute('class', 'category-active')
    filter.appendChild(button)
    button.addEventListener('click', async () => {
      const buttons = document.querySelectorAll('#filter button')
      buttons.forEach(element => element.setAttribute('class', ''))
      await getWorks()
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
        await getWorks(item.id)
      })
    })
  })

const init = async () => {
  await getWorks()
}

init()
