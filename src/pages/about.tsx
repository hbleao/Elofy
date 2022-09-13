import React from  'react';
import { Header } from 'components';
import type { NextPage } from 'next';
import { links } from ' contants/components';


const About: NextPage = () => {

  return (
    <main>
      <Header links={links} />

      <h1>About</h1>
    </main>
  )
}

export default About;
