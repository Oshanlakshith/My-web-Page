$(window).on('load', function () {
    $("#loader").fadeOut(1000);
});
let text = $("#name").text();
var count=0;

function animateWord() {
    $("#name").text(text.substr(0,count));
    count++;
    if (count==text.length){
        count=0;
    }
}
setInterval(animateWord,200);