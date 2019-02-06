import axios from 'axios';

export const getAllCards = () => async (dispatch) => {
    const payload = await axios.get('http://localhost:3030/api/cards').then(e => e.data.cards)
    return dispatch({
        type: 'GET CARDS',
        payload
    })
}