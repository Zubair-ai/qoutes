import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import QuoteForm from "../components/quotes/QuoteForm";
import useHttp from "../hooks/hooks/use-http"
import {addQuote} from "../lib/lib/api"

const NewQoutes=()=>{
    const {sendRequest,status}=useHttp(addQuote);
    const history=useHistory();

    useEffect(()=>{
        if(status==="completed"){
            history.push("/quotes")
        }
    },[status,history])

    const onAddQuoteHandler=(newquote)=>{
        sendRequest(newquote)
    }
    return <div>
        <QuoteForm isLoading={status==="pending"} onAddQuote={onAddQuoteHandler}/>
    </div>
};

export default NewQoutes;