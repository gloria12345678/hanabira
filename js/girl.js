var myList = document.getElementById('getMyStaff');
var apiList = document.getElementById('girlPhoto');
var myApi ="https://test-cms-alpha.herokuapp.com/sites/1/profiles.json"
document.write('<script src="../swiper.min.js"></script>');
fetch(myApi)
.then(function(response) {
   if (!response.ok) {
    throw new Error("HTTP error, status = " + response.status);
  }
  return response.json();
})
.then(function(json) {
    console.log(json);
   for(var i = 0; i < json.length; i++) {
   var girlPhoto =document.createElement("div");
   girlPhoto.setAttribute("id","swiper2");
   girlPhoto.innerHTML = '<div class="girlPhotoBox"><img src="https://test-cms-alpha.herokuapp.com'+json[i].avatars+'"><div class="girlPhotoName"> ' + json[i].name+ '</div></div>'
   apiList.appendChild(girlPhoto);
  }
})
.catch(function(error) {
  var p = document.createElement('p');
  // 
  document.body.insertBefore(p, myList);
});




var myList1 = document.getElementById('catchMynews');
var myApi1 ="https://test-cms-alpha.herokuapp.com/sites/1/tweets.json"
// console.log(myList1);
fetch(myApi1)
.then(function(response) {
  if (!response.ok) {
    // throw new Error("HTTP error, status = " + response.status);
  }
  return response.json();
})
.then(function(json) {
    // console.log(json);
    // console.log(json.length);
  for(var i=0; i<json.length; i++) {

    console.log(i);
    var listItem = document.createElement('div');
    listItem.innerHTML = '<p>' + json[i].created_at+ '</p>';
    listItem.innerHTML +='<hr>';
    listItem.innerHTML +='<p>' + json[i].content + '<p>';
    myList1.appendChild(listItem);
  }
})
.catch(function(error) {
  var p = document.createElement('p');
  // p.appendChild(
  //   // document.createTextNode('Error: ' + error.message)
  // );
  document.body.insertBefore(p, myList);
});


fetch(myApi)
.then(function(response) {
   if (!response.ok) {
    throw new Error("HTTP error, status = " + response.status);
  }
  return response.json();
})
.then(function(json) {
    console.log(json);
  for(let i = 0; i < json.length; i++) {
      var para=document.createElement("div");
   para.setAttribute("class","staff");
  var img =new Array
  for(var j=0;j<3;j++){
    img[j] ="https://test-cms-alpha.herokuapp.com"+json[i].avatars[j];
    if(img[j]=="https://test-cms-alpha.herokuapp.comundefined"){
      img[j]="staff/all.jpg"
   }
  }
   para.innerHTML = '<div class="staffBox"><div class="staPhotoffBox"><div class="staBigPhotoffBox"><div class="swiper-container" id="swiper'+i+'"><div class="swiper-wrapper"><div class="swiper-slide"><img id="img1" src="'+ img[0]+'"></div><div class="swiper-slide"><img id="img2" src="'+ img[1]+'"></div> <div class="swiper-slide"><img id="img3" src="'+ img[2]+'"></div></div><div class="swiper-button-prev"></div><div class="swiper-button-next"></div></div></div><div class="staPhotoffBoxSmall"><ul><li><img id="" src="'+ img[0]+'"></li><li><img id="" src="'+ img[1]+'"></li><li><img id="" src="'+ img[2]+'"></li></ul></div></div><div class="txt"><h2 id="name">' + json[i].name+ '</h2> <br><h2 id="old">年齢:' + json[i].age+ '</h2><br><h3 id="sizi">3サイズ：' + json[i].abstract + '</h3><br><h4 id="txt">' + json[i].description + '</h4></div></div>';
   myList.appendChild(para);
   var mySwiper = new Swiper('#swiper'+i,{
    direction : 'horizontal',
    loop : true,
    prevButton:'.swiper-button-prev',
    nextButton:'.swiper-button-next',
  })
   }
})
.catch(function(error) {
  var p = document.createElement('p');
  // p.appendChild(
  //   document.createTextNode('Error: ' + error.message)
  // );
  // document.body.insertBefore(p, myList);
});
