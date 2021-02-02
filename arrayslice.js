const nums = [1,2,3,4,5,6,7,8,9];
const part = nums.slice(4, 8);
// console.log(part);

const removed = nums.splice(2, 6);
console.log(removed);
console.log(nums);