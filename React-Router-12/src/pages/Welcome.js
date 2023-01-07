import React from "react";
import { Routes, Route } from 'react-router-dom'

const Welcome = () => {
	return <section>
		<h1>The Welcome Page</h1>
		<Routes>
			<Route path='/welcome/new-user'>
				<p>Welcome New User</p>
			</Route>
		</Routes>
	</section>
}
export default Welcome;