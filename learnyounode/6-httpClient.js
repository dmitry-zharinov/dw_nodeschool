/* ## HTTP CLIENT (Задача 7 из 13)  
   
  Реализуйте программу, которая посылает HTTP GET запрос на URL, который вы  
  получите в качестве первого аргумента командной строки. Выведите  
  содержимое каждого события "data" из ответа (response) построчно в консоль  
  (stdout).  */
  
  var http = require("http");
  
var url = "http://yandex.ru"; //process.argv[2];
  http.get(url, function(response) {
     response.setEncoding("utf8");
     response.on("data", console.log);
     
  });