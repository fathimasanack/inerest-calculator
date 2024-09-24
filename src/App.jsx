
import { useState } from 'react';
import './App.css'
import { TextField,Stack,Button } from '@mui/material';

function App() {
  const[interest,setInterest] = useState(0)
  const[principle,setPrinciple] = useState(0)
  const[rate,setRate] = useState(0)
  const[year,setYear] = useState(0)
  const [isPrincipleInvalid,setIsPrincipleInvalid]=useState(false)
  const[isRateInvalid,setIsRateInvalid]=useState(false)
  const[isYearInvalid,setIsYearInvalid]=useState(false)
  const userInputValidation = (inputTag)=>{
    const{name,value}=inputTag
    console.log(name,value);
    console.log(!!value.match(/^[0-9]*\.?[0-9]+$/));
    console.log(!!value.match(/^\d*\.?\d+$/));
    if(name=="principle"){
      setPrinciple(value)
      !!value.match(/^\d*\.?\d+$/) ? setIsPrincipleInvalid(false):setIsPrincipleInvalid(true)
    }else if(name=="rate"){
      setRate(value)
      !!value.match(/^\d*\.?\d+$/) ? setIsRateInvalid(false):setIsRateInvalid(true)


    }else if(name=="year"){
      setYear(value)
      !!value.match(/^\d*\.?\d+$/) ? setIsYearInvalid(false):setIsYearInvalid(true)

    }

    

  }
  const handleCalculate = ()=>{
    if(principle && rate && year){
      setInterest(principle*rate*year/100)
    }else{
      alert("please fill the form completely")
    }
  }
  const handleReset = ()=>{
    setPrinciple(0)
    setRate(0)
    setYear(0)
    setInterest(0)
    isPrincipleInvalid(false)
    isRateInvalid(false)
    isYearInvalid(false)




  }




  return (
    <>
    <div style={{minHeight:'100vh'}} className='d-flex justify-content-center align-items-center bg-dark'>
        <div style={{width:'600px'}} className='bg-light rounded p-5'>
        <h1>simple interest calculator</h1>
        <p>Calculate your simple inerest Easily!</p>
         <div className='d-flex flex-column justify-content-center align-items-center bg-warning shadow p-3 rounded text-light'>
          <h1>₹ {interest}</h1>
          <p className="fw-bolder">Total simple Interest</p>

         </div>
         <form className="mt-3">
          <div className='mb-3'>
          <TextField value={principle||""} onChange={(e=>userInputValidation(e.target))} name='principle' className='w-100' id="outlined-principle" label="₹ Principle Amount" variant="outlined" />
         </div>
         {
          isPrincipleInvalid &&    <div className='mb-3 fw-bolder text-danger'>*Invalid Principle Amount</div>

         }
         <div className='mb-3'>
          <TextField value={rate||""} onChange={(e=>userInputValidation(e.target))} name='rate' className='w-100' id="outlined-rate" label="Rate of Interest (%)" variant="outlined" />
         </div>
         {
          isRateInvalid  &&    <div className='mb-3 fw-bolder text-danger'>*Invalid Rate Amount</div>

         }
         <div className='mb-3'>
          <TextField value={year||""} onChange={(e=>userInputValidation(e.target))} name='year' className='w-100' id="outlined-year" label="Time Period (yr)" variant="outlined" />
         </div>
         {
          isYearInvalid  &&    <div className='mb-3 fw-bolder text-danger'>*Invalid year Amount</div>

         }

         <Stack direction="row" spacing={2}>
          <Button onClick={handleCalculate} disabled={isPrincipleInvalid||isRateInvalid||isYearInvalid} style={{width:'50%',height:'70px'}} variant="contained">CALCULATE</Button>
          <Button onClick={handleReset} style={{width:'50%',height:'70px'}} variant="outlined">RESET</Button>

            </Stack>
         </form>
          </div>
     

    </div>

    </>
  )
}

export default App
