
function initAll() {
    div2canvas(document.getElementById("table_jianli"));
}

function div2canvas(element) {
    html2canvas(element,{width:element.offsetWidth,height:element.offsetHeight}).then(createTearingEffect);
}

//撕裂图制作效果
function createTearingEffect(canvas){
    $("#div_jianli_before").css("visibility","hidden");
    $("#div_jianli_before").css("display","none");
    var image = new Image();
    var dataUrl = canvas.toDataURL("image/png");
    var tearing = new Tearing("div_tearing");
    image.onload =function(){
        tearing.setImage(image);
        tearing.draw();

    };
    image.src = dataUrl;
}

document.ready = function(){
    //$("#div_jianli_before").css("display","none");
    //document.documentElement.style.fontSize = window.innerWidth/3.75 + "px";
};

window.onload=initAll;