/* 
 ## HTTP COLLECT (Задача 8 из 13)  
   
  Реализуйте программу, которая посылает HTTP GET запрос на URL, который вы  
  получите в качестве первого аргумента командной строки. Соберите все  
  данные с сервера (не только первое событие "data") и выведите две строки в  
  консоль (stdout).  
   
  Первая строка должна содержать количество символов, полученных с сервера.  
  А вторая должна непостредственно вывести эти символы.  
*/

var http = require("http");
var bl = require("bl");

var url = process.argv[2];

http.get(url, function(res) {
    res.setEncoding('utf8');
    var data = [];
    //res.setEncoding("utf8");
    res.on("data", function(chunk) {data.push(chunk)});
    res.on("end", function() {
        console.log(data.join('').length);
        console.log(data.join(''));
        
    }); 
    /*
    res.pipe(bl(function (err, data) { 
        if (!err) {console.log(data.toString())} 
        else {err=err;}
    }));*/

    
    
    
} ).on('error', console.error);
