module.exports = function check(str, bracketsConfig) {
    let openBrackets = []
    let closeBrackets = [];
    bracketsConfig.forEach((x) => {
        openBrackets.push(x[0]);
        closeBrackets.push(x[1]);
    })
    let result = str;
    for (let i = 0; i < result.length - 1; i += 1) {
        if (openBrackets.indexOf(result[i]) === closeBrackets.indexOf(result[i + 1])
            && openBrackets.indexOf(result[i]) !== -1) {
            result = result.slice(0, i)
                .concat(result.slice(i + 2));
            i-=2;
        }
    }
    return result.length === 0;
}
