import { useCallback, useState, useEffect } from 'react'

function App() {
  
  const [password, setPassword] = useState("");
  const [length, setLength] = useState(8);
  const [num, setNum] = useState(false);
  const [char, setChar] = useState(false);

  const passwordGen = useCallback(() => {
    let pass = '';
    let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    if (num) str += "0123456789";
    if (char) str += "!@#$%^&*()_+-=[]{}|;':,./<>?";

    for(let i = 1 ; i<=length ; i++){
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }

    setPassword(pass);

  }, [length, num, char, setPassword]);

  useEffect(() => {
    passwordGen()
  }, [length, num, char, passwordGen])

  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-700 text-center py-4">
      <h1 className="text-white mb-3">Password Generator</h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input 
          value={password}
          className="outline-none w-full py-1 px-3"
          placeholder='password'
          readOnly
          type="text" 
          />
          <button className='outline-none text-white bg-blue-600 p-1 px-3 shrink-0'>Copy</button>
        </div>
        <div className="flex text-sm gap-x-2">
          <div className="flex items-center gap-x-1">
            <input type="range" min={6} max={25} value={length} className='cursor-pointer' onChange={(e) => {setLength(e.target.value)}}/>
            <label>Length: {length}</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input type='checkbox' defaultChecked={num} onChange={()=>{setNum((prev) => !prev)}}/>
            <label>Numbers</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input type='checkbox' defaultChecked={char} onChange={()=>{setChar((prev) => !prev)}}/>
            <label>Characters</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
