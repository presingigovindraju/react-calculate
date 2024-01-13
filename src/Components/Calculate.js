import React,{useState} from "react";


const Calculate =()=>{
    const [inputOne,setInputOne] = useState(0)
    const [inputTwo,setInputTwo] = useState(0)
    const [totalValue,setTotalValue] = useState(0)
    const [toShow,setToShow] = useState(false)
    const [show,setShow] = useState(true)
    console.log(totalValue)


    


    return (
        <div className="box">
        <div className="calculatorBox">
            <div className="inputBoxs">
                <input onBlur={(e)=>setInputOne(e.target.value)} type="number" placeholder="Num 1" name="Num-1"/>
                <input onBlur={(e)=>setInputTwo(e.target.value)} type="number" placeholder="Num 2" name="Num-2"/>
            </div>
            <div className="buttonBoxs">
            
            <button onClick={()=>(inputOne == 0 ||inputTwo == 0 || inputOne == ""||inputTwo=="")?(setToShow(true),setShow(false)):(setToShow(true),setTotalValue(+inputOne + +inputTwo))}>+</button>
            <button onClick={()=>(inputOne == 0 ||inputTwo == 0 || inputOne == ""||inputTwo=="")?(setToShow(true),setShow(false)):(setToShow(true),setTotalValue(inputOne-inputTwo))}>-</button>
            <button onClick={()=>(inputOne == 0 ||inputTwo == 0 || inputOne == ""||inputTwo=="")?(setToShow(true),setShow(false)):(setToShow(true),setTotalValue(inputOne*inputTwo))}>*</button>
            <button onClick={()=>(inputOne == 0 ||inputTwo == 0 || inputOne == ""||inputTwo=="")?(setToShow(true),setShow(false)):(setToShow(true),setTotalValue(inputOne/inputTwo))}>/</button> 

            </div>
            {
                toShow?
                ((show)?
                (<div><h1 className="blueColor">Success!</h1>
                <p className="paraPlacing">your value is  {totalValue}</p>
                </div>):
                (<div>
                <h1 className="redColor">Error!</h1>
                <p>Please enter non-zero values for both inputs.</p></div>)):("")

            }
            
        </div>
        </div>
    )
}

export default Calculate

                