//function PHP_JS{
	
	function implode(delimeter, array) {
		return array.join(delimeter);
	}
	
	function explode(delimeter, string) {
		return string.split(delimeter);
	}
	
	function range(start, end) {
		var numbers = [];
		for(var i=start; numbers.push(i++)<=end;);
		return numbers;
	}
	
	function shuffle(array) {
		for(var j, x, i = array.length; i; j = parseInt(Math.random() * i), x = array[--i], array[i] = array[j], array[j] = x);
		return array;
	}
	
	function round(value, precision) {
		return value.toFixed(precision);
	}
	
	function array_unique(arr) {
		var temp = {};
	    for (var i = 0; i < arr.length; i++)
	        temp[arr[i]] = true;
	 
	    var r = [];
	    for (var k in temp)
	        r.push(k);
	    return r;
	}
	
	function trim(value) {
		return value.trim();
	}
	
	function urlencode(url) {
		return encodeURIComponent(url);
	}
	
	function urldecode(url) {
		return decodeURIComponent(url);
	}
	
	function htmlspecialchars(text) {  
	    var replacements= {"<": "&lt;", ">": "&gt;","&": "&amp;", '"': "&quot;"};                      
	    return text.replace(/[<>&"]/g, function(character) {  
	        return replacements[character];  
	    }); 
	}
	
	function print_r(string) {
		document.write(string);
		console.log(string);
	}
	
	function print(string) {
		document.write(string);
		console.log(string);
	}
//}