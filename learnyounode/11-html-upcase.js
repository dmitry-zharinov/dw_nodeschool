/*  ## HTTP UPPERCASERER (Задача 12 из 13)  
   
  Реализуйте HTTP сервер который принимает только POST запросы и  
  конвертирует все символы тела запроса в верхний регистр и возвращает их  
  клиенту.  
   
  Ваш сервер должен слушать порт, который Вы получите в качестве первого  
  аргумента командной строки.  
 */
 
 var http = require("http");
 var map = require("through2-map");
 
 var server = http.createServer(function (req, res){
     
     if (req.method == 'POST') {
         console.log('POST-запрос');

            
             req.pipe(map(function(chunk) {
                 return chunk.toString().toUpperCase();
             })).pipe(res);
              console.log(res);

     } else {
         return res.end('не POST запрос');
     }
     
 });
 server.listen(Number(process.env.PORT));//process.argv[2]));