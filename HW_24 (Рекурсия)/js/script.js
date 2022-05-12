'use strict'

const polindrom = (num) => {

    let steps = 0;

    const polindromNum = (num) => {

       const reversedNum = parseFloat(num.toString().split("").reverse().join(""));

        if (num === reversedNum) {

            return {

                steps,
                result: num
            };

        } else {

            steps += 1;

            return polindromNum(num + reversedNum);
        }

    }

    return polindromNum(num);
}

console.log(polindrom(19));




