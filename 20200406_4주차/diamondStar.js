var floor = prompt("몇 층으로 만들까요?", 0);
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
floor = parseInt(floor);

star = floor * 2;
space = star / 2;

for (var i = 0; i < floor; i++) {
  if (cnt === 7) {
    cnt = 0;
  }
  /* 공백처리 (center 태그로 해결됨)
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
space = star / 2;

for (var i = 1; i < floor; i++) {
  if (cnt === 7) {
    cnt = 0;
  }
  /* 공백처리 (center 태그로 해결됨)
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
