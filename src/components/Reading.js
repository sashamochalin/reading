import React from 'react';
import data from '../../json.json';
import List from './ReadingList';
import Info from './ReadingInfo';


const App = ( ) => {
	const [items, setItems] = React.useState([]);

	return (
		<div className="reading">
			<Info items={ data.item } />
			<List items={ data.item } />
		</div>
	);
};

export default App;