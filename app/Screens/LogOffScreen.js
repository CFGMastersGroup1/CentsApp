import { useDispatch } from 'react-redux';

export default function LogOffScreen({navigation}){

    const dispach = useDispatch()
    const user = {name:'Stranger', email:'', password:''}

    function logOff(){
        const action ={
            type: "LOG_OFF",
            payload: user
          }
          dispach(action)
          navigation.navigate('Login') 
    }


    logOff()
    return(null)

}