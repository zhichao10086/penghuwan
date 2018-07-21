;(function(window){

    //工具类 常用函数
    var Util = {
        //判断是否为白色
        isWhite: function(r,g,b){
            if (r == 0 && g == 0 && b ==0){
                return true;
            }else {
                return false;
            }
        },

        //判断是否为黑色
        isBlack : function (r,g,b){
            if (r == 0 && g == 0 && b ==0){
                return true;
            }else {
                return false;
            }
        },

        //产生不重复的随机数 low>0
        randomNoSame :function (low,high,num){
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
        },

        randomNum:function(low,high){
            var w = high - low;
            return Math.round(Math.random()*w +low);
        },

        //数组求和
        arraySum:function arraySum(array){
            var total = 0, len = array.length;
            for (var i = 0; i < len; i++){
                total += array[i];
            }
            return total;
        },
    };

    window.Util = Util;

}(window));
