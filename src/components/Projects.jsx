import React from 'react'
import Logo from './z.png';

const Projects = () => {
	return(
		<div className='flex m-5 text-center items-center'>
			<img src={Logo} alt='logo' className='flex-auto w-[10px]'/>
			<button className='flex-auto w-20 h-10 m-1 bg-blue-900 text-white hover:bg-green-700 hover:rounded-xl duration-300'>Hello</button>
			<button className='flex-auto w-20 h-10 m-1 bg-blue-900 text-white hover:bg-green-700 hover:rounded-xl duration-300'>Holla</button>
			<button className='flex-auto w-20 h-10 m-1 bg-blue-900 text-white hover:bg-green-700 hover:rounded-xl duration-300'>Bonjure</button>
			<button className='flex-auto w-20 h-10 m-1 bg-blue-900 text-white hover:bg-green-700 hover:rounded-xl duration-300'>Nihao</button>
		</div>
	);
}

export default Projects;