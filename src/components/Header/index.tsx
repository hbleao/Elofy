import React from 'react';
import Link from 'next/link'

import * as S from './styles';
import { HeaderProps } from './types';

export const Header = ({
  links
}: HeaderProps) => {

  return (
    <S.Container>
      <S.Logo>
        Elofy
      </S.Logo>
      <S.Nav>
        {links.map((link, index) => (
          <li key={index}>
            <Link href={link.path} >
              <a>
                {link.label}
              </a>
            </Link>
          </li>
        ))}
      </S.Nav>
    </S.Container>
  )
}


