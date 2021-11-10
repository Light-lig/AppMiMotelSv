import React, {useState} from 'react';
import { useFocusEffect } from '@react-navigation/native';

import axios from 'axios';
const useData = (url) =>{
    const [data, setData] = useState([]);
    
    useFocusEffect(  React.useCallback(()=>{
         axios.get(url).then((response)=>{
            setData(response.data);
        }).catch((err)=>{
            setData([]);
        })
    },[]))

    return data;
}

export default useData;