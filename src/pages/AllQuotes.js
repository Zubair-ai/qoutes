import { useEffect } from "react";
import QuoteList from "../components/quotes/QuoteList";
import LoadingSpinner from "../components/UI/LoadingSpinner";
import useHttp from "../hooks/hooks/use-http";
import {getAllQuotes} from "../lib/lib/api"
import NoQuotesFound from "../components/quotes/NoQuotesFound"


const AllQoutes=()=>{
    const {sendRequest,status,data:loadedQuotes,error}=useHttp(
        getAllQuotes,
        true
    )
    useEffect(()=>{
        sendRequest();
    },[sendRequest]);

    if(status==="pending"){
        return(
            <div className="centered">
                <LoadingSpinner/>
            </div>
        )
    }
    if(error){
        return(
            <p className="centered">{error}</p>
        )
    }
    if(status==="completed" && (!loadedQuotes||loadedQuotes.length===0)){
        return(
            <NoQuotesFound/>
        )

    }

    return (<QuoteList quotes={loadedQuotes}/>)
};

export default AllQoutes;