const img = document.createElement("img");
const block = document.getElementsByClassName("block");
const speedUp = document.getElementById("speedUp");
const speedDown = document.getElementById("speedDown");

const IMG =
  "http://postfiles13.naver.net/20160309_220/hwee___1457528460795IuUC7_JPEG/P20160302_130332000_A603EF99-8AC1-4432-BCEA-087031CB7606.JPG?type=w1";
img.src = IMG;
img.width = "50";
img.height = "50";

const MAXRANDOM = 99; // 랜덤 생성 범위

var chk = 0; // 강아지 이미지 클릭 검사
var num = 0; // 랜덤 숫자 생성
var speed = 1000; // 강아지 이동 속도
var id = null;

function handleClick(e) {
  if (e.path[0].localName == "img") {
    clearInterval(id);
    alert("쳇");
  } else {
    alert("깔깔");
  }
}

function handleSpeedUp() {
  clearInterval(id);
  speed -= 100;

  id = setInterval(() => {
    num = Math.ceil(Math.random() * MAXRANDOM);
    block[num].appendChild(img);
  }, speed);

  if (speed < 100) {
    alert("속도를 더이상 높일 수 없습니다!!");
    speed = 0;
  }
}

function handleSpeedDown() {
  clearInterval(id);
  speed += 100;

  id = setInterval(() => {
    num = Math.ceil(Math.random() * MAXRANDOM);
    block[num].appendChild(img);
  }, speed);
}

id = setInterval(() => {
  num = Math.ceil(Math.random() * MAXRANDOM);
  block[num].appendChild(img);
}, speed);

function init() {
  speedUp.addEventListener("click", handleSpeedUp);
  speedDown.addEventListener("click", handleSpeedDown);
  for (var i = 0; i < block.length; i++) {
    block[i].addEventListener("click", handleClick);
  }
}

init();
