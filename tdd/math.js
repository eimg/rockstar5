function add(nums) {
    let result = 0;
    for(i in nums) {
        result += nums[i];
    }

    return result;
}

function div(a, b) {
    if(b === 0) return "Error";
    return a / b;
}

module.exports = { add, div };
