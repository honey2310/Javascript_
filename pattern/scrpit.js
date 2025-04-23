let x = 10;
let y = 10;

for (let i = 1; i <= 19; i++) {
  for (let j = 1; j <= 20; j++) {
    if (j == x || j == y) {
      document.writeln("*");
    } else {
      document.writeln("&nbsp;&nbsp;");
    }
  }
  document.writeln("<br>");

  if (i < 10) {
    x--;        // i - 11 to 19  x= 9 to 1
    y++;        // i - 11 to 19  y= 11 to 20
  } else {
    x++;       // i=2 x=9 y=12
    y--;
  }
}
