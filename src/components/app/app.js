import React from 'react';

import './app.css';

import Header from '../header';
import TextEditor from '../text-editor';
import NoteList from '../notes-list';
import SearchPanel from '../search-panel';

const App = () => {
	return (
		<div className='container app'>
			<Header />
			<div className='row'>
				<div className='col-4 mx-auto mb-3 search-panel d-flex'>
					<SearchPanel />
				</div>
			</div>
			<div className='row'>
				<div className='col-6'>
					<NoteList />
				</div>
				<div className='col-6'>
					<TextEditor />
				</div>
			</div>
		</div>
	);
};

export default App;
