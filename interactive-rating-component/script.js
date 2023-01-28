const ratingButtons = document.querySelectorAll('span')
const submittedRatingText = document.getElementById('rating')
let rating = ''

const removeActiveClasses = () => {
    ratingButtons.forEach((ratingButton) => {
        ratingButton.classList.remove('bg-orange', 'text-white')
        ratingButton.classList.add('bg-dark-blue', 'text-medium-gray', 'hover:bg-light-gray', 'hover:text-white')
    })
}

const setSubmittedRatingText = (rating) => {
    submittedRatingText.innerText = ""
    const ratingText = document.createTextNode("You selected " + rating + " out of 5")
    submittedRatingText.appendChild(ratingText)
}

ratingButtons.forEach((ratingButton) => {
    ratingButton.addEventListener('click', () => {
        removeActiveClasses()
        ratingButton.classList.remove('bg-dark-blue', 'text-medium-gray', 'hover:bg-light-gray', 'hover:text-white')
        ratingButton.classList.add('bg-orange', 'text-white')
        rating = ratingButton.innerText
        setSubmittedRatingText(rating)
    })
})

const submitButton = document.getElementById('submit-button')

submitButton.addEventListener('click', () => {
    if (!rating)
        return alert('It looks like you have no selection. Please give a rating before submitting')
    document.getElementById('rating-dialog').classList.add('hidden')
    document.getElementById('submitted-dialog').classList.remove('hidden')
})
