import React from 'react';
import { useState, useEffect } from 'react';

import Years from './Info/Years';
import Countries from './Info/Countries';

const Info = ( props ) => {

	const items = props.items;
	const [showYear, setshowYear] = useState(false);
	const [showCountry, setshowCountries] = useState(false);

	useEffect(() => {
		if (showYear) {
			document.body.dataset.years = "show";
		} else {
			document.body.dataset.years = "hide";
		}
		if (showCountry) {
			document.body.dataset.country = "show";
		} else {
			document.body.dataset.country = "hide";
		}
	}, [showYear], [showCountry]);


	const booksCounter = () => {
		const books = [];
		for ( let i = 0; i < items.length; i++ ) {
			books.push( items[i].collection.length );
		}

		return books.reduce((prev, item) => prev + item, 0);
	}

	const mostReadable = () => {
		const collectionSize = items.map((a) => a.collection.length)
		const maxSize = Math.max(...collectionSize);
		const maxItem = items.filter(i => i.collection.length === maxSize);

		return maxItem[0].author;
	}

	const yearRange = () => {
		const collection = items.map((a) => a.collection);

		const list = collection.reduce( (prev, item) => {
			item.forEach(e => {
				prev.push( e.year )
			});
			return prev;
		}, []);

		return [Math.min(...list), Math.max(...list)]
	}

	const showCountries = () => {
		// console.log( 'click by countries' )
	}

	return (
		<div className="info">
			<div className="info__header">
				<ul>
					<li>Авторов: {items.length}</li>
					<li>Книг: {booksCounter()}</li>
					<li>Самый читаемый: {mostReadable()}</li>
				</ul>
				<ul>
					<li><span onClick={() => setshowYear(!showYear)}>Книги по годам: {yearRange()[0]} - {yearRange()[1]}</span></li>
					<li><span onClick={showCountries()}>Авторы по странам</span></li>
				</ul>
			</div>
			<div className="info__graph">
				<Years items={items} />
			</div>
			<div className="info__countries">
				<Countries items={items} />
			</div>
		</div>
	);
};

export default Info;