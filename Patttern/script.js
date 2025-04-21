// 1.
//         1
//       1 2
//     1 2 3
//   1 2 3 4
// 1 2 3 4 5

// for (let i = 1; i <= 5; i++) {
//   for (let h = i; h < 5; h++) {
//     document.writeln("-");
//   }
//   for (let j = 1; j <= i; j++) {
//     document.writeln(j);
//   }
//   document.writeln("<br>");
// }

// 2.
//         1
//       2 1
//     3 2 1
//   4 3 2 1
// 5 4 3 2 1

// for (let i = 1; i<=5; i++) {
//   for(let h=i; h<5; h++){
//     document.writeln("-")
//   }
//   for (let j = i; j>= 1; j--) {
//     document.writeln(j);
//   }
//   document.writeln("<br>");
// }

// 3.
//         5
//       4 5
//     3 4 5
//   2 3 4 5
// 1 2 3 4 5

// for (let i = 5; i >= 1; i--) {
//     for (let h = 1; h < i; h++) {
//       document.write("&nbsp; ");
//     }

//     for (let j = i; j <= 5; j++) {
//       document.write(j);
//     }

//     document.write("<br>");
//   }

// 4.
//         5
//       5 4
//     5 4 3
//   5 4 3 2
// 5 4 3 2 1

// for(let i=5; i>=1; i--){
//     for(let h=1; h<i; h++){
//      document.writeln("&nbsp;&nbsp;")
//     }
//     for(let j=5; j>=i; j--){
//       document.writeln(j)
//     }
//     document.writeln("<br>")
// }

// 5.
//         1
//       2 2
//     3 3 3
//   4 4 4 4
// 5 5 5 5 5

// for (let i = 1; i <= 5; i++) {
//       for (let h = i; h < 5; h++) {
//         document.writeln("-");
//       }
//       for (let j = 1; j <= i; j++) {
//         document.writeln(i);
//       }
//       document.writeln("<br>");
//     }

// 6.
//         5
//       4 4
//     3 3 3
//   2 2 2 2
// 1 1 1 1 1

// for(let i=5; i>=1; i--){
//     for(let h=1; h<i; h++){
//      document.writeln("&nbsp;&nbsp;")
//     }
//     for(let j=5; j>=i; j--){
//       document.writeln(i)
//     }
//     document.writeln("<br>")
// }

// 7.
// 1 2 3 4 5
//   1 2 3 4
//     1 2 3
//       1 2
//         1

// for(let i=5; i>=1; i--){
//    for(let h=i; h<5; h++){
//     document.writeln("&nbsp;&nbsp;")
//    }
//     for(let j=1; j<=i; j++){
//         document.writeln(j);
//     }
//     document.writeln("<br>")
// }

// 8.
// 1 2 3 4 5
//   2 3 4 5
//     3 4 5
//       4 5
//         5

// for(let i=1; i<=5; i++){
//     for(let h=1; h<i; h++){
//      document.writeln("&nbsp;&nbsp;")
//     }
//     for(let j=i; j<=5; j++){
//        document.writeln(j);
//     }
//     document.writeln("<br>")
// }

// 9.
// 5 4 3 2 1
//   5 4 3 2
//     5 4 3
//       5 4
//         5

// for(let i=1; i<=5; i++){
//   for(let h=1; h<i; h++){
//     document.writeln("&nbsp;&nbsp;")
//   }
//     for(let j=5; j>=i; j--){
//         document.writeln(j)
//     }
//     document.writeln("<br>")
// }

// 10.
// 5 4 3 2 1
//   4 3 2 1
//     3 2 1
//       2 1
//         1

// for(let i=5; i>=1; i--){
//     for(let h=i; h<5; h++){
//      document.writeln("&nbsp;&nbsp;")
//     }
//     for(let j=i; j>=1; j--){
//      document.writeln(j)
//     }
//     document.writeln("<br>")
// }

// 11.
// * * * * *
//   * * * *
//     * * *
//       * *
//         *

