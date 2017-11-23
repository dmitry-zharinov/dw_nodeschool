/*  ## MY FIRST ASYNC I/O! (Задача 4 из 13)  
  Реализуйте программу, которая асинхронно прочитает файл и выведет  
  количество строк, содержащихся в файле, в консоль (stdout) точно так же,  
  как это сделала бы команда cat file | wc -l.  
   
  Полный путь до файла будет передан в качестве первого аргумента командной  
  строки.  
  
*/

var fs = require("fs");

fs.readFile(process.argv[2], function(err, data) {
   if (err) return console.error(err);
   var lines = data.toString().split('\n').length - 1
   console.log(lines);
   //data.toString();
  });

//var strArr = fileContent.split('\n');
//console.log(strArr.length - 1);