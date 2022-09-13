import type { NextPage } from 'next'
import { useEffect } from 'react';

import * as S from 'styles/home/styles';
import { checkPalindromo } from 'utils/palindromo';

const Home: NextPage = () => {
  useEffect(() => {
    checkPalindromo('henrique');
  }, [])

  return (
    <S.Container>
      <p>Let`s Code</p>
    </S.Container>

  )
}



export default Home
