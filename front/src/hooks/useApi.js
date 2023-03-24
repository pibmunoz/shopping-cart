import { useState, useEffect } from 'react'

function useFetchDataProducts(url) {
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch(url)
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                setData(data);
            })
            .catch((err) => {
                console.log(err.message);
            })

    }, [url]);
    return { data };
}

export default useFetchDataProducts