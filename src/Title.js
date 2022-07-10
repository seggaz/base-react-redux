import React from 'react';
import { useDispatch, useSelector } from 'react-redux/es/exports';
import { inputText } from './redux/actions';

const Title = (props) => {
	const text = useSelector(state => {
		const { inputReduser } = state;
		return inputReduser.text;
	})
	const dispatch = useDispatch();

	const handleChange = (e) => {
		dispatch(inputText(e.target.value))
	}
	
	return (
		<div className='card-title'>
			<div className='card-title-top'>
				<input type='text' onChange={handleChange} />
			</div>
			<p>{text}</p>
		</div>
	);
};

export default Title;