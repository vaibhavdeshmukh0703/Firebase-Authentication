import { useEffect, useState } from "react";
type quote={
    id:number,
    message : string
}
const Dashboard = ()=>{
    const [quotes, setQuote] = useState<Array<quote>>([])
    useEffect(()=>{
        const makeApiCall=async()=>{
            try {
                const token = localStorage.getItem("token");
                const response = await fetch('',{method:"GET",headers:{'content-type':'application/json','Authentication':`${token}`}})
                const result = await response.json();
                if(result){
                    setQuote(result);
                }
            } catch (error) {
                console.log(error);
            }
        }
        makeApiCall();
    },[])
    return <div className="">
        {quotes && quotes.map((quote)=>{
            return <h3>{quote.message}</h3>
        })}
    </div>
}
export default Dashboard;