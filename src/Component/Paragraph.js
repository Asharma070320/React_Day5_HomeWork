import { useState } from "react"
import './Para'
import Para from "./Para";
function Paragraph(){

    let[Value,setValue]= useState(0)
    let[Arr,setArr] = useState([]);

    function getNumber(e){
        let storeValue = e.target.value;
        if(storeValue>=0){
            setValue(storeValue)
        }
    }
    
    function clickBtn(){
       if(Value<1){
        setArr([]);
        alert("😉 Please enter the number between 1 to 8")
       }else if(Value>Para.length){
        setArr([]);
        alert("Ayyoo! 🙄 u entered large number")
       }else{
        setArr(
            Para.map((val,index)=>{
                if(index<=Value-1){
                    return val
                }
            })
        )
       }
    }
    console.log(Value);
    return(
        <div className="container">
            <h1 className="line">TIRED OF BORING LOREM IPSUM?</h1>
            <br />
            <div className="content">
                <h3 className="boldd">Paragraphs :</h3>
                <input type="number" className="side" value={Value} min={1} max={8} onChange={getNumber}/>
                <button onClick={clickBtn} className="btn">GENERATE</button>
            </div>
            <div className="shift">
            {
                Arr.map((list)=>{
                    return <p className="shift"> {list}</p>
                })
            }
            </div>
        </div>
    );
}
export default Paragraph