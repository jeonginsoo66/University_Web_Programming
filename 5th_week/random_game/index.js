const time = document.getElementById("time");
const block = document.getElementsByClassName("block");
const startBtn = document.getElementById("startBtn");
const buttonDiv = document.getElementById("buttonDiv");

var arr = []; // 초기 배열 초기화에 사용될 배열
var game_arr = []; // 블럭 위치 저장에 사용될 배열
var num = 0; // 랜덤 숫자를 저장하는 변수
var chk = 0; // 무한루프에서 빠져나오기위한 변수 & 블럭위치 검사

function blockInit() {
  arr = [];
  game_arr = [];
  num = 0;
  chk = 0;
  // 배열 초기화 (1 ~ 25)
  for (var i = 1; i <= 25; i++) {
    arr[i] = i;
  }

  while (true) {
    num = Math.ceil(Math.random() * 24);
    if (arr[num] == num) {
      block[num].style.backgroundColor = "black";
      arr[num] = null;

      game_arr[chk] = num; // 블럭 위치 저장
      chk++;
    } else {
      num = Math.ceil(Math.random() * 24);
    }

    if (chk == 10) {
      break;
    }
  }
}

// setInterval의 아이디 변수
var id = 0;

// 게임 시작
function handleStart() {
  buttonDiv.style.display = "none";
  startBtn.removeEventListener("click", handleStart);
  blockInit();
  for (var i = 0; i < block.length; i++) {
    if ((block[i].style.display = "none")) {
      block[i].style.display = "block";
    }
  }
  // 블럭 색깔이 초기화되기까지 남은 시간 보여줌
  var count = 10;
  id = setInterval(() => {
    time.innerHTML = `
    <h1>블럭의 위치를 잘 기억해두세요!!</h1>
    <h1>남은시간 : ${count}</h1>
    `;
    count--;
  }, 1000);

  setTimeout(blockColorInit, 11000);
}

function handleRestart() {
  location.reload();
}

// 블럭 색깔 초기화
// 블럭 클릭 이벤트 초기화
function blockColorInit() {
  buttonDiv.style.display = "block";
  startBtn.innerText = "다시 시작하기";
  startBtn.addEventListener("click", handleRestart);
  time.innerHTML = "<h1>블럭의 위치를 맞춰주세요!!</h1>";

  for (var i = 0; i < block.length; i++) {
    block[i].addEventListener("click", handleClick);
  }
  for (var i = 0; i < game_arr.length; i++) {
    block[game_arr[i]].style.backgroundColor = "white";
  }
  clearInterval(id);
}

var blockChk = 0;

function handleClick(e) {
  if (e.path[0].style.backgroundColor == "white") {
    e.path[0].style.backgroundColor = "black";
    blockChk++;
  } else {
    alert("틀렸습니다!!");
  }

  if (blockChk == chk) {
    alert("위치를 모두 맞추셨네요!!");
    for (var i = 0; i < block.length; i++) {
      block[i].removeEventListener("click", handleClick);
    }
  }
}

function init() {
  startBtn.addEventListener("click", handleStart);
}

init();
