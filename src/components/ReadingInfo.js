import React from 'react';

const Info = ( props ) => {

    const items = props.items;

    const booksCounter = () => {
        const books = [];
        for ( let i = 0; i < items.length; i++ ) {
            books.push( items[i].collection.length );
        }

        return books.reduce((prev, item) => prev + item, 0);
    }

    const mostReadable = () => {
        const collectionSize = items.map((a) => a.collection.length)
        const highestAmount = Math.max(...collectionSize);
        const highestShots = items.filter(i => i.collection.length === highestAmount);

        return highestShots[0].author;
    }

    const byYears = () => {

        const collection = items.map((a) => a.collection);

        const rangeYears = collection.reduce( (prev, item) => {

            item.forEach(e => {
                prev.push( e.year )
            });

            return prev;
        }, []);

        console.log( rangeYears );

        return [Math.min(...rangeYears), Math.max(...rangeYears)];
    }

	return (
		<div className="info">
            <div>
                <div>Авторов: {items.length}</div>
                <div>Книг: {booksCounter()}</div>
                <div>Самый читаемый: {mostReadable()}</div>
            </div>
            <div>
                <div>По годам: {byYears()[0]} - {byYears()[1]} </div>
            </div>
		</div>
	);
};

export default Info;