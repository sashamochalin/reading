import React from 'react';

const Countries = (props) => {
    const items = props.items;

    const countryList = () => {
        const collection = items.map((a) => a.country);
        const countryArr = [...new Set(collection)];

        let countryCollection = countryArr.sort().reduce((acc, item, index) => {
            let filtered = items.filter(a => a.country == item);
            let itemCountry = [item, filtered];
            acc.push(itemCountry);
            return acc;
        }, [])

        return countryCollection;
    }

    let countryCollection = countryList();

    return (
        <div className="country">
            <div className="country__list">
                {(
                    countryCollection.map((e, i) => {
                        return (
                            <div key={i}
                                data-position={i + 1}
                                className="country__item">
                                <div className="country__item-title" data-country={ e[0].toLowerCase() }>
                                    {e[0]}
                                </div>
                                <div data-count={e[1].length}
                                     className="country__item-bar">
                                        <div style={{ width: e[1].length * 10 + 'px' }}
                                             className="country__item-bar-slug">
                                            {e[1].length}
                                        </div>
                                </div>
                            </div>
                        )
                    })
                )}
            </div>
        </div>
    );
};

export default Countries;