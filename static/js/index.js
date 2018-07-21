
window.onload = function(){

    var options = {
        canvasWidth:1000,
        canvasHeight:500,
    };

    var drawChar = new DrawCharVaried("div_cvs",options);
    var img_peng = new Image();
    img_peng.onload=function(){

        drawChar.setImage(img_peng);
        drawChar.draw();

    };
    img_peng.src="/static/images/peng.png";

};

function initAll(){
    var canvas  = document.getElementById("cvs_peng");
    var body = document.body;

    canvas.width = body.clientWidth;
    canvas.height = body.clientHeight;

    var ctx = canvas.getContext('2d');

    // polyfill 提供了这个方法用来获取设备的 pixel ratio
    var getPixelRatio = function(context) {
        var backingStore = context.backingStorePixelRatio ||
            context.webkitBackingStorePixelRatio ||
            context.mozBackingStorePixelRatio ||
            context.msBackingStorePixelRatio ||
            context.oBackingStorePixelRatio ||
            context.backingStorePixelRatio || 1;

        return (window.devicePixelRatio || 1) / backingStore;
    };

    var ratio = getPixelRatio(ctx);

    var img_peng = new Image();

    img_peng.onload=function(){

        //centerPoint = calCenterStart(canvas.width,canvas.height,img_peng.width,img_peng.height);
        //ctx.drawImage(img_peng,centerPoint.x,centerPoint.y);
        //var objImageArea = calcCharDrawArea(ctx,ctx.getImageData(centerPoint.x,centerPoint.y,img_peng.width,img_peng.height));

    };
    img_peng.src="/static/images/peng.png";


}


function drawFlicker(){}

//计算要在画布中心时的左上角起始点
function calCenterStart(Mw,Mh,Dw,Dh){
    var Fw,Fh;
    Fw = Mw/2-Dw/2;
    Fh = Mh/2-Dh/2;
    return {x:Fw,y:Fh};
}

//计算文字要绘制区域，返回原始图像数据以及计算后的数据
function calcCharDrawArea(ctx,image){

    var imgData = image.data;
    var blackFlagArr = new Array(imgData.length/4);
    var blackBoundFlagArr = new Array(blackFlagArr.length);
    var blackIndexArr = new Array();
    var blackBoundIndexArr = new Array();


    for (var i = 0,j=0; i<imgData.length;i+=4,j++){
        if (isBlack(imgData[i],imgData[i+1],imgData[i+2])){
            // 标记黑色区域
            blackFlagArr[j] = 1;
            blackIndexArr.push(j);
        }else {
            blackFlagArr[j] = 0
            imgData[i+3] = 0;
        }
    }
    //查找黑色边缘
    for (var i = 0; i<blackFlagArr.length;i++){
        if (blackFlagArr[i] == 1){
            // 标记黑色区域
            //比较上方
            if (i >= imgData.width){
                if (blackFlagArr[i-imgData.width] == 0){
                    blackBoundFlagArr[i] = 1;
                    blackBoundIndexArr.push(i);
                    continue;
                }
            }
            //比较下方
            if (i < imgData.length - imgData.width){
                if (blackFlagArr[i+imgData.width] == 0){
                    blackBoundFlagArr[i] = 1;
                    blackBoundIndexArr.push(i);
                    continue;
                }
            }
            //比较左边
            if (i%imgData.width != 0){
                if (blackFlagArr[i-1] == 0){
                    blackBoundFlagArr[i] = 1;
                    blackBoundIndexArr.push(i);
                    continue;
                }
            }
            //比较右边
            if ((i+1)%imgData.width!= 0){
                if (blackFlagArr[i+1] == 0){
                    blackBoundFlagArr[i] = 1;
                    blackBoundIndexArr.push(i);
                    continue;
                }
            }
            // 如果不符合就设为零
            blackBoundFlagArr[i] = 0;
        }else {
            blackBoundFlagArr[i] = 0;
        }
    }

    return {
        image:image,
        blackFlagArr:blackFlagArr,
        blackBoundFlagArr:blackBoundFlagArr,
        blackIndexArr:blackIndexArr,
        blackBoundIndexArr:blackBoundIndexArr,
    };

}

//数组求和
function arraySum(array){
  var total = 0, len = array.length;
  for (var i = 0; i < len; i++){
    total += array[i];
  }

  return total;
}

//不相同随机数生成函数
function randomNoSame(low,high,num){
    var w = high - low;
    var resultArr = new Array(num);

    for (var i = 0;i < num;i++){
        var flag = 0;
        var temp = Math.round(Math.random()*w + low);
        //如果有重复就退出当前循环
        for (var j = 0;j < i;j++){
            if (temp == resultArr[j]){
                i--;
                flag = 1;
                break;
            }
        }
        if(flag == 0) {
            resultArr[i] = temp;
        }
    }

    return resultArr;
}

//判断是否为黑色
function isBlack(r,g,b){
    if (r == 0 && g == 0 && b ==0){
        return true;
    }else {
        return false;
    }
}

//判断是否为白色
function isWhite(r,g,b) {
    if (r == 255 && g == 255 && b ==255){
        return true;
    }else {
        return false;
    }
}

function hide() {
    $("#img_peng").hide();
}

function adjustCanvas(){
    $("#cvs_peng").css({"height":$(window).height(),"width":$(window).width()});
}