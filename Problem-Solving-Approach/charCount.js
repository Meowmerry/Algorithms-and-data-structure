//Write a function which takes in a string and returns counts of each character in the string.
function charCount(string) {
    string = string.replace(/\s/g, '')
    // make object to return at end
    const object = {}
    // loop over string, for each character...
    for (let i = 0; i < string.length; i += 1) {
        const char = string[i].toLowerCase()
        // if the char is a number/letter AND is a key in object, add one to count
        // if (/[a-z0-9]/.test(char)) { //  /^\S*$/
        if (object[char] > 0) {
            object[char]++;
            // if the char is a number/letter AND not a in object, add it to object and set value to 1;
        } else {
            object[char] = 1
        }
        // if character is something ele (space, period, etc) dont' do anything.
        // }

    }
    // return object at end
    return object;
}
console.log(charCount('hello 1 H E E&*'))