import {useState, useCallback} from "react";

export const useHttp = () => {
    const [isFetching, setIsFetching] = useState(false)
    const [error, setError] = useState(null)

    //useCallback - для того чтобы реакт не входил в рекурсию в данном случае
    const request = useCallback(async (url, method = "GET", body = null, headers = {}) => {
        setIsFetching(true);
        try{

            if(body){
                body = JSON.stringify(body)
                headers["Content-Type"] = "application/json";
            }

            const response = await fetch(url,{method,body,headers})
            const data = await response.json();

            if(!response.ok){
                throw new Error(data.message || "Something is went wrong...");
            }
            setIsFetching(false);
            return data;
        }catch(e){
            setIsFetching(false);
            setError(e.message);
            console.log(e.message);
            throw e;
        }
    },[])

    const clearError = useCallback(() => setError(null),[]);

    return {isFetching, request, error, clearError}
}
