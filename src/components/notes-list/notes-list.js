import React from 'react';
import NoteListItem from '../notes-list-item';
import { connect } from 'react-redux';
import * as actions from '../../actions';

import './notes-list.css';

const isSearchNotes = (notes, term) => {
	if (term.length === 0) {
		return notes;
	}

	return notes.filter(
		(note) => note.toLowerCase().indexOf(term.toLowerCase()) > -1
	);
};

const NoteList = ({ notes, term, onNoteEdit, onNoteDelete }) => {
	if (notes[0]) {
		const filteredNotes = isSearchNotes(notes, term);
		if (!filteredNotes[0]) {
			return (
				<div>
					По запросу <span className='term'>{term}</span> не найдено ни одного
					совпадения
				</div>
			);
		}
		return filteredNotes.map((note, idx) => {
			return (
				<NoteListItem
					key={idx}
					onNoteEdit={onNoteEdit}
					onNoteDelete={onNoteDelete}
					id={idx}
					text={note}
				/>
			);
		});
	}
	return <div>Вы ещё не создали ни одной записи</div>;
};

const mapStateToProps = ({ notes, term }) => {
	return { notes, term };
};

export default connect(mapStateToProps, actions)(NoteList);
