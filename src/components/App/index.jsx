import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ChangePerson from '../ChangePerson';

import Header from '../Header';
import Home from '../Home';
import { TrainingSkills } from '../TrainingSkills';
import styles from './App.module.scss';

const App = () => {
  return (
    <div className={styles.root}>
      <div className={styles.content}>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/training" element={<TrainingSkills />} />
          <Route path="/parameters" element={<ChangePerson />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
