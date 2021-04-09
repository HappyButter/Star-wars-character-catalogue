import React, { lazy, Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';

import { Header, Loader } from 'components';
import { GlobalStyle, Main, Page } from 'Layout.css';

const Home = lazy(() => import('views/Home'));
const CharactersCatalogue = lazy(() => import('views/CharactersCatalogue'));

const App = () => (
  <Page>
    <GlobalStyle />
    <Header />
    <Main>
      <Suspense fallback={<Loader />}>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/characters" component={CharactersCatalogue} />
        </Switch>
      </Suspense>
    </Main>
  </Page>
);

export default App;
