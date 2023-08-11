import React from 'react';

const Collection = ( props ) => {

	return (
		<div>
			{(
				props.collection.map( (e, i) => {
					return (
						<div key={i} className="book">
							<span className="numb">{i+1}.</span>{e.title} <span className="year">({e.year})</span>
						</div>
					)
				})
			)}
		</div>
	);
};

export default Collection;