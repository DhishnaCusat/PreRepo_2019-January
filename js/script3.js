

function opencontact() {
    stopped="yes";

    document.getElementById('contactus').style.zIndex = 1;

    $('#contactus').animate({
        opacity:1,
    })

}


function closecontact() {

    stopped="no";


    $('#contactus').animate({
        opacity:0,
    },500,function () {

        document.getElementById('contactus').style.zIndex = -101;
    })

}
var scrolling = 20
function scrolldown(){
    window.scrollBy(200, 0);
}
