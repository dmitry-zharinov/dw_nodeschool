/* FILTERED LS (Задача 5 из 13)  
   
  Реализуйте программу, которая выводит список отфильтрованных по расширению  
  файлов в заданой директории. Имя директории ('/path/to/dir/') будет  
  передано в качестве первого аргумента к вашей программе, а расширение  
  файла для фильтрации во втором аргументе.  
   
  Например, если Вы получили 'txt' в качестве второго аргумента, то Вы  
  должны вывести только те файлы, которые оканчиваются на .txt в заданой  
  директории. Помните о том, что второй аргумент не будет иметь '.' в  
  начале.  
   
  Список файлов должен быть выведен в консоль построчно (каждый файл на  
  новой строке). Так же необходимо использовать асинхронный I/O.  */
  
 
var fs = require("fs");
var path = require("path");

var dirPath = process.argv[2];
var extension = "." + process.argv[3];

fs.readdir(dirPath, function(err,list) {
	if (!err) {
	    filterExt(list, extension);
	} else {
		console.log(err);
	};
}); 

function filterExt(list, ext) {
	list.forEach(function(item, i, arr) {
		if (path.extname(item) == ext ) console.log(item);
	});
};