const [addNums, addManyNums] = require("./phase-1");

function addNums10Timing(increment) {
  // Copy your `addNums10` code here

  // Then, add timing code

  // Your code here
  let results = [];

  for(let i=1; i<=10;i++){
    console.time(`Time for addNums with n = ${i * increment}`);
    const result = addNums(i*increment);
    results.push(result);
    console.timeEnd(`Time for addNums with n = ${i*increment}`);
  }

  console.time('Total time for addNums10Timing')

  return results;

}


function addManyNums10Timing(increment) {
// Copy your `addManyNums10` code here
// Then, add timing code

  // Your code here
  const results = [];

  for(let i=1; i<=10; i++){
    console.time(`Time for addManyNums10 at n=${i*increment}`);
    const result = addManyNums(i*increment);
    results.push(result);
    console.timeEnd(`Time for addManyNums10 at n=${i*increment}`);

  }
  console.time('Total time for addManyNums10')

  return results;

}


n = 1000000
console.log(`addNums(${n}): `);
addNums10Timing(1000000);

console.log("\n***********\n");

n = 1000
console.log(`addManyNums(${n}): `);
addManyNums10Timing(5000);
