const initState = {
    cards: [],
    viewCard: null,
}

const maxBy = (n, maxVal) => {
    const num = parseInt(n, 10);
    return  num > maxVal ? maxVal : (!num ? 0 : num);
}

const reg = /\b(\+|\*)/;
const parseDamage = damage => parseInt(damage.replace(reg, ''), 10)
const getDamageNum = (damage) => damage.match(reg) ? parseDamage(damage) : 0;
const getDamages = (attacks = []) => attacks.reduce((p,c) => p + getDamageNum(c.damage),0)
const getHp = (hp) => maxBy(hp, 100);
const getStrength = (attacks = []) => maxBy(attacks.length * 50, 100)
const getWeakness = (weaknesses = []) => maxBy(weaknesses.length * 50, 100)
const getHappiness = (hp, damage, weak) => ((hp/10) + (damage/10) + 10 - (weak)) / 5;

const mapCards = (card) => {
    const { hp, attacks, weaknesses } = card;
    const hp_level = getHp(hp);
    const strength_level = getStrength(attacks);
    const damage = getDamages(attacks);
    const weak_level = getWeakness(weaknesses);
    const happiness = getHappiness(hp, damage, weak_level);
    return {
        ...card,
        hp_level,
        strength_level,
        damage,
        weak_level,
        happiness: Math.ceil(Math.abs(happiness || 0)),
    }
}

const cardReducer = (state = initState, action) => {
    switch (action.type) {
        case 'GET CARDS': {
            return {
                ...state,
                cards: action.payload.map(mapCards),
            }
        }
        default: {
            return state
        }
    }
}

export default cardReducer