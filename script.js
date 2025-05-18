const inputEl = document.getElementById("number");
const convertBtn = document.getElementById("convert-btn");
const outputEl = document.getElementById("output");

const convertToRoman = (num) => {
    const romanMap = [
        { value: 1000, numeral: "M" },
        { value: 900, numeral: "CM" },
        { value: 500, numeral: "D" },
        { value: 400, numeral: "CD" },
        { value: 100, numeral: "C" },
        { value: 90, numeral: "XC" },
        { value: 50, numeral: "L" },
        { value: 40, numeral: "XL" },
        { value: 10, numeral: "X" },
        { value: 9, numeral: "IX" },
        { value: 5, numeral: "V" },
        { value: 4, numeral: "IV" },
        { value: 1, numeral: "I" }
    ];

    let result = "";

    for (const { value, numeral } of romanMap) {
        while (num >= value) {
            result += numeral;
            num -= value;
        }
    }

    return result;
};

convertBtn.addEventListener("click", () => {
    const number = parseInt(inputEl.value, 10);

    if (isNaN(number) || number === "") {
        outputEl.textContent = "Please enter a valid number";
        return;
    }
    
    if (number < 1) {
        outputEl.textContent = "Please enter a number greater than or equal to 1";
        return;
    }
    
    if (number >= 4000) {
        outputEl.textContent = "Please enter a number less than or equal to 3999";
        return;
    }

    const romanNumeral = convertToRoman(number);
    outputEl.textContent = romanNumeral;
    outputEl.style.display = "block";
});