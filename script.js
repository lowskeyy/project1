// darkmode

const darkmode = document.querySelector('.gelap');
darkmode.addEventListener('click', function() {
    const bg = document.querySelector('.container');
    bg.style.backgroundImage = 'url(image/bgdark.jpg)';
    bg.style.backgroundRepeat = 'no-repeat';
    bg.style.backgroundSize = 'cover';
    bg.style.color = 'white';   
    // bg.style.textShadow = '0px 0px 3px white';
    bg.style.boxShadow = ' 0px 0px 5px 3px white';

    const bgnav = document.querySelector('.wrapper');
    bgnav.style.backgroundImage = 'url(image/neon.jpg)';
    bgnav.style.boxShadow = ' 0px 0px 5px 3px white';

    const badan = document.querySelector('.badan');
    badan.style.backgroundImage = 'url(image/badan.jpg)';

    const footer = document.querySelector('.footer');
    footer.style.backgroundImage = 'url(image/bgdark.jpg)';
    footer.style.boxShadow = ' 0px 0px 5px 3px white';

});

const lightkmode= document.querySelector('.terang');
lightkmode.addEventListener('click', function() {
    const bg = document.querySelector('.container');
    bg.style.backgroundImage = 'url(image/wrp-bg.jpg)';
    bg.style.color = 'black';   
    bg.style.boxShadow = ' 0px 0px 5px 5px lightpink'

    const bgnav = document.querySelector('.wrapper');
    bgnav.style.backgroundImage = 'url(image/wrp-bg.jpg)';
    bgnav.style.boxShadow = ' 0px 0px 5px 5px lightpink';

    const badan = document.querySelector('.badan');
    badan.style.backgroundImage = 'url(image/bg-pastel.jpg)';

    const footer = document.querySelector('.footer');
    footer.style.backgroundImage = 'url(image/bg-biru.jpg)';
    footer.style.boxShadow = ' 0px 0px 5px 5px lightpink'
}
);











