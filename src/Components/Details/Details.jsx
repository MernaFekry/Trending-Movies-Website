import React,{useState,useEffect} from 'react';

const Details = () => {
    const [moviesData, setMoviesData] = useState([{}]);


    const url = "";

    async function getApiData(){
        const response = await axios.get(url);
    }

    useEffect(() => {
        getApiData();
    }, []);


    return <>

        
    
    
    </>
}

export default Home;
