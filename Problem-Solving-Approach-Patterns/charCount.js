//Write a function which takes in a string and returns counts of each character in the string.
function charCount(string) {
    const object = {}
    // loop over string, for each character...
    for (let i = 0; i < string.length; i += 1) {
        const char = string[i].toLowerCase()
        // if the char is a number/letter AND is a key in object, add one to count
        if (/[a-z0-9]/.test(char)) { //  /^\S*$/
            if (object[char] > 0) {
                object[char]++;
                // if the char is a number/letter AND not a in object, add it to object and set value to 1;
            } else {
                object[char] = 1
            }
            // if character is something ele (space, period, etc) dont' do anything.
        }
    }
    // return object at end
    return object;
}
console.log(charCount('hello 1 H E E&*'))


function charCount(string) {
    string = string.toLowerCase()
    const object = {}
    for (let char of string) {
        if (isAlphaNumeric(char)) {
            object[char] = ++object[char] || 1;
        }
    }
    return object;
}
console.log(charCount('hello 1 H E E&*'))

// create a function that check Alphabit 
function isAlphaNumeric(string) {
    let char = string.charCodeAt(0)
    if (!(char > 47 && char < 58) && // numeric ( 0 - 9)
        !(char > 64 && char < 91) && // upper alpha ( A-Z)
        !(char > 96 && char < 123)) { // lower alpha (a - z)
        return false;
    }
    return true;
}