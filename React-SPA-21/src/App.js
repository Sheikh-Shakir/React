import { Routes, Route } from 'react-router-dom';
import AllMeetupsPage from './pages/AllMeetups';
import NewMeetupPage from './pages/NewMeetup';
import FavouritesPage from './pages/Favourites';
import React from 'react';
import Layout from './components/layout/Layout';
function App() {
  //Loaclhost:3000/


  return (

    <Layout>
      <Routes>
        <Route path='/' exact element={<AllMeetupsPage />} />
        <Route path='/new-meetup' element={<NewMeetupPage />} />
        <Route path='/favourites' element={<FavouritesPage />} />
      </Routes>
    </Layout>
  );
}

export default App;
