var floor = prompt("몇 층으로 만들까요?");
floor = parseInt(floor);

var IMG =
  "http://postfiles13.naver.net/20160309_220/hwee___1457528460795IuUC7_JPEG/P20160302_130332000_A603EF99-8AC1-4432-BCEA-087031CB7606.JPG?type=w1";

if (floor === 0) {
  document.write(`<img src=${IMG} loading=lazy/>`);
  document.write("<h1>?!?!?!?!?!?!!!?!?!?!!?!!!</h1>");
}

var star = 0;
var space = 0;

var rainbow = [
  "red",
  "orange",
  "yellow",
  "green",
  "blue",
  "indigo",
  "purple",
  "",
];
var cnt = 0;

star = floor * 2;
space = floor;

for (var i = 0; i < floor; i++) {
  if (cnt === 7) {
    cnt = 0;
  }
  /* 공백처리 (center 태그로 대체)
  for (var j = 1; j < space; j++) {
    document.write("&nbsp&nbsp&nbsp");
  }
  */
  for (var j = space; j <= star - space; j++) {
    document.write(
      "<font size=5 style=color:" + rainbow[cnt] + ">*&nbsp</font>"
    );
  }
  document.write("<br>");
  space--;
  cnt++;
}
space = floor;

for (var i = 1; i < floor; i++) {
  if (cnt === 7) {
    cnt = 0;
  }
  /* 공백처리 (center 태그로 대체)
  for (var j = 0; j <= floor - space; j++) {
    document.write("&nbsp&nbsp&nbsp");
  }
  */
  for (var j = floor - space + 3; j < floor + space; j++) {
    document.write(
      "<font size=5 style=color:" + rainbow[cnt] + ">*&nbsp</font>"
    );
  }
  document.write("<br>");
  space--;
  cnt++;
}
