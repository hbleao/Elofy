import { links } from ' contants/components';
import { Header } from 'components';
import type { NextPage } from 'next';
import { useEffect } from 'react';

import * as S from 'styles/home/styles';
import { checkPalindromo } from 'utils/palindromo';

const Home: NextPage = () => {
  useEffect(() => {
    checkPalindromo('henrique');
  }, []);



  return (
    <S.Container>
      <Header links={links} />
      <p>Let`s Code</p>
    </S.Container>

  )
}



export default Home;
