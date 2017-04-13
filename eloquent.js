var min = function(x, y) {
    if (x < y) {
        return x
    } else if (y < x) {
        return y
    }
}

var isEven = function(num) {

    var str = num.toString();
    var strLastDigit = str.charAt(str.length - 1);
    var intLastDigit = parseInt(strLastDigit);

    if (intLastDigit === 0) {
        // number is even
        return true;
    } else if (intLastDigit === 1) {
        // number is odd
        return false;
    } else if ((intLastDigit !== 0) || (intLastDigit !== 1)) {
        return isEven(intLastDigit - 2);
    }

}

function countBs(str) {
    var total = 0;
    for (var i = 0; i < str.length; i++) {
        if (str.charAt(i) === "B") {
            total += 1;
        }
    }
    return total;
}

function countChar(str, char) {
    var total = 0;
    for (var i = 0; i < str.length; i++) {
        if (str.charAt(i) === char) {
            total += 1;
        }
    }
    return total;
}
