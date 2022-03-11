import {
    SINGIN,
    SINGUP,
    GET_USER,
    CURRENT,
    ADD_COUR,
    AFFICHE_COUR,
    REMOVE_COUR,
    AFFICHE_DEVIS
} from '../actionTypes/action-type'


const initialState = {
    user: {},
    signin: {},
    signup: {},
    currentUser: {},
    addNewCours: {},
    afficheCours: [],
    deleteCours: {},
    affiche_Devis: {},

}

const UserReducer = (state = initialState, action) => {

    switch (action.type) {

        case SINGIN:
            console.log(action.payload);
            return {
                ...state,
                signin: action.payload
            }

        case SINGUP:
            console.log(action.payload);
            return {
                ...state,
                signup: action.payload
            }

        case GET_USER:
            return {
                ...state,
                user: action.payload
            }

        case CURRENT:
            return {
                ...state,
                currentUser: action.payload
            }


        case ADD_COUR:
            return {
                ...state,
                addNewCours: action.payload
            }


        case AFFICHE_COUR:
            return {
                ...state,
                afficheCours: action.payload
            }
        case AFFICHE_DEVIS:
            return {
                ...state,
                affiche_Devis: action.payload
            }


        case REMOVE_COUR:
            return {
                ...state,
                deleteCours: action.payload
            }


        default:
            return state
    }
}

export default UserReducer