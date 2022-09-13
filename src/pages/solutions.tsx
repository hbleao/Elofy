import React from  'react';
import { Header } from 'components';
import type { NextPage } from 'next';
import { links } from ' contants/components';


const Solutions: NextPage = () => {

  return (
    <main>
      <Header links={links} />

      <h1>Solutions</h1>
    </main>
  )
}

export default Solutions;
