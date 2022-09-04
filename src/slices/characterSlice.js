import { createSlice } from '@reduxjs/toolkit';

const levels = ['untrained', 'newbie', 'apprentice', 'adept', 'expert', 'master'];

const initialState = {
  name: '',
  strong: 0,
  skill: 0,
  intelligence: 0,
  charisma: 0,
  lifeForce: 3,
  dodging: 10,
  energy: 0,
  attack: {
    level: levels[0],
    index: 0,
  }, // strong
  stealth: {
    level: levels[0],
    index: 0,
  }, // skill
  archery: {
    level: levels[0],
    index: 0,
  }, // skill
  learnabillity: {
    level: levels[0],
    index: 0,
  }, // intelligence
  survival: {
    level: levels[0],
    index: 0,
  }, // intelligence
  medical: {
    level: levels[0],
    index: 0,
  }, // intelligence
  intimidation: {
    level: levels[0],
    index: 0,
  }, // charisma
  insight: {
    level: levels[0],
    index: 0,
  }, // charisma
  appearance: {
    level: levels[0],
    index: 0,
  }, // charisma
  manipulation: {
    level: levels[0],
    index: 0,
  }, // charisma
};

export const characterSlice = createSlice({
  name: 'character',
  initialState,
  reducers: {
    setName(state, action) {
      state.name = action.payload;
    },
    setStrong(state, action) {
      if (action.payload >= 0 && action.payload <= 5) state.strong = action.payload;
      state.lifeForce = 3 + state.strong;
    },
    setSkill(state, action) {
      if (action.payload >= 0 && action.payload <= 5) state.skill = action.payload;
      state.dodging = 10 + state.skill;
      state.energy = state.skill + state.intelligence;
    },
    setIntelligence(state, action) {
      if (action.payload >= 0 && action.payload <= 5) state.intelligence = action.payload;
      state.energy = state.skill + state.intelligence;
    },
    setCharisma(state, action) {
      if (action.payload >= 0 && action.payload <= 5) state.charisma = action.payload;
    },
    damage(state) {
      state.lifeForce -= 1;
    },
    trainAttack(state) {
      if (state.attack.index < state.strong) {
        state.attack.index += 1;
        state.attack.level = levels[state.attack.index];
      }
    },
    trainStealth(state) {
      if (state.stealth.index < state.skill) {
        state.stealth.index += 1;
        state.stealth.level = levels[state.stealth.index];
      }
    },
    trainArchery(state) {
      if (state.archery.index < state.skill) {
        state.archery.index += 1;
        state.archery.level = levels[state.archery.index];
      }
    },
    trainLearnabillity(state) {
      if (state.learnabillity.index < state.intelligence) {
        state.learnabillity.index += 1;
        state.learnabillity.level = levels[state.learnabillity.index];
      }
    },
    trainSurvival(state) {
      if (state.survival.index < state.intelligence) {
        state.survival.index += 1;
        state.survival.level = levels[state.survival.index];
      }
    },
    trainMedical(state) {
      if (state.medical.index < state.intelligence) {
        state.medical.index += 1;
        state.medical.level = levels[state.medical.index];
      }
    },
    trainIntimidation(state) {
      if (state.intimidation.index < state.charisma) {
        state.intimidation.index += 1;
        state.intimidation.level = levels[state.intimidation.index];
      }
    },
    trainInsight(state) {
      if (state.insight.index < state.charisma) {
        state.insight.index += 1;
        state.insight.level = levels[state.insight.index];
      }
    },
    trainAppearance(state) {
      if (state.appearance.index < state.charisma) {
        state.appearance.index += 1;
        state.appearance.level = levels[state.appearance.index];
      }
    },
    trainManipulation(state) {
      if (state.manipulation.index < state.charisma) {
        state.manipulation.index += 1;
        state.manipulation.level = levels[state.manipulation.index];
      }
    },
    setCharacter(state, action) {
      state.name = action.payload.name;
      state.strong = action.payload.strong;
      state.skill = action.payload.skill;
      state.intelligence = action.payload.intelligence;
      state.charisma = action.payload.charisma;
      state.lifeForce = action.payload.lifeForce;
      state.dodging = action.payload.dodging;
      state.energy = action.payload.energy;
      state.attack = action.payload.attack;
      state.stealth = action.payload.stealth;
      state.archery = action.payload.archery;
      state.learnabillity = action.payload.learnabillity;
      state.survival = action.payload.survival;
      state.medical = action.payload.medical;
      state.intimidation = action.payload.intimidation;
      state.insight = action.payload.insight;
      state.appearance = action.payload.appearance;
      state.manipulation = action.payload.manipulation;
    },
  },
});

export const selectCharacter = (state) => state.character;

export const {
  setName,
  setStrong,
  setSkill,
  setIntelligence,
  setCharisma,
  damage,
  trainAttack,
  trainStealth,
  trainArchery,
  trainLearnabillity,
  trainSurvival,
  trainMedical,
  trainIntimidation,
  trainInsight,
  trainAppearance,
  trainManipulation,
  setCharacter,
} = characterSlice.actions;

export default characterSlice.reducer;
