export function checkPalindromo(value: string): boolean {
  const palindromo = [];
  const newArr = value.split('');

  newArr.map((item, index) => {
    const lastString = value.charAt(value.length - index);
    palindromo.push(lastString);
  })

  palindromo.push(value[0]);

  return true;
}

