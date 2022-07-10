import React from 'react';
import { connect } from 'react-redux';
import { incrementLikes, decrementLikes } from './redux/actions';

const Likes = (props) => {
	return (
		<div className='button-controls'>
			<button onClick={props.onIncrementsLikes}>❤ {props.likes}</button>
			<button onClick={props.onDecrementsLikes}>Dislike</button>
		</div>
	);
};

function mapStateToProps(state) {
	const { likesReduser } = state;
	return {
		likes: likesReduser.likes
	}
}

function mapDispatchToProps(dispatch) {
	return {
		onIncrementsLikes: () => {
			return dispatch(incrementLikes());
		},
		onDecrementsLikes: () => {
			return dispatch(decrementLikes());
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Likes);