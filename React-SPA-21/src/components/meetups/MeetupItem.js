import { useContext } from 'react';
import FavouritesContext from '../../store/favourites-context';
import Card from '../ui/Card';
import classes from './Meetupitem.module.css';
function MeetupItem(props) {
	const favouritesCtx = useContext(FavouritesContext);

	const itemIsFavourite = favouritesCtx.itemsFavourite(props.id)
	function toggleFavouriteStatusHandler() {
		if (itemIsFavourite) {
			favouritesCtx.removeFavourite(props.id)
		} else {
			favouritesCtx.addFavourite({
				id: props.id,
				title: props.title,
				description: props.description,
				image: props.image,
				address: props.address
			});
		};
	};
	return (
		<Card>
			<li className={classes.item}>
				<div className={classes.image}>
					<img src={props.image} alt={props.title}></img>
				</div>
				<div className={classes.content}>
					<h3>{props.title}</h3>
					<address>{props.address}</address>
					<p>{props.description}</p>
				</div>
				<div className={classes.actions}>
					<button onClick={toggleFavouriteStatusHandler}>{itemIsFavourite ? 'Remove from Favourites' : 'Add to Favourites'}</button>
				</div>
			</li>
		</Card>
	)
};
export default MeetupItem;