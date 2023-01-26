const ratingButtons = document.querySelectorAll('span')

const removeActiveClasses = () => {
    ratingButtons.forEach((ratingButton) => {
        ratingButton.classList.remove('bg-orange', 'text-white')
        ratingButton.classList.add('bg-dark-blue', 'text-medium-gray', 'hover:bg-light-gray', 'hover:text-white')
    })
}

ratingButtons.forEach((ratingButton) => {
    ratingButton.addEventListener('click', () => {
        removeActiveClasses()
        ratingButton.classList.remove('bg-dark-blue', 'text-medium-gray', 'hover:bg-light-gray', 'hover:text-white')
        ratingButton.classList.add('bg-orange', 'text-white')
    })
})