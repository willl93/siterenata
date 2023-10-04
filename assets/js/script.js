const myObserver = new IntersectionObserver((entries) => {
    entries.forEach( (entry) =>{
        if(entry.isIntersecting) {
            entry.target.classList.add('init-off')
        } else {
            entry.target.classList.remove('init-off')
        }
    })
})

const elements = document.querySelectorAll('.init')

elements.forEach((element) => myObserver.observe(element))




