 /* ## TIME SERVER (Задача 10 из 13)  
   
  Реализуйте TCP сервер, возвращающий текущее время при соединении.  
   
  Ваш сервер должен ожидать TCP соединений на порту, который Вы получите в  
  качестве первого аргумента командной строки. На каждое новое соединение  
  сервер должен возвращать текущую дату и время в формате:  
   
     "YYYY-MM-DD hh:mm"  
   
  В конце строки с именем обязательно должен быть символ переноса строки.  
  Месяцы, дни, часы и минуты должны быть двучисленными, например:  
   
     "2013-07-06 17:42"  
*/

var net = require('net');


function zeroFill(i) {
    return (i < 10 ? '0' : '') + i;
}


function now () {
    var d = new Date();
    var currentDate = `${zeroFill(d.getFullYear())}-${zeroFill(d.getMonth() + 1)}-${zeroFill(d.getDate())} ${zeroFill(d.getHours())}:${zeroFill(d.getMinutes())}`;
    return currentDate;
    

}


var server = net.createServer(function(socket) {
    socket.end(now() + '\n');
});
server.listen(Number(process.argv[2]));