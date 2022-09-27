import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [data, setData] = useState([]);
  const [namess, setNamess] = useState([]);

  for (let i = 1; i <= 100; i++) {
     
      let output = ''
      if (i % 3 === 0) {
          output += 'Fizz'
      }
      if (i % 5 === 0) {
          output += 'Buzz'
      }
    //  console.log(output || i)
    
  }

  /////////////////////  
  const obj = {  
  id1: {
    name: 'John',
    age: 30,
    city: 'New York'
  },
  id2: {
    name: 'Tim',
    age: 10,
    city: 'New York'
  },
  id3: {
    name: 'David',
    age: 25,
    city: 'New York'
  }
}

 // console.log(obj);

  const keys = Object.keys(obj);

  //  let arr = [];
  //  keys.map(el => {
  //     arr.push(obj[el]);

  //  }) 
   // console.log(arr);
   const fn = (arr) => {
    const newArr = arr.map(el => {
      return el.age;
    })
  //  console.log(newArr);
   
  }
  
  useEffect(() => {
    let arr = [];
    keys.map(el => {
       arr.push(obj[el]);
 
    })
   // console.log(arr);
    const result = arr.map(el => {
       return el.name
     })
     setData(result);
  }, [])

  // console.log(data);

 const miArr = [4, 15, 80, 10, 1, 8, 23]
 const names = ['tom', 'david', 'tina', 'alexa', 'delta', 'claude', 'james', 'patrick']
 // console.log(names);
 
 const orderNames = names.sort((a, b) => {
  if (a > b) {
    return 1;
  }
  if (a < b) {
    return -1;
  }
  return 0;
  })
 // console.log(orderNames);
    
  useEffect(() => {
      setNamess(orderNames.join(', '));
  }, [])
  
//////////////////// 
 const orderArr = miArr.sort((a, b) => a - b);
  // console.log(orderArr);

//////////////////  

 // console.log(new Date().toLocaleDateString());

 const d = new Date();
let day = d.getDate();

// console.log(day);

const month = d.getMonth() + 1;
// console.log(month);
 






  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
         <ul>
            {data && data.map((el, index) => {
              return <li key={index}>{el}</li>
            })}
         </ul>
        </a>
        {/* <ul>
        {namess && namess.map((el, index) => {
          return <li key={index}>{el}</li>
        })}
        
      </ul> */}
      <p style={{textTransform: 'capitalize'}}>{namess}</p>
       <h3 style={{margin: '0'}}>{new Date().toLocaleDateString()}</h3>
        <h4 style={{margin: '0'}}>The month is {month}</h4>
      </header>

    </div>
  );
}

export default App;
