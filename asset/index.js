const hero_section = document.querySelector(".hero-section")
const nav_header = document.querySelector(".header-area");
// const observer = new IntersectionObserver((entries) => {
//     const ent = entries[0];
//     console.log(ent)

//     ent.isIntersecting == false ? nav_header.classList.add("sticky") :
//         nav_header.classList.remove("sticky");
// }, {
//     root: null,
//     rootMargin: "",
//     threshold: "",
// });
window.addEventListener('scroll', function () {
    if (window.scrollY > hero_section.offsetTop) {
        nav_header.classList.add("sticky");
    }
    else {
        nav_header.classList.remove("sticky")
    }

})

// observer.observe(hero_section);

let img = document.querySelectorAll('.nroom-img');
let next = document.querySelector('.next');
let prev = document.querySelector('.prev')
let pimg = document.querySelector('.room-image');
index = 0;
next.addEventListener('click', function () {
    img.forEach(function (e) {
        e.classList.remove('show')
    })
    if (index < img.length - 1) {
        index++;
        img[index].classList.add('show');
    } else {
        index = 0;
        img[index].classList.add('show');
    }
})
prev.addEventListener('click', function () {
    img.forEach(function (e) {
        e.classList.remove('show')
    })
    if (index > 0) {
        index--;
        img[index].classList.add('show');
    } else {
        index = img.length - 1;
        img[index].classList.add('show');
    }
})