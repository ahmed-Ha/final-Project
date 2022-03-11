import {SINGIN,SINGUP,GET_USER,CURRENT,ADD_COUR,AFFICHE_COUR,REMOVE_COUR,ADDDEVIS,AFFICHE_DEVIS} from '../actionTypes/action-type'
import axios from 'axios'
// import {useHistory} from 'react-router-dom'



// backend actions with axios
// user, history
export const singnIN = (userData,history) => async (dispatch) =>{
        
       try {
           const userwhosingin = await axios.post('http://localhost:5000/signin',userData);
           
           dispatch({
               type:SINGIN,
               payload: userwhosingin.data
           })
           setTimeout(() => {
            dispatch(currentUser(userwhosingin.data.token,history))
           }, 500);
           
        } catch (error) {
            console.log(error)
        }
    }

            


export const singnUp = (userData) => async (dispatch) =>{
    try {
        const userwhosingup = await axios.post('http://localhost:5000/signup',userData);
        dispatch({
            type:SINGUP,
            payload: userwhosingup.data 
        })
    } catch (error) {
        console.log(error)
    }

}

//  export const current_user = () => async (dispatch) =>{

//     try {
//         const user = await axios.get('http://localhost:5000/current');
//         dispatch({
//             type:GET_USER,
//             payload: user.data
//         })
//     } catch (error) {
//         console.log(error)
//     }

// }

export const currentUser = (token,history) => async (dispatch) => {
    
    const config = { headers :{authorization: token }}
     try {
         const user = await axios.get('http://localhost:5000/current',config)
         
         dispatch({
             type:CURRENT,
             payload: user.data
         })
        localStorage.setItem('current_user', JSON.stringify(user.data));
         history.push('/')
         window.location.reload()
     } catch (error) {
        console.log(error)   
     }
}

export const Add_Cour = (data,history) => async (dispatch) =>{
    try {
        const addedcour = await axios.post('http://localhost:5000/addNewCours',data);
        dispatch({
            type:ADD_COUR,
            payload: addedcour.data 
        })
        history.push("/Cours de Coaching")
    } catch (error) {
        console.log(error)
    }

}
export const afficheDevis = () => async (dispatch) =>{
    try {
        const afficheDevi = await axios.get('http://localhost:5000/afficheDevis');
        console.log(afficheDevi.data)
        dispatch({
            type:AFFICHE_DEVIS,
            payload: afficheDevi.data.Persons
        })
    } catch (error) {
        console.log(error)
    }
}
export const Affiche_Cour = () => async (dispatch) =>{
    try {
        const affichecour = await axios.get('http://localhost:5000/afficheCours');
        dispatch({
            type:AFFICHE_COUR,
            payload: affichecour.data.Affichage
        })
    } catch (error) {
        console.log(error)
    }

}
export const deleteCours = (ID) => async (dispatch) =>{
    try {
        const deleteCours = await axios.delete(`http://localhost:5000/cours/${ID}`);
        dispatch({
            type:REMOVE_COUR,
            payload: deleteCours.data.Affichage 
        })
    } catch (error) {
        console.log(error)
    }


}
export const addDevis = (data) => async (dispatch) =>{
    try {
        const addDevis = await axios.post('http://localhost:5000/addDevis',data);
        dispatch({
            type:ADDDEVIS,
            payload: addDevis.data 
        })
    } catch (error) {
        console.log(error)
    }
}
