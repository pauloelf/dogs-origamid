import React from 'react';
import { ReactComponent as LogoFooter } from '../../assets/svgs/dogs-footer.svg';

const Footer = () => {
  return (
    <footer className='flex flex-col items-center pt-12 gap-4 h-40 bg-[#fb1] text-[#764701]' >
      <LogoFooter />
      <p>Dogs. Alguns direitos reservados.</p>
    </footer>
  )
}

export default Footer;