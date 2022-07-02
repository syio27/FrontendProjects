const ACTIVE = 'active'
const search = document.querySelector('.search')
const button = document.querySelector('.btn')
const input = document.querySelector('.input')

const offClick = () => {
    search.classList.toggle(ACTIVE)
    document.removeEventListener('click', offClick)
}

const handleClick = (e) => {
    e.stopPropagation()
    search.classList.toggle(ACTIVE)
    input.focus()
    if (search.classList.contains(ACTIVE)) {
        document.addEventListener('click', offClick)
        console.log('123')
    }
}


button.addEventListener('click', handleClick)
