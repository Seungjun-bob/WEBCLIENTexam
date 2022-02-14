function write(content, tag) {
	document.write("<"+tag+">"+content+"</"+tag+">");
}
function hr() {
	document.write("<hr>");
}
function writeColor(content, tag, color) {
	document.write("<"+tag+" style='color:"+color+"'>"+
			  content+"</"+tag+">");	
}
function writeNewLine(content) {
	document.write(content+"<br>");	
}
function gugu(num) {
    if(!isNaN(num)){
        for( var i = 0; i < 10; i++ ) {
            document.write(num+"x"+i+"="+(i*num)+"입니다.</br>");
        }
    }else{
        alert("숫자가 아닙니다.");
    }
}