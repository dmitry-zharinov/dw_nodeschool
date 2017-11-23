/* ## JUGGLING ASYNC (Задача 9 из 13)  
   
  Эта задание похоже на предыдущее (HTTP COLLECT) тем, что Вам снова  
  придется использовать http.get(). Но в этот раз, Вы получите три адреса  
  (URL) в качестве трех первых аргументов командной строки.  
   
  Соберите контент с каждого адреса, который получите, и выведите его в  
  консоль (stdout). Не нужно выводить общее количество полученных данных,  
  просто выведите содержимое каждого адреса на новой строке. Учтите, что Вы  
  должны вывести содержимое в том порядке, в каком Вы получили адреса.   */
  
  var http = require("http");
  var url1 = process.argv[2];
  var holder = [];
  var endCount = 0;
  
  for(var i = 2; i < 5; i++) {
    httpResponse(process.argv[i]);
  };
  
  function httpResponse(url) {
    http.get(url, function(res) {
      var data = [];
      res.setEncoding('utf8');
      res.on("data", function(chunk) {data.push(chunk)});
      res.on("end", function() {
        holder.push(data.join(''));
        endCount++;
        if(endCount >= 3){
              for(var i = 0; i < holder.length; i++){
                    console.log(holder[i]); 
                }
          
        }
      });
      
    });
  };
