import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  selectCharacter,
  trainAppearance,
  trainArchery,
  trainAttack,
  trainInsight,
  trainIntimidation,
  trainLearnabillity,
  trainManipulation,
  trainMedical,
  trainStealth,
  trainSurvival,
} from '../../slices/characterSlice';

import Row from '../Row';
import styles from './TrainingSkills.module.scss';

export const TrainingSkills = () => {
  const dispatch = useDispatch();
  const {
    attack,
    stealth,
    archery,
    learnabillity,
    survival,
    medical,
    intimidation,
    insight,
    appearance,
    manipulation,
  } = useSelector(selectCharacter);
  const buttonTrain = (onClick) => (
    <button onClick={onClick} className={styles.button_train}>
      Train
    </button>
  );
  return (
    <div className={styles.training}>
      <h1>You can train your skills</h1>
      <div className={styles.training__skills}>
        <Row
          first={'Attack'}
          second={attack.level}
          third={buttonTrain(() => dispatch(trainAttack()))}
        />
        <Row
          first={'Stealth'}
          second={stealth.level}
          third={buttonTrain(() => dispatch(trainStealth()))}
        />
        <Row
          first={'Archery'}
          second={archery.level}
          third={buttonTrain(() => dispatch(trainArchery()))}
        />
        <Row
          first={'Learnabillity'}
          second={learnabillity.level}
          third={buttonTrain(() => dispatch(trainLearnabillity()))}
        />
        <Row
          first={'Survival'}
          second={survival.level}
          third={buttonTrain(() => dispatch(trainSurvival()))}
        />
        <Row
          first={'Medical'}
          second={medical.level}
          third={buttonTrain(() => dispatch(trainMedical()))}
        />
        <Row
          first={'Intimidation'}
          second={intimidation.level}
          third={buttonTrain(() => dispatch(trainIntimidation()))}
        />
        <Row
          first={'Insight'}
          second={insight.level}
          third={buttonTrain(() => dispatch(trainInsight()))}
        />
        <Row
          first={'Appearance'}
          second={appearance.level}
          third={buttonTrain(() => dispatch(trainAppearance()))}
        />
        <Row
          first={'Manipulation'}
          second={manipulation.level}
          third={buttonTrain(() => dispatch(trainManipulation()))}
        />
      </div>
    </div>
  );
};
