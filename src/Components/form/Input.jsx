import React from 'react';

function Input({type, label, name, erro, reg, ...props}) {
	return (
		<div className='mb-4' >
			<label className='text-md block pb-2' htmlFor={name} >{label}</label>
			<input 
				type={type} 
				name={name}
				id={name}
				className='text-md block bg-gray-200 p-3 border border-gray-200 rounded-md w-full transition focus:outline-0 focus:border-[#fb1] focus:bg-white focus:shadow-[0_0_0_3px_#fea] hover:outline-0 hover:border-[#fb1] hover:bg-white hover:shadow-[0_0_0_3px_#fea] '
				{...reg(name)}
				{...props} />
			<p className='text-sm text-[#f31] mt-1' >{erro}</p>
		</div>
	)
}

export default Input;