// for(let i=5; i>=1; i--){
//         for(let h=i; h<5; h++){
//          document.writeln("&nbsp;&nbsp;")
//         }
//         for(let j=i; j>=1; j--){
//          document.writeln("*")
//         }
//         document.writeln("<br>")
//     }

// 12.

//         *
//       * *
//     * * *
//   * * * *
// * * * * *

// for(let i=5; i>=1; i--){
//     for(let h=1; h<i; h++){
//      document.writeln("&nbsp;&nbsp;")
//     }
//     for(let j=5; j>=i; j--){
//       document.writeln("*")
//     }
//     document.writeln("<br>")
// }

// 13.
//         1
//       1 0
//     1 0 1
//   1 0 1 0
// 1 0 1 0 1

// for (let i = 1; i <= 5; i++) {
//   for (let h = i; h < 5; h++) {
//     document.writeln("&nbsp;&nbsp");
//   }
//   for (let j = 1; j <= i; j++) {
//     if (j % 2 == 0) {
//       document.writeln("0");
//     } else {
//       document.writeln("1");
//     }
//   }
//   document.writeln("<br>");
// }

// 14.
//         1
//       0 0
//     1 1 1
//   0 0 0 0
// 1 1 1 1 1

// for (let i = 1; i <= 5; i++) {
//   for (let h = i; h < 5; h++) {
//     document.writeln("&nbsp;&nbsp");
//   }
//   for (let j = 1; j <= i; j++) {
//     if (i % 2 == 0) {
//       document.writeln("0");
//     } else {
//       document.writeln("1");
//     }
//   }
//   document.writeln("<br>");
// }

// 15.
// 1 0 1 0 1
//   0 1 0 1
//     1 0 1
//       0 1
//         1

// for (let i = 1; i <= 5; i++) {
//   for (let h = i; h < 5; h++) {
//     document.writeln("&nbsp;&nbsp");
//   }
//   for (let j = i; j >= 1; j--) {
//     if (j % 2 == 0) {
//       document.writeln("0");
//     } else {
//       document.writeln("1");
//     }
//   }
//   document.writeln("<br>");
// }

// 16.
// 1 0 1 0 1
//   1 0 1 0
//     1 0 1
//       1 0
//         1

// for (let i = 1; i <= 5; i++) {
//   for (let h = 1; h < i; h++) {
//     document.writeln("&nbsp;&nbsp;");
//   }
//   for (let j = 5; j >= i; j--) {
//     if (j % 2 == 0) {
//       document.writeln("0");
//     } else {
//       document.writeln("1");
//     }
//   }
//   document.writeln("<br>");
// }

// 17.
// 1 1 1 1 1
//   0 0 0 0
//     1 1 1
//       0 0
//         1

// for (let i = 1; i <= 5; i++) {
//   for (let h = 1; h < i; h++) {
//     document.writeln("&nbsp;&nbsp;");
//   }
//   for (let j = 5; j >= i; j--) {
//     if (i % 2 == 0) {
//       document.writeln("0");
//     } else {
//       document.writeln("1");
//     }
//   }
//   document.writeln("<br>");
// }

// 18.
// - | - | -
//   - | - |
//     - | -
//       - |
//         -

// for (let i = 1; i <= 5; i++) {
//   for (let h = 1; h < i; h++) {
//     document.writeln("&nbsp;");
//   }
//   for (let j = 5; j >= i; j--) {
//     if (j % 2 == 0) {
//       document.writeln("|");
//     } else {
//       document.writeln("-");
//     }
//   }
//   document.writeln("<br>");
// }

// 19.

//         |
//       | -
//     | - |
//   | - | -
// | - | - |

// for (let i = 5; i >= 1; i--) {
//   for (let h = 1; h < i; h++) {
//     document.writeln("&nbsp;");
//   }
//   for (let j = 5; j >= i; j--) {
//     if (j % 2 == 0) {
//       document.writeln("-");
//     } else {
//       document.writeln("|");
//     }
//   }
//   document.writeln("<br>");
// }
