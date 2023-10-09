import React from 'react';
import Item from './ReadingItem';

const List = ( props ) => {
	return (
		<div className="list">
			{(
				props.items.map( (e, i) => {
					return (
						<Item key={i} 
							author={e.author}
							country={e.country}
							collection={e.collection} />
					)
				})
			)}
		</div>
	);
};

export default List;