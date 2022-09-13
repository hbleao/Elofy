import React from  'react';
import { Header } from 'components';
import type { NextPage } from 'next';
import { links } from ' contants/components';


const Contact: NextPage = () => {

  return (
    <main>
      <Header links={links} />

      <h1>Contact</h1>
    </main>
  )
}

export default Contact;
