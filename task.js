
let nums = [3, 6, 8, 9, 2, 1, 6];
function duplicate(nums) {

    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] === nums[j]) {
                return true;
            }
        }

    }
    return false;
}
console.log(duplicate(nums));

function intersection(nums1, nums2) {
    let output = [];
    for (let num of nums1) {
        if (nums2.includes(num) && !output.includes(num)) {
            output.push(num)

        }

    }
    return output;
}
console.log(intersection([1, 2, 3, 4],[3, 4, 5, 6]));

function rotate() {
    
}




