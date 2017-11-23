/* 
 ## HTTP JSON API SERVER (Задача 13 из 13)  
   
  Реализуйте HTTP сервер, который возвращает JSON объект на GET запрос по  
  адресу /api/parsetime. Запрос должен содержать в строке запроса ключ 'iso'  
  и время в ISO-формате в качестве значения.  
   
  Например:  
   
  /api/parsetime?iso=2013-08-10T12:10:15.474Z  
   
  JSON объект в ответе должен содержать только следующие свойства: 'hour',  
  'minute' и 'second'. Пример ответа:  
   
     {  
       "hour": 14,  
       "minute": 23,  
       "second": 15  
     }  
   
  Так же сервер должен обрабатывать запрос на '/api/unixtime', который  
  содержит такую же строку запроса, но возвращает UNIX-время в миллисекундах  
  (количество миллисекунд, прошедшее с 1 января 1970 00:00:00 UTC) в  
  свойстве 'unixtime'. Пример ответа:  
   
     { "unixtime": 1376136615474 }  
   
  Ваш сервер должен слушать порт, который Вы получите в качестве первого  
  аргумента командной строки.  
   
*/
var url = require("url");
var http = require("http");
var port = Number(process.argv[4]);
port = Number(process.env.PORT);

var server = http.createServer(function (req, res) {
    var parsedUrl = url.parse(req.url);
    if(req.method == "GET" && parsedUrl.hasOwnProperty("iso") ) {
        var iso = parsedUrl.query["iso"];
        switch (parsedUrl.pathname) {
            case '/api/parsetime':
                res = getParseTime(iso);
                break;
            
            case '/api/unixtime':

                break;
        }

    }
    
    
})
server.listen(port);