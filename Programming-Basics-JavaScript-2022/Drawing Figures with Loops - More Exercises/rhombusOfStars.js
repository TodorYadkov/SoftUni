function rhombus ([input]) {
    let n=Number (input);
    for(let row=0; row < n-1; row++) {
  console.log(" ".repeat(n-1-row)+"* ".repeat(row+1)+" ".repeat(n-1-row));
   }
  console.log("* ".repeat(n));
   for(let row=n-2; row >= 0; row--) {
   console.log(" ".repeat(n-1-row)+"* ".repeat(row+1)+" ".repeat(n-1-row));
   }
  }
  rhombus([3])