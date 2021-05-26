const mage = {
    healthPoints: 130,
    intelligence: 45,
    mana: 125,
    damage: undefined,
};
  
const warrior = {
    healthPoints: 200,
    strength: 30,
    weaponDmg: 2,
    damage: undefined,
};
  
const dragon = {
    healthPoints: 350,
    strength: 50,
    damage: undefined,
};
  
const battleMembers = { mage, warrior, dragon };

// Parte 1

const getDragonDamage = () => {
    const dragonDamage = Math.floor(Math.random() * (dragon.strength - 14)) + 15;
    return dragonDamage
};

const getWarriorDamage = () => {
    const warriorDamage = Math.floor(Math.random() * ((warrior.strength * warrior.weaponDmg) - (warrior.strength - 1))) + warrior.strength;
    return warriorDamage;
};

const getMageDamage = () => {
    const mageDamageAndMana = {};
    mageDamageAndMana.damage = Math.floor(Math.random() * ((mage.intelligence * 2) - (mage.intelligence - 1))) + mage.intelligence;
    if (mage.mana < 15) mageDamageAndMana.damage = 'Não possui mana suficiente';
    else mageDamageAndMana.mana = mage.mana - 15;
    return mageDamageAndMana;
};

// Parte 2

const gameActions = {
    warriorAction: (callback) => {
        const damage = callback();
        dragon.healthPoints -= damage
        warrior.damage = damage;
    },
    mageAction: (callback) => {
        const damageAndMana = callback();
        dragon.healthPoints -= damageAndMana.damage;
        mage.damage = damageAndMana.damage;
        mage.mana = damageAndMana.mana;
    },
    dragonAction: (callback) => {
        const damage = callback();
        mage.healthPoints -= damage;
        warrior.healthPoints -= damage;
        dragon.damage = damage;
    },
    fetchBattleMambers: () => {
        console.log(battleMembers);
        return battleMembers;
    },
};
