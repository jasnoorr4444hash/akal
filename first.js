// // let a = 120;
// // let b = 80;
// // console.log(a<=b)

// // let x
// // console.log(x)
// // let x=null;
// // console.log(x)
// // let x={
// //     name:"noor",
// //     name:"taran",
// //     name:"kusum"
// // }
// // console.log(x.name)
// // console.log(4**5)

// // let a =10;
// // let b=20;
// // if (a<b)
// //    console.log( "b is greater")
// // else
// //     console.log("a is greater")
// // let y = 20;
// // y == 20 ? console.log(`True`):console.log(`False`)
// // let a=true
// // console.log(!a)
// // y = 20;
// // z = 30;
// // a = 10;
// // console.log( y<z && z<a && a<=y)
// // console.log (y<z || z<a || a<=y)
// // console.log(  y<z && z<a || a<=y)
// // let a =null ?? 10;
// // let b =20 ?? "a";
// // let c=" " ?? 30;
// // console.log(c);
// // let day=4;
// // switch (day){
// //     case 1:
// //     console.log("monday");
// //     break;
// //     case 2:
// //     console.log("tuesday");
// //     break;
// //     case 3:
// //         console.log("wednesday");
// //         break;
// //     default:
// //         console.log("invalid day");    
// // }
// // let a =1;
// // let b = 0;
// // console.log( a ^ b);
// // console.log(0 ^ 0);
// // let c = 5;
// // console.log(~c);
// // let d = 5;
// // console.log(d << 1);
// // let e = 5;
// // console.log( e >> 1);

// // for ( let index=5; index >= 1; index--){
// //     console.log(`hello`)
// // }
// // let i = 0;
// // while ( i <4){
// //     console.log(i);
// //     i++;
// // }
// // x= 0;
// // do {
// //     console.log(x)
// //     x++;
// // } while (x<=10);
// let index = 5;
// let j = 5;
// for (let index = 1; index <= 5; index++) {
//     let r = "";
//     for (let j = 0; j < 5; j++) {
//         r += "*";
//     }
//     console.log(r)
// }

// for (let a = 0; a  <5; a++) {
//     let c = "";
//     for (let b = 0; b < a+1; b++) {
//         c += "*";
//     }
//     console.log(c)
// }
// for (let d = 1; d  <6; d++) {
//     let f = "";
//     for (let e = 1; e < d+1; e++) {
//         f += e;
    
//     }
//     console.log(f)
// }
// for (let x = 1; x  <6; x++) {
//     let z = "";
//     for (let y = 1; y < x+1; y++) {
        
//         z += x;
//     }
//     console.log(z)
// }
// for (let u = 5; u  > 0; u--) {
//     let w = "";
//     for (let v = 0; v < u; v++) {
        
//         w += " * ";
//     }
//     console.log(w)
// }
// for (let u = 5; u  > 0; u--) {
//     let w = "";
//     for (let v = 1; v < u+1; v++) {
        
//         w += v;
//     }
//     console.log(w)
// }
// // for (let m = 5,q=1; m  >0; m--) {
// //     let line=` `;
// //     for (let n= 0; n<m-1 ; n++) {
// //         line +=`   `;
// //     }
// //       for (let p = 0; p <q ; p++) {
// //        line+=` * `;
        
// //       }  
    
// //     q+=2;
// //    console.log(line);
    
// // }
// //  n=5;
// // for (let i=n; i>=1; i--){
// //   let row="";


// //   for (let u = 0; u <n-i ; u++) {
// //     row+=" ";
// //   }

// //   for (let j = 1; j <=2*i-1 ; j++) {
// //     row+="*";
   
    
// //   }
// //   console.log(row);
// // }
// for (let ma = 5,qa=1; ma  >0; ma--) {
//     let line=` `;
//     for (let na= 0; na<ma-1 ; na++) {
//         line +=`   `;
//     }
//       for (let pa = 0; pa <qa ; pa++) {
//        line+=` * `;
        
//       }  
    
