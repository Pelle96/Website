const carouselSlide = document.querySelector('.carousel-slide');
const carouselImagines = document.querySelectorAll('.carousel-slide img');
//button
const prevBtn = document.querySelector('#prevBtn'); //# per id e . per classe
const nextBtn = document.querySelector('#nextBtn');
//counter
let counter = 1;
const size = carouselImagines[0].clientWidth;
carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
//button
nextBtn.addEventListener('click', () => {
    if (counter >= carouselImagines.length - 1) return;
    carouselSlide.style.transition = "transform 0.6s ease-in-out";
    counter  ++;
    carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
})
prevBtn.addEventListener('click', () => {
    if (counter <= 0) return;
    carouselSlide.style.transition = "transform 0.6s ease-in-out";
    counter  --;
    carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
});
carouselSlide.addEventListener('transitioned', () => {
    if (carouselImagines[counter].id = 'lastclone') {
        carouselSlide.style.transition = "none";
        counter  = carouseImagines.length - 2;
        carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
    }


    if (carouselImagines[counter].id = 'firstclone') {
        carouselSlide.style.transition = "none";
        counter  = carouseImagines.length - counter;
        carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)'
    }
});





const Prova2 = document.querySelector('.Try2 ');
const Try2Imagines = document.querySelectorAll('.Try2 img');
//button
const prevbtn = document.querySelector('#prevbtn'); //# per id e . per classe
const nextbtn = document.querySelector('#nextbtn');
//counter
let counter2 = 1;
const size2 = Try2Imagines[0].clientWidth;
Prova2.style.transform = 'translateX(' + (-size2 * counter2) + 'px)';
//button
nextbtn.addEventListener('click', () => {
    if (counter2 >= Try2Imagines.length - 1) return;
    Prova2.style.transition = "transform 0.6s ease-in-out";
    counter2++;
    Prova2.style.transform = 'translateX(' + (-size2 * counter2) + 'px)';
})
prevbtn.addEventListener('click', () => {
    if (counter2 <= 0) return;
    Prova2.style.transition = "transform 0.6s ease-in-out";
    counter2--;
    Prova2.style.transform = 'translateX(' + (-size2 * counter2) + 'px)';
});
Prova2.addEventListener('transitioned', () => {
    if (Try2Imagines[counter2].id = 'lastclone1') {
        Prova2.style.transition = "none";
        counter2 = Try2Imagines.length - 2;
        Prova2.style.transform = 'translateX(' + (-size2 * counter2) + 'px)';
    }


    if (Try2Imagines[counter2].id = 'firstclone2') {
        Prova2.style.transition = "none";
        counter2 = Try2Imagines.length - counter;
        Prova2.style.transform = 'translateX(' + (-size2 * counter2) + 'px)'
    }
});