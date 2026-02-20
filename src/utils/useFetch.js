import {useState, useEffect} from 'react';


const useFetch = (url)=>{
    console.log('useFetch called');
    const [res,setRes] = useState([]) 
    const [resCopy,setResCopy] = useState([])
    
    useEffect(()=>{
        const fetchData = async ()=>{
            try {
                const data = await fetch(url)
                const json = await data.json();
                const resList = (json.data.cards[1].groupedCard.cardGroupMap.RESTAURANT.cards[1].card.card.restaurants);  
                setRes(resList);
                setResCopy(resList);
            } catch (error){
                console.log(error);
            }
        }
        fetchData();
    },[])
    return [res,resCopy,setRes,setResCopy]

}
export default useFetch;