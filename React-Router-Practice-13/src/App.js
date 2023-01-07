
import { Switch, Route, Redirect } from 'react-router-dom';
import React, { Suspense } from 'react';
// import AllQuotes from './Pages/AllQuotes';

// import QuoteDetail from './Pages/QuoteDetail';
import Layout from './components/layout/Layout';
// import NotFound from './Pages/NotFound';
import LoadingSpinner from './components/UI/LoadingSpinner';

const NewQuote = React.lazy(() => import('./Pages/NewQuote'));
const QuoteDetail = React.lazy(() => import('./Pages/QuoteDetail'));
const NotFound = React.lazy(() => import('./Pages/NotFound'));
const AllQuotes = React.lazy(() => import('./Pages/AllQuotes'));
function App() {
  return (
    <Layout>
      <Suspense fallback={<div className='centered'><LoadingSpinner></LoadingSpinner></div>}>
        <Switch>
          <Route path='/' exact>
            <Redirect to='/quotes' />
          </Route>
          <Route path="/quotes" exact>
            <AllQuotes />
          </Route>
          <Route path="/new-quote" exact>
            <NewQuote />
          </Route>
          <Route path="/quotes/:quoteId">
            <QuoteDetail />
          </Route>
          <Route path='*'>
            <NotFound />
          </Route>
        </Switch>
      </Suspense>
    </Layout>

  );
}

export default App;
