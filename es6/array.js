var nums = [1, 2, 3, 4, 5];

var nums2 = nums.map(function(i) {
    return i * 2;
});

var nums3 = nums.filter(function(i) {
    return i % 2;
});

console.log(nums);
console.log(nums2);
console.log(nums3);
