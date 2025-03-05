import React, { useEffect, useState } from 'react'
import { createContext } from 'react'
export const addresponseContext=createContext()
export const editresponseContext=createContext()
export const tokenauthcontext=createContext()
function ContextsApi({children}) {
    const [addresponse,setaddresponse]=useState("")
    const [editproject,seteditproject]=useState("")
    const [tokenauth,settokenauth]=useState(false)
    useEffect(()=>{
if(sessionStorage.getItem("token")){
  settokenauth(true)
}
else{
  settokenauth(false)
}
    },[tokenauth])

  return (
    <>
      <tokenauthcontext.Provider value={{tokenauth,settokenauth}}>

    <editresponseContext.Provider value={{editproject,seteditproject}}>
    <addresponseContext.Provider value={{addresponse,setaddresponse}}>
    {children} 

    </addresponseContext.Provider>

    </editresponseContext.Provider>
    </tokenauthcontext.Provider>
    </>
  )
}

export default ContextsApi
