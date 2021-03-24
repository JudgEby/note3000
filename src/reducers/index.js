const initialState = {
	notes: [],
	textareaValue: '',
	modifiedNoteId: null,
	term: '',
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case 'NOTES_ADD':
			if (action.payload.id != null) {
				return {
					...state,
					textareaValue: '',
					notes: [
						...state.notes.slice(0, action.payload.id),
						action.payload.text,
						...state.notes.slice(action.payload.id + 1),
					],
					modifiedNoteId: null,
				};
			}
			return {
				...state,
				textareaValue: '',
				notes: [...state.notes, action.payload.text],
				modifiedNoteId: null,
			};

		case 'TEXTAREA_CHANGED':
			return {
				...state,
				textareaValue: action.payload,
			};
		case 'ON_NOTE_EDIT':
			return {
				...state,
				textareaValue: state.notes[action.payload],
				modifiedNoteId: action.payload,
			};
		case 'ON_NOTE_DELETE':
			return {
				...state,
				textareaValue: '',
				notes: [
					...state.notes.slice(0, action.payload),
					...state.notes.slice(action.payload + 1),
				],
				modifiedNoteId: null,
			};
		case 'ON_TERM_CHANGE':
			return {
				...state,
				term: action.payload,
			};

		default:
			return state;
	}
};

export default reducer;
