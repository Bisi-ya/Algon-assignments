/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
		id: 1,
		timestamp: 1656076800000,
		price: 10,
		category: 'Food',
		itemName: 'Pizza',
	}
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/


function calculateTotalSpentByCategory(transactions) {
  const results = [];

  transactions.forEach(tx => {
    const categoryIndex = results.findIndex(item => item.category === tx.category);

    if (categoryIndex !== -1) {
      results[categoryIndex].totalSpent += tx.price;
    } else {
      results.push({
        category: tx.category,
        totalSpent: tx.price
      });
    }
  });

  return results;
}
module.exports = calculateTotalSpentByCategory;
const transactions = [
  { category: 'Groceries', price: 50 },
  { category: 'Electronics', price: 200 },
  { category: 'Groceries', price: 30 }
];

console.log(calculateTotalSpentByCategory(transactions));


