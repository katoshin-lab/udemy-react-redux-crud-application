import React, { Component } from 'react';

// class component

// class App extends Component {
//   render() {
//     return (
//       <React.Fragment>
//         <label htmlFor="bar">bar</label>
//         <input type="text" onClick={() => {console.log("I am clicked.")}}></input>
//       </React.Fragment>
//     ) 
//   }
// }

// functional component
const App = () => {
  const profiles = [
    { name: "Taro", age: 10 },
    { name: "Hanako", age: 5 },
    { name: "Noname"}
  ]
  return(
    <div>
      {
        profiles.map((profile, index) => {
          return <User name={profile.name} age={profile.age} key={index} />
        })
      }
      {/* <User name={"Taro"} age={10} />
      <User name={"Hanako"} age={5} /> */}
    </div>
  )
}

const User = (props) => {
  return <div>hi, I am { props.name }, and { props.age } years old.</div>
}

// 情報が欠落している時のpropsの設定
User.defaultProps = {
  age: 1
}

export default App;
