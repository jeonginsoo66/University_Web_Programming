// 1부터 10까지의 숫자를 저장할 배열
var arr = [];
// 랜덤 숫자를 저장하는 변수
var num = 0;
// 무한루프에서 빠져나오기위한 변수
var chk = 0;

// 배열 초기화 (1 ~ 10)
for (var i = 1; i <= 10; i++) {
  arr[i] = i;
}

while (true) {
  num = Math.ceil(Math.random() * 10);
  if (arr[num] == num) {
    document.write(chk + 1 + "번째 숫자 : " + arr[num], "<br>");
    arr[num] = null;
    chk++;
  } else {
    num = Math.ceil(Math.random() * 10);
  }
  if (chk == 10) {
    break;
  }
}
