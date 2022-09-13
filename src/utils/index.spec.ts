import { checkPalindromo }  from './palindromo';

describe('Utils/CheckPalindromo', () => {
  it('should returns true', () => {
    const value = 'ana';
    const isPalindromo = checkPalindromo(value);

    expect(isPalindromo);
  })
})
