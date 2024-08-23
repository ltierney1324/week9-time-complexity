const [addNums, addManyNums] = require("./phase-1");

// Runs `addNums` in 10 increasing increments
function addNums10(increment) {
  // Fill this in
  let results = [];

  for(let i=1; i<=10;i++){
    const result = addNums(i*increment);
    results.push(result);
  }

  return results;

}

// Runs `addManyNums` in 10 increasing increments
function addManyNums10(increment) {
  // Fill this in

  const results = [];

  for(let i=1; i<=10; i++){
    const result = addManyNums(i*increment);
    results.push(result);
  }

  return results;

}

module.exports = [addNums10, addManyNums10];
