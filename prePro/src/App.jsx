import { useState , useCallback, useEffect, useRef} from 'react'

import './App.css'

// const MyButton = () => {
//   const [count, setCount] = useState(0);
//   const [emojis, setEmojis] = useState('');
//   return (
//     <div>
//       <button onClick={handleClick}>I Love You More than You {count} times</button>
//       <div className="emoji-display">{emojis}</div>
//     </div>
    
//   )
//   function handleClick() {
//     setCount(count  + 1);
//     setEmojis(prev => prev + '❤️ ');
//   }
// }

// const DrkLt = ({dark, handleClick2})=> {
  
//   return (
//     <button onClick={handleClick2}>{dark ? "Light" : "Dark"}</button>
//   )
  
// }
// function App() {
//   const [dark, setDark] = useState(false);
//   function handleClick2(){
//     setDark(!dark);
//   }

//   return (
//     <div className={`app-container ${dark ? "light-bg" : "dark-bg"}`}>
//       <h1>Hello This is Rakesh</h1>
//       <MyButton/>
//       <DrkLt dark={dark} handleClick2={handleClick2}/>
//     </div>
//   )
// }



// const App = () => {
//   let [count, setCount] = useState(10);
//   const increaseValue = () => {
//     count++;
//   if(count <= 20){
//     setCount(count);
//     console.log(count);
//     }
//     else if(count == 21){
//       alert("the number is greater than 20...")
//     }
//     else {
//       return ;
//     }
//   }

//   const decreaseValue = () => {
//     count--;
//     if(count >=0){
//       setCount(count);
//       console.log(count);
//     }
//     else if(count == -1){
//       alert("The value is becoming less than 0..");
//     }
//     else {
//       return ;
//     }
//   }
//   return (
//     <div className='main'>
//       <h1>Hello This is Rakesh ❤️</h1>
//       <h3>Value : {count}</h3>
//       <button className='btn' onClick={increaseValue}>Asign Value</button>
//       <br />
//       <button className='btn' onClick={decreaseValue}>Reduce Value</button>
//     </div>
//   )
// }

// const App = () => {
//   return (
//     <>
//       <h1 className="bg-orange-400 text-white font-extrabold text-5xl p-6 rounded-3xl  text-center w-[300px]">
//   Hello World!!
// </h1>

//     </>
//   )
// }



// const MyButton = ({color, onClick}) => {
//     return (
//       <button
//       style={{
//         backgroundColor: color,
//         color: color === "black" ? "white" : "black",
//         margin: "8px",
//         padding: "12px 24px",
//         border: "2px solid black",
//         borderRadius: "8px",
//         fontWeight: "bold",
//         fontSize: "1.2rem",
        
//       }}
//       onClick={onClick}
//     >
//       {color}
//     </button>

//     )
//   }

// const App = () => {
//   const [color, setColor] = useState("olive");
//   return (
//     <>
//       <div style={{
//         backgroundColor:color,
//         height:"100vh",
//         justifyContent:"center",
//         display:"flex",
//         }}>
//         <div>
//           <MyButton color="red" onClick={()=>{
//             setColor("red")
//           }}/>
//           <MyButton color="blue" onClick={()=>{
//             setColor("blue")
//           }}/>
//           <MyButton color="green" onClick={()=>{
//             setColor("green")
//           }}/>
//           <MyButton color="yellow" onClick={()=>{
//             setColor("yellow")
//           }}/>
//           <MyButton color="orange" onClick={()=>{
//             setColor("orange")
//           }}/>
//           <MyButton color="white" onClick={()=>{
//             setColor("white")
//           }}/>
//           <MyButton color="black" onClick={()=>{
//             setColor("black")
//           }}/>
//         </div>
//       </div>
//     </>
//   )
// }



// const App = () => {
//   return (
//     <div
//   style={{
//     height: "100vh",
//     backgroundColor: "#59546C",
//     display: "flex",
//     justifyContent: "center",
//     // alignItems: "center"
//   }}
// >
//   <div
//     style={{
//       margin: "16px",
//       height: "5rem",
//       width: "80%",
//       backgroundColor: "#FFFFFF",
//       border: "3px solid #3A3A3A",
//       borderRadius: "10px",
//       boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
//       display: "flex",
//       alignItems: "center",
//       justifyContent: "center",
//       fontSize: "1.5rem",
//       fontWeight: "600",
//       color: "#333"
//     }}
//   >
//     <input 
//     type="text"
//     style={{
//       width: "60%",
//       backgroundColor: "#8B939C",
//       border: "none",
//       borderRadius: "20px 4px 4px 20px",
//       color: "#000",
//       padding: "5px"
//     }}
//     name='Password'
//     placeholder='Password'
//     readOnly
//      />
//      <button style={{
//       backgroundColor:"blue",
//       padding : "6px",
//       borderRadius : "4px 20px 20px 4px",
//       cursor : "pointer"
//       }}>
//         Copy
//       </button>
//       <input type="range" /> Length
//   </div>
// </div>

//   )
// }


function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState("")

  //useRef hook
  const passwordRef = useRef(null)

  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (numberAllowed) str += "0123456789"
    if (charAllowed) str += "!@#$%^&*-_+=[]{}~`"

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
      
    }

    setPassword(pass)


  }, [length, numberAllowed, charAllowed, setPassword])

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 999);
    window.navigator.clipboard.writeText(password)
  }, [password])

  useEffect(() => {
    passwordGenerator()
  }, [length, numberAllowed, charAllowed, passwordGenerator])
  return (
    
    <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500">
      <h1 className='text-white text-center my-3'>Password generator</h1>
    <div className="flex shadow rounded-lg overflow-hidden mb-4">
        <input
            type="text"
            value={password}
            className="outline-none w-full py-1 px-3"
            placeholder="Password"
            readOnly
            ref={passwordRef}
        />
        <button
        onClick={copyPasswordToClipboard}
        className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'
        >copy</button>
        
    </div>
    <div className='flex text-sm gap-x-2'>
      <div className='flex items-center gap-x-1'>
        <input 
        type="range"
        min={6}
        max={100}
        value={length}
         className='cursor-pointer'
         onChange={(e) => {setLength(e.target.value)}}
          />
          <label>Length: {length}</label>
      </div>
      <div className="flex items-center gap-x-1">
      <input
          type="checkbox"
          defaultChecked={numberAllowed}
          id="numberInput"
          onChange={() => {
              setNumberAllowed((prev) => !prev);
          }}
      />
      <label htmlFor="numberInput">Numbers</label>
      </div>
      <div className="flex items-center gap-x-1">
          <input
              type="checkbox"
              defaultChecked={charAllowed}
              id="characterInput"
              onChange={() => {
                  setCharAllowed((prev) => !prev )
              }}
          />
          <label htmlFor="characterInput">Characters</label>
      </div>
    </div>
</div>
    
  )
}

export default App
