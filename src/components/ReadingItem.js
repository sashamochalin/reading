import React from 'react';
import Collection from './ReadingCollection';

const Item = ( props ) => {

	return (
		<div className="i">
            <h4 className="title" data-country={props.country.toLowerCase()}>
                {props.author}
            </h4>
            <div className="collection">
                <Collection collection={props.collection} />
            </div>
		</div>
	);
};

export default Item;