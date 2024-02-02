const menu = document.getElementById('menu');


const toggleMobileNav = () => {
    const isOpened = menu.hasAttribute('data-visible')
    if (isOpened) {
        menu.removeAttribute('data-visible')
    }

    else {
        menu.setAttribute('data-visible', '')
    }
}

window.addEventListener('scroll', () =>
    menu.hasAttribute('data-visible') ? menu.removeAttribute('data-visible') : null
)