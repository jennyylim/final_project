

//
// /*Initialize MaterializeCSS effects: specifically parallax*/
// /*============================================================*/
// document.addEventListener('DOMContentLoaded', function() {
//     var elems = document.querySelectorAll('.parallax');
//     var instances = M.Parallax.init(elems, options);
// });



//Somebody cleverer than me will figure out how to just do
//one block of code instead of six.

// May be some conflict over the use of so many similar IDs, incl modal close not working

// Get the modal for myImg1
var modal = document.getElementById("myModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById("myImg1");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
img.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}

// Get the modal for myImg2
var modal = document.getElementById("myModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById("myImg2");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
img.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}

// Get the modal for myImg3
var modal = document.getElementById("myModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById("myImg3");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
img.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}

// Get the modal for myImg4
var modal = document.getElementById("myModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById("myImg4");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
img.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}

// Get the modal for myImg5
var modal = document.getElementById("myModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById("myImg5");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
img.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}

// Get the modal for myImg6
var modal = document.getElementById("myModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById("myImg6");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
img.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}


// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}


// Parallax work by Renan Breno codepen
// ============================================================================================

    // I know that the code could be better.
    // If you have some tips or improvement, please let me know.

//     $('.img-parallax').each(function(){
//     var img = $(this);
//     var imgParent = $(this).parent();
//     function parallaxImg () {
//     var speed = img.data('speed');
//     var imgY = imgParent.offset().top;
//     var winY = $(this).scrollTop();
//     var winH = $(this).height();
//     var parentH = imgParent.innerHeight();
//
//
//     // The next pixel to show on screen
//     var winBottom = winY + winH;
//
//     // If block is shown on screen
//     if (winBottom > imgY && winY < imgY + parentH) {
//     // Number of pixels shown after block appear
//     var imgBottom = ((winBottom - imgY) * speed);
//     // Max number of pixels until block disappear
//     var imgTop = winH + parentH;
//     // Porcentage between start showing until disappearing
//     var imgPercent = ((imgBottom / imgTop) * 100) + (50 - (speed * 50));
// }
//     img.css({
//     top: imgPercent + '%',
//     transform: 'translate(-50%, -' + imgPercent + '%)'
// });
// }
//     $(document).on({
//     scroll: function () {
//     parallaxImg();
// }, ready: function () {
//     parallaxImg();
// }
// });
// });
