const noteAdd = (text, id) => {
	return {
		type: 'NOTES_ADD',
		payload: { text, id },
	};
};
const textareaCanged = (text) => {
	return {
		type: 'TEXTAREA_CHANGED',
		payload: text,
	};
};
const onNoteEdit = (id) => {
	return {
		type: 'ON_NOTE_EDIT',
		payload: id,
	};
};

const onNoteDelete = (id) => {
	return {
		type: 'ON_NOTE_DELETE',
		payload: id,
	};
};
const onTermChange = (text) => {
	return {
		type: 'ON_TERM_CHANGE',
		payload: text,
	};
};

export { noteAdd, textareaCanged, onNoteEdit, onNoteDelete, onTermChange };
