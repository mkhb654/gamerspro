import React from 'react'

const Footer = () => {
    return (
        <div>
            This is a footer
        </div>
    )
}
const NFTCreation =() =>{

    const onClickHandler = (a,b,c) => {
        //string literal 
        //es6 
      console.log(`click ${a} ${b} ${c}`)
    }

    return (
        <div>
           NFT How to create 
           <button onClick = {() => {
               onClickHandler(4,6,10)
           }}
            >
               click.
               </button> 
        </div>
    )
}

export default NFTCreation