//     qa+=2;
//    console.log(line);
    
// }
//  n=5;
// for (let ia=n; ia>=1; ia--){
//   let row=" ";


//   for (let ua = 0; ua <n-ia ; ua++) {
//     row+="   ";
//   }

//   for (let ja = 1; ja <=2*i-1 ; ja++) {
//     row+=" * ";
   
    
//   }
//   console.log(row);
// }
// for (let h = 0; h  <5; h++) {
//     let hi = "";
//     for (let k = 0; k < h+1; k++) {
//         hi += " * ";
//     }
//     console.log(hi)
// }
// for (let l = 5; l  > 0; l--) {
//     let li = "";
//     for (let g = 0; g < l; g++) {
        
//         li += " * ";
//     }
//     console.log(li)
// }
// for (let xi = 1; xi  <6; xi++) {
//     let zi = " ";
//     for (let yi = 1; yi <=xi; yi++) {
        
//         zi += (xi + yi)%2 + " ";
        
//     }
//     console.log(zi)
// }
 for (let d = 1; d  <5; d++) {
     let f = " ";
     for (let e = 1; e < d+1; e++) {
         f += e;
    
     }
   console.log(f)
    }
for (let m = 5,q=1; m  >0; m--) {
    let line=` `;
     for (let n= 0; n<m-1 ; n++) {
         line +=`   `;
     }
       for (let p = 0; p <q ; p++) {
        line+=` * `;
        
       } 
    }
    let n = 5;
let result = "";

for (let i = 0; i < n; i++) {
  for (let j = 0; j <= i; j++) {
    result += String.fromCharCode(65 + j);
  }
  result += "\n";
}
console.log(result);
let ni = 5;
let resulti = "";

for (let i = ni; i >= 1; i--) {
  for (let j = 0; j < i; j++) {
    resulti += String.fromCharCode(65 + j);
  }
  resulti += "\n";
}
console.log(resulti);
 let na = 5;
let resulta = "";

for (let i = 0; i < na; i++) {
  for (let j = 0; j <= i; j++) {
    resulta += String.fromCharCode(65 + i);
  }
  resulta += "\n";
}
console.log(resulta);
let nb = 4;
let resultb = "";

for (let i = 0; i < nb; i++) {
  for (let s = 0; s < nb - i - 1; s++) {
    resultb += " ";
  }
  for (let j = 0; j <= i; j++) {
    resultb += String.fromCharCode(65 + j);
  }
  for (let j = i - 1; j >= 0; j--) {
    resultb += String.fromCharCode(65 + j);
  }

  resultb += "\n";
}

console.log(resultb);

let nc = 5;  
let resultc = "";

for (let i = nc; i >= 1; i--) {
  for (let j = i; j <= nc; j++) {
    resultc += String.fromCharCode(64 + j) + " ";
  }
  resultc += "\n";
}

console.log(resultc);
let rows = 4;
let cols = 5;
let resultd = "";

for (let i = 1; i <= rows; i++) {
  for (let j = 1; j <= cols; j++) {
    if (i === 1 || i === rows || j === 1 || j === cols) {
      resultd += "* ";
    } else {
      resultd += "  ";
    }
  }
  resultd += "\n";
}

console.log(resultd);
let ne = 4;
let resulte = "";
for (let i = ne; i >= 1; i--) {
  for (let j = 1; j <= i; j++) {
    resulte += "*";
  }

  for (let s = 1; s <= 2 * (ne - i) + 1; s++) {
    resulte += " ";
  }

  for (let j = 1; j <= i; j++) {
    resulte += "*";
  }

  resulte += "\n";
}


for (let i = 1; i <= ne; i++) {
  for (let j = 1; j <= i; j++) {
    resulte += "*";
  }

  for (let s = 1; s <= 2 * (ne - i) + 1; s++) {
    resulte += " ";
  }

  for (let j = 1; j <= i; j++) {
    resulte += "*";
  }

  resulte += "\n";
}

console.log(resulte);