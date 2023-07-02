import React from 'react';
import {Outlet} from 'react-router-dom';

const Login = () => {
  return (
    <section className='grid grid-cols-2 h-screen' >
      <div>
        Banner
      </div>
      <Outlet/>
    </section>
  );
};

export default Login;
