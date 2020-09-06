module.exports = function check(str, bracketsConfig) {
    let openBracketsArray = []
    let closedBracketsArray = [];
    bracketsConfig.forEach((x) => {
        openBracketsArray.push(x[0]);
        closedBracketsArray.push(x[1]);
    })
    let arrayForCheck = [];
    for (let i of str) {
        if (openBracketsArray.indexOf(i) !== -1) {
            if (closedBracketsArray.indexOf(i) !== -1 && arrayForCheck[arrayForCheck.length - 1] === i) {
                arrayForCheck.pop();
            } else {
                arrayForCheck.push(i);
            }
            continue
        }
        if (arrayForCheck.length > 0 && arrayForCheck[arrayForCheck.length - 1] === openBracketsArray[closedBracketsArray.indexOf(i)]) {
            arrayForCheck.pop();
            continue;
        }
        return false;
    }
    return arrayForCheck.length === 0;
}
