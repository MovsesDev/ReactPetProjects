import axios from 'axios'
import React, { useEffect, useState } from 'react'

type Props = {}

interface Post {
url:string
}

const StoreList = (props: Props) => {

    const [store, setStore] = useState<Post[]>([])
    const [from, setFrom] = useState<number>(0)
    const [to, setTo] = useState<number>(10)

    useEffect(() => {
        const fetchStore = async () => {
            try {
                const response = await axios.get('https://api.thecatapi.com/v1/images/search?limit=100&page=1&category_ids=1')
                setStore(prev =>  [...prev, ...response.data])
                return response.data

            } catch (e) {
                console.log(e)
            }
        }

        fetchStore()
    }, [])

    const goForward = () => {
        setFrom(prev => prev + 10)
        setTo(prev => prev + 10)
    }

    const goBack = () => {
        setFrom(prev => prev - 10)
        setTo(prev => prev - 10)
    }
    console.log(store.length);
    

    return (
        <div style={{display: 'flex', flexDirection:'column', alignItems:'center'}}>

<button style={from === 0 ? {display:'none'} : {}} onClick={goBack}>go Back</button>

            {store.slice(from,to).map(s => <img style={{width: '200px', height: '200px'}} src={s.url}></img>)}
<button  onClick={goForward}>go Forward</button>

        </div>
    )
}

export default StoreList