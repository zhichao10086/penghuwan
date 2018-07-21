function getImage(){
	
	//此处用ajax请求到图片后返回Image
	
	
}



function getImageborder(iamge){
	
	
	
	
	
	
}

//@iamge Image对象
function createCanvas(){
	
	var img_peng = document.getElementById("img_peng")
	
	//将Image传入画布中
	var cvs_peng = document.getElementById("cvs_peng");
	
	cvs_peng.width = img_peng.width
	cvs_peng.height = img_peng.height
	var cxt = cvs_peng.getContext("2d");
	cxt.drawImage(img_peng,0,0);
	
}
