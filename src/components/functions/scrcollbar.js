const scrollbar = {

    add: function () {
        const body = document.querySelector('body')
        body.classList.add('hidden-scrollbar')
    },
    remove: function () {
        const body = document.querySelector('body')
        body.classList.remove('hidden-scrollbar')
    }
}

export { scrollbar };