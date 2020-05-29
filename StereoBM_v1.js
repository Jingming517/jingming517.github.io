import {IMAGE_SETTINGS, StereoProcessor,Picture} from './lib/images.js';

"use strict";

function LoadPics(cxtl, cxtr){
 function loadLeftImage(){
  var imageleft = new Image();
  imageleft.onload = function(){
   var _imgl = {
    imgl: imageleft,
    xl: 0,
    yl: 0
   }
   ctxl.drawImage(_imgl.imgl, _imgl.xl, _imgl.yl)
  }
  imageleft.src = 'LeftImg.png'
 }
 function loadRightImage(){
  var imageright = new Image();
  imageright.onload = function(){
   var _imgr = {
    imgr: imageright,
    xr: 0,
    yr: 0
   }
   ctxr.drawImage(_imgr.imgr, _imgr.xr, _imgr.yr)
  }
  imageright.src = 'RightImg.png'
 }
 loadLeftImage();
 loadRightImage();
 let buttonBM = document.getElementById("btn_bm");
 buttonBM.addEventListener("click",StereoBM(c, cl, cr),false);
}

function StereoBM(c, cl, cr)
{   
 var sp = new StereoProcessor(c);
 sp.LoadImagesFromCanvas(cl, cr);
 var depthmap = sp.GetDepthMap(80, 0.5, 0.05, 0.10);
 sp.OutputContext.putImageData(depthmap.ToImgData(),0,0);
}

(function(){
 var cl=document.getElementById("Canvas_leftimg");     
 var ctxl=cl.getContext("2d");
 var cr=document.getElementById("Canvas_rightimg");     
 var ctxr=cr.getContext("2d");
 var c = document.getElementById("canvas");
 var ctx=c.getContext("2d");
 let buttonLoad = document.getElementById("btn_load");
 buttonLoad.addEventListener("click",LoadPics(cxtl, cxtr), false);
})();






/*

import {IMAGE_SETTINGS, StereoProcessor,Picture} from './lib/images.js';

"use strict";
function load(){
	
}

function StereoBM()
{   
	var c1=document.getElementById("Canvas_leftimg");     
	var ctx1=c1.getContext("2d");
	var c2=document.getElementById("Canvas_rightimg");     
	var ctx2=c2.getContext("2d");
	//output image
	var c = document.getElementById("canvas");
	var ctx=c.getContext("2d");

	function loadLeftImage(){
		var imageleft = new Image();
		imageleft.onload = function(){
			var _imgl = {
				imgl: imageleft,
				xl: 0,
				yl: 0
			}
			ctx1.drawImage(_imgl.imgl, _imgl.xl, _imgl.yl)
		}
		imageleft.src = 'LeftImg.png'
	}
	loadLeftImage();

	function loadRightImage(){
		var imageright = new Image();
		imageright.onload = function(){
			var _imgr = {
				imgr: imageright,
				xr: 0,
				yr: 0
			}
			ctx2.drawImage(_imgr.imgr, _imgr.xr, _imgr.yr)
		}
		imageright.src = 'RightImg.png'
	}
	loadRightImage();

	//
	var sp = new StereoProcessor(canvas);
	sp.LoadImagesFromCanvas(c1, c2);
	var depthmap = sp.GetDepthMap(80, 0.5, 0.05, 0.10);
	ctx.putImageData(depthmap.ToImgData(),0,0);
}

(function(){
let button = document.getElementById("Button1");
button.addEventListener("click",StereoBM,false);
})();
*/
