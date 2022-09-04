import React, { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Row from '../Row';
import { selectCharacter, setCharacter } from '../../slices/characterSlice';

import styles from './Home.module.scss';

const Home = () => {
  const dispatch = useDispatch();

  const character = useSelector(selectCharacter);
  const inputRef = useRef();

  function download(data, filename, type) {
    var file = new Blob([data], { type: type });
    var a = document.createElement('a'),
      url = URL.createObjectURL(file);
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    setTimeout(function () {
      document.body.removeChild(a);
      window.URL.revokeObjectURL(url);
    }, 0);
  }

  const onChangeInput = async () => {
    const text = await inputRef.current.files[0].text();
    const data = JSON.parse(text);
    dispatch(setCharacter(data));
  };
  const onClickExport = () => {
    download(JSON.stringify(character), 'character.json', 'type/text');
  };

  return (
    <div className={styles.home}>
      <div className={styles.home__info}>
        <h1>Your character params</h1>
        <div className={styles.home__table}>
          <Row first={'Name'} second={character.name} />
          <Row first={'Strong'} second={character.strong} />
          <Row first={'Skill'} second={character.skill} />
          <Row first={'Intelligence'} second={character.intelligence} />
          <Row first={'Charisma'} second={character.charisma} />
          <Row first={'Life force'} second={character.lifeForce} />
          <Row first={'Dodging'} second={character.dodging} />
          <Row first={'Energy'} second={character.energy} />
        </div>
      </div>
      <div className={styles.home__info}>
        <h1>Your character skills</h1>
        <div className={styles.home__table}>
          <Row first={'Attack'} second={character.attack.level} />
          <Row first={'Stealth'} second={character.stealth.level} />
          <Row first={'Archery'} second={character.archery.level} />
          <Row first={'Learnabillity'} second={character.learnabillity.level} />
          <Row first={'Survival'} second={character.survival.level} />
          <Row first={'Medical'} second={character.medical.level} />
          <Row first={'Intimidation'} second={character.intimidation.level} />
          <Row first={'Insight'} second={character.insight.level} />
          <Row first={'Appearance'} second={character.appearance.level} />
          <Row first={'Manipulation'} second={character.manipulation.level} />
        </div>
      </div>
      <div className={styles.home__buttons}>
        <input
          ref={inputRef}
          onChange={onChangeInput}
          type="file"
          name="file"
          id="file"
          accept=".json"
          className={styles.inputfile}
        />
        <label className={styles.home__button} htmlFor="file">
          Import
        </label>
        <button onClick={onClickExport} className={styles.home__button}>
          Export
        </button>
      </div>
    </div>
  );
};

export default Home;
