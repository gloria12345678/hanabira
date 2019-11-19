var myList = document.getElementById('catchMynews');
var myApi ="https://api.github.com/users"
console.log(myList);
fetch(myApi)
.then(function(response) {
  if (!response.ok) {
    throw new Error("HTTP error, status = " + response.status);
  }
  return response.json();
})
.then(function(json) {
    console.log(json);
    console.log(json.length);
   for(var i = 0; i < json.length; i++) {
    var listItem = document.createElement('div');
    listItem.innerHTML = '<p>' + json[i].login+ '</p>';
    listItem.innerHTML +='<hr>';
    listItem.innerHTML +='<p>' + json[i].html_url + '<p>';
    myList.appendChild(listItem);
  }
})
.catch(function(error) {
  var p = document.createElement('p');
  p.appendChild(
    document.createTextNode('Error: ' + error.message)
  );
  document.body.insertBefore(p, myList);
});

