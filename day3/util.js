function gugu(num) {
    if ( num == null ) {
      return;
    } else if ( num < 10  && num >= 1 ) {
        document.write("<h1 style='color:red'>"+num+"단입니다."+"<h1>")
      for ( var i = 1; i < 10; i++ ) {
        document.write("<h3 style='color:blue'>"+num + '*' + i + '=' + (num*i) + '<br>'+"<h3");
      }
    } else if ( num >= 10  || num < 1 ) {
      alert('구구단은 2단 부터 9단 까지만 가능합니다.');
      var num = prompt('구구단 몇단을 출력 할까요?');
      gugu(num);
    } else {
      alert('숫자가 아니네요 다시 입력 해주세요.');
      var num = prompt('구구단 몇단을 출력 할까요?');
      gugu(num);
    }
}