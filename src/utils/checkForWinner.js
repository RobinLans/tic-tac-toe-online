// CHECK IF THERE IS A WINNER
/*Winning combinations: 
    [1,2,3]
    [4,5,6]
    [7,8,9]
    [1,4,7]
    [2,5,8]
    [3,6,9]
    [1,5,9]
    [3,5,7]*/

export function checkIfWin(playerArr) {
    if (
        playerArr.includes("1") &&
        playerArr.includes("2") &&
        playerArr.includes("3")
    )
        return true;
    if (
        playerArr.includes("4") &&
        playerArr.includes("5") &&
        playerArr.includes("6")
    )
        return true;
    if (
        playerArr.includes("7") &&
        playerArr.includes("8") &&
        playerArr.includes("9")
    )
        return true;
    if (
        playerArr.includes("1") &&
        playerArr.includes("4") &&
        playerArr.includes("7")
    )
        return true;
    if (
        playerArr.includes("2") &&
        playerArr.includes("5") &&
        playerArr.includes("8")
    )
        return true;
    if (
        playerArr.includes("3") &&
        playerArr.includes("6") &&
        playerArr.includes("9")
    )
        return true;
    if (
        playerArr.includes("1") &&
        playerArr.includes("5") &&
        playerArr.includes("9")
    )
        return true;
    if (
        playerArr.includes("3") &&
        playerArr.includes("5") &&
        playerArr.includes("7")
    )
        return true;

    return false;
}
