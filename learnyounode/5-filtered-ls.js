/* MAKE IT MODULAR (Задача 6 из 13)  
   
  Реализуйте программу, которая выводит список отфильтрованных по  
  расширенению файлов в заданой директории. Имя директории ('/path/to/dir/')  
  будет передано в качестве первого аргумента к вашей программе, а  
  расширение файла для фильтрации в качестве второго.  
   
   */
  

var fs = require("fs");
var path = require("path");
var mod = require("./5-module");

var dirPath = process.argv[2];
var extension = process.argv[3];

mod(dirPath, extension, function(err, data) {
  
  if (err) console.error(err);
  
  data.forEach(function(item) {
		console.log(item) });
});