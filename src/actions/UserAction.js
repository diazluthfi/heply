export const GET_USER = "GET_USER";

export const getUser = () => {
    return (dispatch) => {
        dispatch({
            type: GET_USER,
            payload: {
                nama: 'Marzuq',
                email: 'diazluthfi07@gmail.com',
            }
        })
    }
}