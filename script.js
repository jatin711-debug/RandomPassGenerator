const characterAmountRange = document.getElementById('characterAmountRange');
const characterAmountNumber = document.getElementById('characterAmountNumber');
const passwordGeneratorForm = document.getElementById('passwordGeneratorForm');
const includeUppercaseElement = document.getElementById('includeUppercase')
const includeNumbersElement = document.getElementById('includeNumbers')
const includeSymbolsElement = document.getElementById('includeSymbols')
const passwordDisplay = document.getElementById('passwordDisplay')
const UPPERCASE_CHAR_CODES = arrayFromLowtoHigh(65,90);
const LOWERCASE_CHAR_CODES = arrayFromLowtoHigh(97,122);
const NUMBER_CHAR_CODES = arrayFromLowtoHigh(48,57);
const SYMBOLS_CHAR_CODES = arrayFromLowtoHigh(33,47).concat(arrayFromLowtoHigh(58,64)).concat(arrayFromLowtoHigh(91,96)).concat(arrayFromLowtoHigh(123,126));

characterAmountNumber.addEventListener('input', syncChatacterAmount)
characterAmountRange.addEventListener('input', syncChatacterAmount)
passwordGeneratorForm.addEventListener('submit', e=>{
    e.preventDefault();
    const characterAmount = characterAmountNumber.value
    const includeUppercase = includeUppercaseElement.checked
    const includeNumbers = includeNumbersElement.checked
    const includeSymbols = includeSymbolsElement.checked
    const password = generatePassword(characterAmount,includeUppercase,includeNumbers,includeSymbols)
    passwordDisplay.innerText = password
})

function generatePassword(characterAmount, includeUppercase, includeNumbers, includeSymbols){
    let charCodes = LOWERCASE_CHAR_CODES
    if(includeUppercase) charCodes = charCodes.concat(UPPERCASE_CHAR_CODES)
    if(includeNumbers) charCodes = charCodes.concat(NUMBER_CHAR_CODES)
    if(includeSymbols) charCodes = charCodes.concat(SYMBOLS_CHAR_CODES)

    const passwordCharacters = []
    for(let i = 0; i < characterAmount; i++){
        const characterCodes = charCodes[Math.floor(Math.random() * charCodes.length)]
        passwordCharacters.push(String.fromCharCode(characterCodes))
    }
    return passwordCharacters.join('')
}

function arrayFromLowtoHigh(low,high){
const array = []
for(let i = low; i <= high ; i++){
    array.push(i)
    }
return array
}

function syncChatacterAmount(e){
const value = e.target.value
characterAmountNumber.value = value
characterAmountRange.value = value
}