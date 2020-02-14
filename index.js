

function save(){

html2canvas(document.querySelector(".container")).then(canvas => {
 
document.body.appendChild(canvas)
});}

// set background color function 
function update(jscolor) {
    
    document.querySelector(".container").style.backgroundColor = '#' + jscolor;
}
// set font-color function 
function color(jscolor) {
   
   document.querySelector(".font").style.color = '#' + jscolor;
}




function mock1(){

link = "https://www.googleapis.com/blogger/v3/blogs/2743943784739529393/posts/8769189678803747891?key=AIzaSyB3q5WvHNIeHpcL4TBz_jMUfFaWNP63qTA";
document.getElementById("theme-showcase-id").style.display = "none";
loadDoc();
}
function mock2(){
link = "https://www.googleapis.com/blogger/v3/blogs/2743943784739529393/posts/6717697854452652354?key=AIzaSyB3q5WvHNIeHpcL4TBz_jMUfFaWNP63qTA";
loadDoc();
document.getElementById("theme-showcase-id").style.display = "none";
}

function mock3(){
link = "https://www.googleapis.com/blogger/v3/blogs/2743943784739529393/posts/4814603191095965719?key=AIzaSyB3q5WvHNIeHpcL4TBz_jMUfFaWNP63qTA";
loadDoc();
document.getElementById("theme-showcase-id").style.display = "none";
}

function mock4(){
link = "https://www.googleapis.com/blogger/v3/blogs/2743943784739529393/posts/3151372552471030154?key=AIzaSyB3q5WvHNIeHpcL4TBz_jMUfFaWNP63qTA";
loadDoc();
}
function mock5(){
link = "https://www.googleapis.com/blogger/v3/blogs/2743943784739529393/posts/7620209437618183417?key=AIzaSyB3q5WvHNIeHpcL4TBz_jMUfFaWNP63qTA";
loadDoc();
}
function mock6(){

link = "https://www.googleapis.com/blogger/v3/blogs/2743943784739529393/posts/8769189678803747891?key=AIzaSyB3q5WvHNIeHpcL4TBz_jMUfFaWNP63qTA";

loadDoc();
}


function loadDoc() {
//document.getElementById("loader-block").style.display = "block";
var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    alert(this.responseText);
    var myObj = JSON.parse(this.responseText);
alert(myObj.content);

let tryobj = myObj.content;
//alert(Array.isArray(tryobj));

     document.getElementById("demo-s1").innerHTML = "";
 let appy = document.getElementById("demo-s1");
 document.getElementById("section-1").innerHTML = myObj.content;

/*** html2canvas **/

let imgx = document.getElementsByClassName("example");
let d = imgx.length;
console.log("yhi");
for (let t = 0;t<d;t++){



domtoimage.toPng(imgx[t])
      .then(function (dataUrl) {
        let ximg = new Image();
        ximg.src = dataUrl;
        console.log(dataUrl);
        console.log("t :" + t);
        ximg.setAttribute("id",t);
        ximg.setAttribute("onclick","clicker(this)");
        appy.appendChild(ximg);
      });




/*

html2canvas(imgx[t],{
scale:1,

}).then(canvas => {
 canvas.setAttribute("id",t);
 canvas.setAttribute("onclick","clicker(this)");
appy.appendChild(canvas);

});*/

}


/*
html2canvas(tempclass[1],{

useCORS: true,
allowTaint: false,
letterRendering: true,
logging:true,
onrendered: function (canvas) {
//var img = canvas.toDataURL('image/jpeg');
alert(d);
//window.open(img);
//return img;

 position.appendChild(canvas);
}

});

html2canvas(tempclass[d]).then(function(canvas) {
    position.appendChild(canvas);
 

}).catch(console.log(err));

}*/



 // Array.from(tempclass);
 //alert(tempclass.length);
 // alert(typeof tempclass);


 
  }
};
xmlhttp.open("GET", link, true);
xmlhttp.send();

}



//alert(myObj.content);
 /* let tryobj = myObj.content;
//alert(tryobj.type);
 //let tempclass = tryobj.document.getElementsByClassName("example");
 //Array.from(tempclass);
alert(tryobj);
*/
/*
for(t=0;t<tempclass.length;t++)
{
let smalltemp =  document.createElement(div);
smalltemp = tempclass[t];

  }

}
xmlhttp.open("GET", link, true);
xmlhttp.send();
}*/



// temporary image function
   function mockFile(){
       var preview = document.getElementById('mock-image'); //selects the query named img
       var file    = document.getElementById('add-image').files[0]; //sames as here
       var reader  = new FileReader();

       reader.onloadend = function () {
           preview.src = reader.result;
       }

       if (file) {
           reader.readAsDataURL(file); //reads the data as a URL
       } else {
           preview.src = "";
       }
  }

//temporary background image function 

  
      
      function backimg(){
       
       var file    = document.getElementById('add-background-image').files[0]; //sames as here
       var reader  = new FileReader();

       reader.onloadend = function () {
       document.querySelector(".container").style.backgroundImage = "url("+reader.result+")";
          
       }

       if (file) {
           reader.readAsDataURL(file); //reads the data as a URL
       } else {
         document.querySelector(".container").style.backgroundImage = "";
       }
  }

//temporary font selection function 

function setFont(){

var font = document.getElementById("mySelectxf").value;
alert(font);
document.querySelector(".font").style.fontFamily = font;
}



// temporary function to blur background image 

function ranger(){

var blur = document.getElementById("ranger").value;

  var y = blur+""+"px";
document.querySelector(".container").style.filter = "blur("+y+")";
}
 
 // function to print 
 
function printcontent(){

var restorepage = document.body.innerHTML ;
var printcontent = document.getElementById("toprint").innerHTML;
document.body.innerHTML = printcontent;

window.print();

document.body.innerHTML = restorepage;
}



function clicker(obj){
  let myid = obj.id;
  console.log(myid);
	let imgx = document.getElementsByClassName("example");
    let d = imgx.length;
	
	 
    document.getElementById("single-template").innerHTML = "<div>" + imgx[myid].innerHTML +"</div>";
	alert(myid);
}

/*function takeScreenShot(){
	window.scrollTo(0,0);
	html2canvas(document.querySelector("#toprint"),{
scale:1,

}).then(canvas => {
	alert(canvas)
 var img = canvas.toDataURL('image/jpeg');
 let images = document.createElement("img");
 images.src = img ;
 let alink = document.createElement("a");
 alink.href = img;
 alink.appendChild(images);
alink.setAttribute("download", "downloadit");
alink.click();
//document.body.appendChild(alink);

 
 
});
	
}*/

function takeScreenShot(){
	window.scrollTo(0,0);
	domtoimage.toBlob(document.getElementById('single-template'))
    .then(function (blob) {
		console.log(blob);
        window.saveAs(blob, 'my-node.png');
    });
      
}
