import { createContext, useState } from "react";

const FavouritesContext = createContext({
	favourites: [],
	totalFavourites: 0,
	addFavourite: (favouriteMeetup) => { },
	removeFavourite: (meetupId) => { },
	itemsFavourite: (meetupId) => { }

});

export function FavouritesContextProvider(props) {
	const [userFavourites, setUSerFavourites] = useState([]);

	function addFavouriteHandler(favouriteMeetup) {
		setUSerFavourites((prevUserFavourites) => {
			return prevUserFavourites.concat(favouriteMeetup);
		})
	};
	function removeFavouriteHandler(meetupId) {
		setUSerFavourites(prevUserFavourites => {
			return prevUserFavourites.filter(meetup => meetup.id !== meetupId);
		});
	};
	function itemsFavouriteHandler(meetupId) {
		return userFavourites.some(meetup => meetup.id === meetupId)
	};

	const context = {
		favourites: userFavourites,
		totalFavourites: userFavourites.length,
		addFavourite: addFavouriteHandler,
		removeFavourite: removeFavouriteHandler,
		itemsFavourite: itemsFavouriteHandler
	}
	return <FavouritesContext.Provider value={context}>
		{props.children}
	</FavouritesContext.Provider>
};
export default FavouritesContext;