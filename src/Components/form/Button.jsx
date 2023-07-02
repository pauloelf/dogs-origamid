import React from 'react';

function Button({children, ...props}) {
	return (
		<button className='text-md font-primary text-[#764701] bg-[#fb1] rounded-md py-3 px-5 w-32 focus:shadow-[0_0_0_3px_#fea,0_0_0_4px_#fb1] hover:shadow-[0_0_0_3px_#fea,0_0_0_4px_#fb1] focus:outline-0 disabled:outline-1 disabled:cursor-wait' {...props} >{children}</button>
	)
}

export default Button;