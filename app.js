const observer = new IntersectionObserver(enteries => {
    enteries.forEach((entery) => {
        if (entery.isIntersecting) {
            entery.target.classList.add('show')
        }
        // else {
        //     entery.target.classList.remove('show')
        // }
    })
})

const hiddenElements = document.querySelectorAll('.hidden')
hiddenElements.forEach((element) => observer.observe(element))