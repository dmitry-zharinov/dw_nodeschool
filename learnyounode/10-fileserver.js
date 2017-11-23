/*  ## HTTP FILE SERVER (Задача 11 из 13)  
   
  Реализуйте HTTP сервер, который отдает одинаковый файл для всех входящих  
  запросов.  
   
  Сервер должен слушать порт, который будет передан в качестве первого  
  аргумента командной строки.  
   
  Файл, который нужно возвращать, будет передан в качестве второго аргумента  
  командной строки. Вы должны использовать fs.createReadStream() метод для  
  отдачи содержимого файла.  */
  
  var fs = require("fs");
  var http = require("http");
  
  var port = process.argv[2]; //process.env.PORT;
  var file = process.argv[3];
  
  var server = http.createServer();
  
  server.on("request", function(req, res) {
     var src = fs.createReadStream(file);
     src.pipe(res);
     console.log('response:' + res);
  });
  
  server.listen(Number(port));
  