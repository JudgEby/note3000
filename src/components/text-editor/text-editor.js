import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';

import './text-editor.css';

const TextEditor = ({
	textareaValue,
	noteAdd,
	textareaCanged,
	modifiedNoteId,
}) => {
	return (
		<textarea
			cols='70'
			rows='10'
			placeholder='Введите текст новой записи'
			value={textareaValue}
			onChange={(e) => textareaCanged(e.target.value)}
			onBlur={(e) => {
				if (e.target.value) noteAdd(e.target.value, modifiedNoteId);
			}}
		></textarea>
	);
};

const mapStateToProps = ({ textareaValue, modifiedNoteId }) => {
	return { textareaValue, modifiedNoteId };
};

export default connect(mapStateToProps, actions)(TextEditor);
