'use strict';

const listItems = document.querySelectorAll('.item');
console.log(`Number of categories: ${listItems.length}`);

listItems.forEach(item => {
  const titleContent = item.querySelector('h2').textContent;
  const itemLength = item.querySelectorAll('ul li');
  console.log(`Category: ${titleContent}, Elements: ${itemLength.length}`);
  
})