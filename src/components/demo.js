import {useState, useMemo, useCallback, useRef} from 'react'
import findNthPrime from '../utils/helper';
import HooksUsed from './HooksUsed';

const Demo = () => {
    const [text, setText] = useState(0)
    const [darkTheme, setDarkTheme] = useState(false)
    const prevFun = useRef()
    // const prime = findNthPrime(text);
    const prime = useMemo(()=> findNthPrime(text) , [text])
    // const toggleTheme =()=> {
    //             console.log("button clicked",darkTheme)
    //             setDarkTheme((t)=>!t)
    // }
    const toggleTheme =useCallback(()=> {
                console.log("button clicked",darkTheme)
                setDarkTheme((t)=>!t)
    },[darkTheme])
    console.log( prevFun.current === toggleTheme ?"Function is same": "Function is diff")
    prevFun.current = toggleTheme
    // console.log('rendering...')
    return(<div className={'p-4 m-4 flex border-black' }>
        <div className={'p-4 m-4 w-96 h-96 border-black ' + (darkTheme ? 'bg-black text-white' : '')}>
        <div>
            <input className="border border-black " value={text} type ="number" onChange={(e)=> setText(e.target.value)}/>
            <button onClick={toggleTheme} className='border-black m-4 p-4  bg-orange-400 text-white'>Toggle</button>
        </div>
        <div>
            <h1>find nth prime : {prime}</h1>
        </div>
        
    </div>
    <HooksUsed />
    </div>)

}
export default Demo;