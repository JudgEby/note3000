import React from 'react';
import './notes-list-item.css';

const NotesListItem = ({ text, id, onNoteEdit, onNoteDelete }) => {
	const labelNotmalize = (text) => {
		if (text.length <= 30) {
			return text;
		}
		return text.slice(0, 30) + '...';
	};

	return (
		<div className='note-list-item'>
			<div className='note-list-text' id={id} onClick={() => onNoteEdit(id)}>
				<span className='ordinal'>{id + 1}</span>
				<span className='lebel'>{labelNotmalize(text)}</span>
			</div>
			<button
				type='button'
				className='btn btn-outline-danger btn-sm ml-auto'
				onClick={() => onNoteDelete(id)}
			>
				<i className='fa fa-trash-o fa-2x'></i>
			</button>
		</div>
	);
};

export default NotesListItem;
