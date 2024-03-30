// Write your code here!

const removeMainElement = document.querySelector('main#main')

removeMainElement.remove()

const newHeader = document.createElement('h1')
newHeader.id = 'victory'
newHeader.innerHTML = "YOUR-NAME is the champion"