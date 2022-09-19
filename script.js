// darkmode

// const darkmode = document.querySelector('.gelap');
// darkmode.addEventListener('click', function() {
//     const bg = document.querySelector('.container');
//     bg.style.backgroundImage = 'url(image/bgdark.jpg)';
//     bg.style.backgroundRepeat = 'no-repeat';
//     bg.style.backgroundSize = 'cover';
//     bg.style.color = 'white';   
//     // bg.style.textShadow = '0px 0px 3px white';
//     bg.style.boxShadow = ' 0px 0px 5px 3px white';

//     const bgnav = document.querySelector('.wrapper');
//     bgnav.style.backgroundImage = 'url(image/neon.jpg)';
//     bgnav.style.boxShadow = ' 0px 0px 5px 3px white';

//     const badan = document.querySelector('.badan');
//     badan.style.backgroundImage = 'url(image/badan.jpg)';

//     const footer = document.querySelector('.footer');
//     footer.style.backgroundImage = 'url(image/bgdark.jpg)';
//     footer.style.boxShadow = ' 0px 0px 5px 3px white';

//     const biodata = document.getElementsByTagName('h3');
//     for(let i = 0; i < biodata.length; i++) {
//         biodata[i].style.color = 'white';
//     }

//     const head = document.getElementsByTagName('h2');
//     for(let i = 0; i < head.length; i++) {
//         head[i].style.color = 'white';
//     }

// });

// const lightkmode= document.querySelector('.terang');
// lightkmode.addEventListener('click', function() {
//     const bg = document.querySelector('.container');
//     bg.style.backgroundImage = 'url(image/wrp-bg.jpg)';
//     bg.style.color = 'black';   
//     bg.style.boxShadow = ' 0px 0px 5px 5px lightpink'

//     const bgnav = document.querySelector('.wrapper');
//     bgnav.style.backgroundImage = 'url(image/wrp-bg.jpg)';
//     bgnav.style.boxShadow = ' 0px 0px 5px 5px lightpink';

//     const badan = document.querySelector('.badan');
//     badan.style.backgroundImage = 'url(image/bg-pastel.jpg)';

//     const footer = document.querySelector('.footer');
//     footer.style.backgroundImage = 'url(image/bg-biru.jpg)';
//     footer.style.boxShadow = ' 0px 0px 5px 5px lightpink';

//     const biodata = document.getElementsByTagName('h3');
//     for(let i = 0; i < biodata.length; i++) {
//         biodata[i].style.color = 'black';
//     }

//     const head = document.getElementsByTagName('h2');
//     for(let i = 0; i < head.length; i++) {
//         head[i].style.color = 'black';
//     }
//     exit;
// }
// );


// bg coloring
const resetbg = document.querySelector('.container');
const resetbg2 = document.querySelector('.badan');
const resetbg3 = document.querySelector('.wrapper');

resetbg.addEventListener('click', function() {
    resetbg.setAttribute('class', 'conbgreset');
    resetbg2.setAttribute('class', 'conbgreset');
    resetbg3.setAttribute('class', 'wrpbgreset');
});

const sMerah = document.querySelector('input[name = sMerah]');
const sHijau = document.querySelector('input[name = sHijau]');
const sBiru = document.querySelector('input[name = sBiru]');

sMerah.addEventListener('input', function(){
    rgb();
});

sHijau.addEventListener('input', function(){
    rgb();
});

sBiru.addEventListener('input', function(){
    rgb();
});

function rgb() {
    const a = sMerah.value;
    const b = sHijau.value;
    const c = sBiru.value;
    document.body.style.backgroundColor = 'rgb(' + a + ',' + b + ',' + c + ')';

}







