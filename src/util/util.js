const highlightText = (str, from, to) => {
    let highlightStrEndPart = `${str.slice(0, to)}</span>${str.slice(to)}`;
    return `${highlightStrEndPart.slice(0, from)}<span class="text-success">${highlightStrEndPart.slice(from)}`
};


// Очень жадный алгоритм, но нужно найти все возможные вложения
const isPalindrome = (str) => {
    for (let i = 0; i < str.length / 2; i++) {
        if (str.charAt(i) !== str.charAt(str.length - (i + 1))) {
            return false;
        }
    }
    return true;
};
// Очень жадный алгоритм, но нужно найти все возможные вложения
// регуляркой исключил числа, но можно добавить
const searchPalindromeInString = (str) => {
    const palindromeObj = {
        originalText: str,
        palindromeText: '',
        position: [0, 0],
        length: 0
    };

    for (let i = 0; i <= str.length - 1; i++) {
        // страшные регулярки для русского языка
        if (!/[\w\u0401\u0451\u0410-\u044f]/.test(str.charAt(i))) {
            continue;
        }
        let startSubPos = i + 3;
        for (let j = startSubPos; j <= str.length - 1; j++) {
            if (!/[[\w\u0401\u0451\u0410-\u044f]/.test(str.charAt(j))) {
                continue;
            }
            let subStr = str.substring(i, j + 1).replace(/[^\w\u0401\u0451\u0410-\u044f]/g, "");
            if (isPalindrome(subStr.toLowerCase())) {
                let palindromeText = str.substring(i, j + 1);
                if (palindromeObj.length < palindromeText.length) {
                    palindromeObj.palindromeText = palindromeText;
                    palindromeObj.position = [i, j + 1];
                    palindromeObj.length = palindromeText.length;
                    palindromeObj.palindromeHighlightText = highlightText(str, i, j + 1)
                }
            }
        }
    }
    return palindromeObj;
};

export const searchPalindromes = (text) => {
    const palindromes = text.split('\n').map((strLine) => {
        return searchPalindromeInString(strLine);
    });

    let bestPalindrome = {};
    palindromes.forEach((palindrome) => {
        if (typeof(bestPalindrome.length) === 'undefined' || palindrome.length > bestPalindrome.length) {
            bestPalindrome = palindrome;
        }
    });

    return {
        palindromes,
        bestPalindrome
    };
};


// const pol1 = "- A man, a plan, a canal: Panama. Test?";
// const pol2 = "- Do geese see God? Others tell a story.";
// console.log(myPalindrome('kazak'))
//console.log(searchPalindromeInString(pol1))
// console.log(myCountPalindromeInString('-ka zak'))