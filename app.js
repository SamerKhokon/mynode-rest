var unirest = require('unirest');
var get_url = "http://httpbin.org/get";
var post_url = "http://mockbin.com/request";//"http://httpbin.org/post";

/*
unirest.post("http://localhost/hta/api_hook.php")
.headers({"Accept":"application/json"})
.send({"name":23,"phone":01719347580})
.end(function(response){
   if(response.error)
   console.log("error");
   else
   console.log(response.body);
});
*/

unirest.get("http://localhost/hta/api_hook.php")
.headers({"Accept":"application/json"})
.send({"name":23,"phone":01719347580})
.end(function(response){
   if(response.error)
   console.log("error");
   else
   console.log(response.body);
});