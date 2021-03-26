const singleDigits = {
  '0': 'zero',
  '1': 'one',
  '2': 'two',
  '3': 'three',
  '4': 'four',
  '5': 'five',
  '6': 'six',
  '7': 'seven',
  '8': 'eight',
  '9': 'nine'
}

const numbersTenToNineteen = {
  '10': 'ten',
  '11': 'eleven',
  '12': 'twelve',
  '13': 'thirteen',
  '14': 'fourteen',
  '15': 'fifteen',
  '16': 'sixteen',
  '17': 'seventeen',
  '18': 'eighteen',
  '19': 'nineteen'
}

const decimalDigits = {
  '2': 'twenty',
  '3': 'thirty',
  "4": 'fourty',
  '5': 'fifty',
  '6': 'sixty',
  '7': 'seventy',
  '8': 'eighty',
  '9': 'ninety'
}

const magnitudes = {
  0: 'hundred',
  1: 'thousand',
  2: 'million',
  3: 'billion',
  4: 'trillion',
  5: 'quadrillion',
  6: 'quintillion',
  7: 'sextillion'
}
  
const numberSpeller = number => {
  const input = String(number)
  switch (input.length) {
    
}
console.log(numberSpeller(48))
console.log(numberSpeller(8))
console.log(numberSpeller(398))
console.log(numberSpeller(39832))
console.log(numberSpeller(1038)) // take care of 0