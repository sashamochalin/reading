import React from 'react';

const Years = (props) => {
	const items = props.items;
	const yearList = () => {
		const collection = items.map((a) => a.collection);

		let list = collection.reduce((prev, item) => {
			item.forEach(e => {
				prev.push(e.year)
			});
			return prev;
		}, []);

		return list;
	}

	const yearCollection = () => {
		const yearCollection = yearList();
		const collection = items.map((a) => a.collection);
		const yearArr = [...new Set(yearCollection.sort())];

		let graphCollection = yearArr.reduce((acc, item) => {
			let flatArr = collection.flat().filter(j => j.year === item);
			let itemYear = [item, flatArr.map(j => j.title)];
			acc.push( itemYear );
			return acc;
		}, []);

		return graphCollection.sort();
	}

	const dataCollection = yearCollection();

	return (
		<div className="graph">
			<div className="graph__list">
				{(
					dataCollection.map((e, i) => {
						return (
							<div key={i}
								style={{ height: e[1].length * 20 + 'px', }}
								data-year={e[0]}
								data-count={e[1].length}
								className="graph__item">
								<div className="graph__books">
									{(
										e[1].map((j, k) => {
											return (
												<div key={k} className="graph__book">
													{j}
												</div>
											)
										})
									)}
								</div>
							</div>
						)
					})
				)}
			</div>
		</div>
	);
};

export default Years;