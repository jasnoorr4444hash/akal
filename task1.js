const words = ["apple", "banana", "kiwi", "strawberry", "grape"];
let longest = " ";
for (let word of words) {
    if (word.length > longest.length) {
        longest = word;
    }
}
console.log(longest);

let vowels = "aeiou";
const user = {
    name: "Harsimran",
    city: "Chandigarh",
    role: "Developer"
};
let vowel = 0;
for (let key in user) {
    let value = user[key];
    if (typeof value === "string") {
        value = value.toLowerCase();
        for (let ch of value) {
            if (vowels.includes(ch)) {
                vowel++;
            }
        }

    }
}
console.log(vowel);
const nums = [4, 3, 2, 7, 8, 2, 3, 1];
let duplicates = [];

for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
        if (nums[i] === nums[j]) {
            for (let k = 0; k < duplicates.length; k++) {
                if (duplicates[k] === nums[i]) {
                    let duplicated = false;
                    duplicated = true;
                }
            }

               
                duplicates.push(nums[i]);
            
        }
    }
}

console.log(duplicates);
const str="programming";
let freguency={};
for(let ch of str ){
    if(freguency[ch]){
        freguency[ch]++;
    }else{
        freguency[ch]=1;
    }
}
    
    console.log(freguency);
 const scores={
    math:78,
    physics:92,
    chemistry:88,
    english:92
 };
 let score=" ";
 for( let key in scores){
    let value=scores[key];
    if(typeof value === "string"){
       
        


    
       
    }
 }

    console.log(score);
 



