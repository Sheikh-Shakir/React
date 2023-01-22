import { useNavigate } from "react-router-dom"
import NewMeetupForm from '../components/meetups/NewMeetupForm';

function NewMeetupPage() {
	const navigate = useNavigate();
	const onAddMeetupHandler = (meetupData) => {
		fetch('https://react-http-baf9b-default-rtdb.firebaseio.com/meetups.json',
			{
				method: 'POST',
				body: JSON.stringify(meetupData),
				headers: {
					'Context-Type': 'application/json'
				}
			}
		).then(() => {
			navigate('/');
		})
	};
	return (
		<section>
			<div>Add New Meetup </div>
			<NewMeetupForm onAddMeetup={onAddMeetupHandler} />
		</section>

	);
};
export default NewMeetupPage;