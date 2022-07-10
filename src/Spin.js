import React from 'react';
import { useSelector } from 'react-redux/es/exports';
import Loader from 'react-loader-spinner';

const Spin = (props) => {
	const spinner = useSelector(state => state.appReduser.loading);
	return (
		<div className='loader-styles'>
			<Loader 
			  type="TailSpin"
			  color="#00BFFF"
			  height={100}
			  width={100}
			  visible={spinner}
			/>
		</div>
	);
};

export default Spin;