var arr = [];
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
    document.write(arr[num], "<br>");
    arr[num] = null;
    chk++;
  } else {
    num = Math.ceil(Math.random() * 10);
  }

  if (chk == 10) {
    break;
  }
}
