var responsiveImage = [{
    // src: 'screen-pic/slide-01.jpg'
    src: 'https://github.com/Pradippaudyal22001/myproject/blob/master/screen-pic/slide-01.JPG?raw=true'
}, {
    // src: 'screen-pic/slide-02.jpg'
    src: 'https://github.com/Pradippaudyal22001/myproject/blob/master/screen-pic/slide-02.jpg?raw=true'
}, {
    // src: 'screen-pic/slide-03.jpg'
    src: 'https://github.com/Pradippaudyal22001/myproject/blob/master/screen-pic/slide-03.jpg?raw=true'
}, {
    // src: 'screen-pic/slide-04.jpg'
    src: 'https://github.com/Pradippaudyal22001/myproject/blob/master/screen-pic/slide-04.jpg?raw=true'
}];

$('#silde-img').vegas({
    overlay: false,
    transition: 'fade2',
    transitionDuration: 1500,
    delay: 2500,
    animationDuration: 1000,
    animation: 'random',
    slides: responsiveImage,
    timer: false,
});

// $("p").click(function () {
//     window.alert();
// });