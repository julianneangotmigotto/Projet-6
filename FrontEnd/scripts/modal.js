const modal = document.getElementById('modal')
const editModal = document.getElementById('edit-modal')
const modalBtnClose = document.getElementById('modal-btn-close')
const modalGallery = document.querySelector('#modal .gallery')

editModal.addEventListener('click', async () => {
    modal.style.display = 'block'
    await getWorks().then(data => createGallery(data, modalGallery, true))
})

modalBtnClose.addEventListener('click', async () => {
    modal.style.display = 'none'
    await getWorks().then(data => createGallery(data))
})
