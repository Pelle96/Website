var container;
var container1;
var container2;
var container3;
var container4;
var Ve = [];
var Bb = [];
var Cl = [];
var St = [];
var Ps = [];

function setup() {
    noCanvas();
    container = document.getElementById('City1');
    Ve = [
        '../imagine/Pag 1/City/City1/DSC_0150.jpg',
        '../imagine/Pag 1/City/City1/DSC_0150_1.jpg',
        '../imagine/Pag 1/City/City1/DSC_0150_2.jpg',
        '../imagine/Pag 1/City/City1/DSC_0150_4.jpg',
        '../imagine/Pag 1/City/City1/DSC_0150_5.jpg'
    ];
    for (let i = 0; i < Ve.length; i++) {
        let link = createA(Ve[i], '');
        //link.addClass('Ve');
        link.attribute('data-lightbox', 'Ve');
        link.parent(container);
        let imm = createImg(Ve[i], '');
        if (i < 1) {
            imm.addClass('Ve1');
        } else {
            imm.addClass('Ve');
        }
        imm.parent(link);
    }
    container1 = document.getElementById('City2');
    Bb = [
        '../imagine/Pag 1/City/City2/DSC_0150.jpg',
        '../imagine/Pag 1/City/City2/DSC_0150_1.jpg',
        '../imagine/Pag 1/City/City2/DSC_0150_2.jpg',
        '../imagine/Pag 1/City/City2/DSC_0150_4.jpg',
        '../imagine/Pag 1/City/City2/DSC_0150_5.jpg'
    ];
    for (let i = 0; i < Bb.length; i++) {
        let link = createA(Bb[i], '');
        //link.addClass('Bb');
        link.attribute('data-lightbox', 'Bb');
        link.parent(container);
        let imm = createImg(Bb[i], '');
        if (i < 1) {
            imm.addClass('Bb1');
        } else {
            imm.addClass('Bb');
        }
        imm.parent(link);
    }
    container2 = document.getElementById('City3');
    Cl = [
        '../imagine/Pag 1/City/City3/DSC_0150.jpg',
        '../imagine/Pag 1/City/City3/DSC_0150_1.jpg',
        '../imagine/Pag 1/City/City3/DSC_0150_2.jpg',
        '../imagine/Pag 1/City/City3/DSC_0150_4.jpg',
        '../imagine/Pag 1/City/City3/DSC_0150_5.jpg'
    ];
    for (let i = 0; i < Cl.length; i++) {
        let link = createA(Cl[i], '');
        //link.addClass('Ve');
        link.attribute('data-lightbox', 'Cl');
        link.parent(container);
        let imm = createImg(Cl[i], '');
        if (i < 1) {
            imm.addClass('Cl1');
        } else {
            imm.addClass('Cl');
        }
        imm.parent(link);
    }
    container3 = document.getElementById('Sunset');
    St = [
        '../imagine/Pag 1/Sunset/DSC_0150.jpg',
        '../imagine/Pag 1/Sunset/DSC_0150_1.jpg',
        '../imagine/Pag 1/Sunset/DSC_0150_2.jpg',
        '../imagine/Pag 1/Sunset/DSC_0150_4.jpg',
        '../imagine/Pag 1/Sunset/DSC_0150_5.jpg'

    ];
    for (let i = 0; i < St.length; i++) {
        let link = createA(St[i], '');
        //link.addClass('Ve');
        link.attribute('data-lightbox', 'St');
        link.parent(container);
        let imm = createImg(St[i], '');
        if (i < 1) {
            imm.addClass('St1');
        } else {
            imm.addClass('St');
        }
        imm.parent(link);
    }
    container4 = document.getElementById('Pets');
    Ps = [
        '../imagine/Pag 1/Sunset/DSC_0150.jpg',
        '../imagine/Pag 1/Sunset/DSC_0150_1.jpg',
        '../imagine/Pag 1/Sunset/DSC_0150_2.jpg',
        '../imagine/Pag 1/Sunset/DSC_0150_4.jpg',
        '../imagine/Pag 1/Sunset/DSC_0150_5.jpg'

    ];
    for (let i = 0; i < Ps.length; i++) {
        let link = createA(Ps[i], '');
        //link.addClass('Ve');
        link.attribute('data-lightbox', 'Ps');
        link.parent(container);
        let imm = createImg(Ps[i], '');
        if (i < 1) {
            imm.addClass('Ps1');
        } else {
            imm.addClass('Ps');
        }
        imm.parent(link);
    }






} //  } //imm.setAttribute("data-lightbox", "mygallery")