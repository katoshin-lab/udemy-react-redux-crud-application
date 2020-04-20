import React from 'react';
import PropTypes from 'prop-types';

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
          return <User name={profile.name} age={profile.age} key={index} />  // ユーザーのコンポーネントにpropsを渡す
        })
      }
    </div>
  )
}

const User = (props) => {
  return <div>hi, I am { props.name }, and { props.age } years old.</div>
}

// 情報が欠落している時のpropsの設定
// User.defaultProps = {
//   age: 1
// }

User.propTypes = {          // 型チェック warn出る
  name: PropTypes.string,
  age: PropTypes.number.isRequired
}

export default App;
