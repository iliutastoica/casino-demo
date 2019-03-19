import React from 'react';
import Card from './Card';

const CardList = ({ games }) => {
    // console.log(games);
    return (
        <div className="gameslist">
            {
                games.map((game, i) => {
                    return (
                        <Card
                            key={i}
                            id={game.calendarEventId}
                            name={game.title}
                            url={game.url}
                            thumb={game.thumbnail}
                            provider={game.vendorID}
                            categories={game.categories}
                            platforms={game.platforms}
                        />
                    );
                })
            }
        </div>
    );
}

export default CardList;