import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

export default function LogOffScreen({navigation}){

    const dispach = useDispatch()
    const user = {name:'Stranger', email:'', password:''}

    function logOff(){
        navigation.navigate('Login')
        const action ={
            type: "LOG_OFF",
            payload: user
          }
          dispach(action)
    };

    useEffect(()=>{
        logOff()
    });
    

    return(null)

}