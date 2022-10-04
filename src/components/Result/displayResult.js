import axios from "axios";
import { useEffect, useState } from "react";

function DisplayResult () {
    const [result, setResult] = useState([]);

    useEffect(() => {
        const result = JSON.parse(localStorage.getItem('data'))
        if (result)
        {
            setResult(result)
            console.log(result);
        }
        axios
        .get(`https://whatsapp-polls.herokuapp.com/getVotes/${result.id}`)
        .then(res => {
            console.log(res)
        })
        .catch(err => {
            console.log(err);
        })
    },[])

    return (
        <div>
            <p>result</p>
        </div>
    )
}

export default DisplayResult;