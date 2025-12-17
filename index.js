function drawTriangle(triangleSize) {
   for (let i = 1; i <= triangleSize; i++) {
      let asterisks = '';
      for (let j = 1; j <= i; j++) {
         asterisks += '*';
      }
      console.log(asterisks);
   }
}

console.log("Testing drawTriangle()...");

// Test drawTriangle() with different arguments
console.log("\nTriangle size 4:");
drawTriangle(4);

console.log("\nTriangle size 1:");
drawTriangle(1);

console.log("\nTriangle size 7:");
drawTriangle(7);
