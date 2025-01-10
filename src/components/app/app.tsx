import { ConstructorPage, Feed, NotFound404 } from '@pages';
import '../../index.css';
import styles from './app.module.css';
import { Route, Routes } from 'react-router-dom';

import { AppHeader } from '@components';

const App = () => (
  <div className={styles.app}>
    <AppHeader />
    <Routes>
      <Route path={'/'} element={<ConstructorPage />} />
      <Route path={'/feed'} element={<Feed />} />
      <Route path={'*'} element={<NotFound404 />} />
    </Routes>
  </div>
);

export default App;
