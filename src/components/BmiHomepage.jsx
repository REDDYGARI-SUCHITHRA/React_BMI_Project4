
// import {useState} from 'react';
// import styles from './BmiHomepage.module.css';
// import styled from 'styled-components';
// const BmiHomepage = () => {
//     const [weight,setWeight]=useState(0);
//     const [height,setHeight]=useState(0);
//     const [bmi,setBmi]=useState('');
//     const [message,setMessage]=useState("");
//     const CalculateBmi=(e)=>{
//           e.preventDefault();
//           if(weight===0 || height===0)
//           {
//             alert("Please enter a valid height and weight");
//             setMessage("Enter valid Height and Weight");
//           }
//           else{
//             let bmi=(weight/(height*height)*703);
//             setBmi(bmi.toFixed(1));
//             if(bmi<10)
//             {
//               setMessage("You are Under Weight");
//             }
//             else if(bmi>=10 && bmi<20)
//             {
//               setMessage("You are Healthy Weight");
//             }
//             else
//               {
//                 setMessage("You are over Weight");
//               }
  
//           }
//     }
//     const reload=()=>{
//       window.location.reload();
//     }
//     return (
//       <div className='App'>
//         <div className={styles.container}>
//          <h2>BMI</h2>
//          <form onSubmit={CalculateBmi}>
//           <div>
//             <label>Weight (lbs)</label>
//             <input type='text' placeholder='Enter Weight value' value={weight} onChange={(e)=>setWeight(e.target.value)}/>
//           </div>
//           <div>
//             <label>Height (in)</label>
//             <input type='text' placeholder='Enter Height value' value={height} onChange={(e)=>setHeight(e.target.value)} />
//           </div>
//           <Button>
//             <button className='btn' type='submit'>Submit</button>
//             <button className='btn btn-outline' type='submit' onClick={reload} >Reload</button>
//           </Button>
//           <div className='center'>
//             <h3> Your BMI is:{bmi}</h3>
//             <p>{message}</p>
//           </div>
//          </form>
//         </div>
//       </div>
//     )
// }

// export default BmiHomepage;

// const Button=styled.div`
//     gap: 30px;
//     display: flex;
//     align-items: center;
//     justify-content: center;

// `;

import React from 'react'

const BmiHomepage = () => {
  return (
    <div>BmiHomepage</div>
  )
}

export default BmiHomepage