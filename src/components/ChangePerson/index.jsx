import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Row from '../Row';
import AddParameterValue from '../AddParameterValue';
import {
  setName,
  setStrong,
  setSkill,
  setIntelligence,
  setCharisma,
  selectCharacter,
} from '../../slices/characterSlice';

import styles from './ChangePerson.module.scss';

const ChangePerson = () => {
  const dispatch = useDispatch();
  const { name, strong, skill, intelligence, charisma, lifeForce, dodging, energy } =
    useSelector(selectCharacter);

  const onChangeInput = (event) => {
    dispatch(setName(event.target.value));
  };
  const input = <input value={name} onChange={onChangeInput} className={styles.input_name} />;

  return (
    <div className={styles.change_person}>
      <h1>Change parameters to your character</h1>
      <div className={styles.change_person__parameters}>
        <Row first={'Name'} second={input} />
        <Row
          first={'Strong'}
          second={
            <AddParameterValue
              value={strong}
              onClickPlus={() => dispatch(setStrong(strong + 1))}
              onClickMinus={() => dispatch(setStrong(strong - 1))}
            />
          }
        />
        <Row
          first={'Skill'}
          second={
            <AddParameterValue
              value={skill}
              onClickPlus={() => dispatch(setSkill(skill + 1))}
              onClickMinus={() => dispatch(setSkill(skill - 1))}
            />
          }
        />
        <Row
          first={'Intelligence'}
          second={
            <AddParameterValue
              value={intelligence}
              onClickPlus={() => dispatch(setIntelligence(intelligence + 1))}
              onClickMinus={() => dispatch(setIntelligence(intelligence - 1))}
            />
          }
        />
        <Row
          first={'Charisma'}
          second={
            <AddParameterValue
              value={charisma}
              onClickPlus={() => dispatch(setCharisma(charisma + 1))}
              onClickMinus={() => dispatch(setCharisma(charisma - 1))}
            />
          }
        />
        <Row first={'Life force'} second={lifeForce} />
        <Row first={'Dodging'} second={dodging} />
        <Row first={'Energy'} second={energy} />
      </div>
    </div>
  );
};

export default ChangePerson;
