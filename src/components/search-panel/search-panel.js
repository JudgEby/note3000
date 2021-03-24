import React from 'react';

import './search-panel.css';

import { connect } from 'react-redux';
import * as actions from '../../actions';

const SearchPanel = ({ term, onTermChange }) => {
	return (
		<input
			className='form-control search-input'
			placeholder='Введите текст для поиска'
			value={term}
			onChange={(e) => onTermChange(e.target.value)}
		/>
	);
};

const mapStateToProps = ({ term }) => {
	return { term };
};

export default connect(mapStateToProps, actions)(SearchPanel);
