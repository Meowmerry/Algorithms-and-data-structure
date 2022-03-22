/* 
Write a function to find the longest common prefix string amongst an array of strings.
If there is no common prefix, return an empty string "".
*/
var longestCommonPrefix = function (strs) {
    let result = "";
    let count = 0;
    for (let i = 0; i < strs.length; i += 1) {
        const curStr = strs[i]
        for (let j = 0; j < curStr.length; j += 1) {
            const letter = curStr[j]
            if (curStr.includes(letter)) {
                console.log('str', letter)

            }
        }
    }
    return result;
};


console.log(longestCommonPrefix(["flower", "flow", "flight"])) // 'fl

var longestCommonPrefix = function (strs) {
    return strs.slice(1).reduce((cur, res) => {
        let cnt = 0;
        while (res?.[cnt] && res?.[cnt] === cur?.[cnt]) cnt++;
        return res.substring(0, cnt);
    }, strs[0]);
};