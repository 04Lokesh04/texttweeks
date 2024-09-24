import {useEffect, useState} from "react"
import './App.css'
export default function App() {

    const [text, setText]=useState('')

    const [uniqueCount, setUnique]=useState(0)

    const [charCount, setChar]=useState(0)

    const [searchInput, setSearchInput]=useState('')

    const [replaceword, setReplace]=useState('')

    useEffect(()=>{

      if (text.length===0){

        setUnique(0)

        return
    }

    const words=text.split(" ") || []

    console.log(words)

    const uniquewords=new Set(

    words.map(each=>each.toLowerCase())

    )

    setUnique(uniquewords.size)
    
  // eslint-disable-next-line no-useless-escape
    const punctuations=/[.,\/#!$%\^&\*;:{}=\-_~()/ ]/g

    const characters=text.replace(punctuations, '')

    setChar(characters.length)

    },[text])

    const replacewords=()=>{

    const textcase=text.split(" ")

    const newTextarea=textcase.map(each=>
      each.toLocaleLowerCase()===searchInput.toLocaleLowerCase()?  replaceword:each
    )
    const newtext=newTextarea.join(' ')
    setText(newtext)
  }

  return (

    <div className="main">

    <h1 className='heading'>GET YOUR TEXT STATISTICS</h1>

    <textarea className='textarea' placeholder="Enter Your Text Here"

      type='text' value={text} onChange={(e)=>setText(e.target.value)} />

      <p className='para'>Play around with your text </p>

      <p className='countspara'>Unique Words Count Is: <span className='span'>{uniqueCount} </span></p>

      <p className='countspara'>Characters Count Is: <span className='span'>{charCount}</span></p>

      <div className='inputfield'>

    <label className='label' htmlFor='inputSearch'>Search Word</label>

    <input type='text' className='input' id='inputSearch' placeholder='Enter your search word'

    value={searchInput} onChange={(e)=>setSearchInput(e.target.value)}/>

  </div>

    <div className='inputfield'>

      <label className='label' htmlFor='inputreplace'>Replace Word</label>

    <input type='text' className='input' id='inputreplace' placeholder='Enter your replace word'

    value={replaceword} onChange={(e)=>setReplace(e.target.value)}/>

  </div>

  <button className='button' type='button' onClick={replacewords}>Replace</button>

  </div>

)

}
