import logo from './logo.svg';
import './App.css';
import React, { Fragment, useState } from 'react';
// import Header from './components/Header';
// import Button from './components/Button';
import Form from './components/Form'
import ClassComponent from './components/ClassComponent';
import FunctionalComponent from './components/FunctionalComponent';

// const Code = () => {
//   const text = 'src/App.js'
//   return (
//     <code>{text}</code>
//   )
// }

// function Paragraph () {
//   return (
//     <p>
//       {'Edit'}
//       <Code /> 
//       {'and save to reload.'}
//     </p>
//   )  
// }

// function Image () {
//   return (
//     <img src={logo} className="App-logo" alt="logo" />
//   )
// }

// class Anchor extends React.Component {
//   // constructor(props) {
//   //   super(props)
//   // }

//   render() {
//     const { url } = this.props
//     return (
//       <a
//         className="App-link"
//         href={url}
//         target="_blank"
//         rel="noopener noreferrer"
//       >
//        {url} 
//       </a>
//     )
//   }
// }

// // Wrapping Method 1
// // const HeaderContent = () => (
// //   [
// //     <Image />,
// //     <Paragraph />,
// //     <Anchor />,
// //   ]
// // )

// // Wrapping Method 2: Fragment 
// const HeaderContent = () => (
//   <Fragment>
//     <Image />
//     <Paragraph />
//     <Anchor />
//   </Fragment> 
// )

// // Wrapping Method 3: Also fragment
// // const HeaderContent = () => (
// //   <>
// //     <Image />
// //     <Paragraph />
// //     <Anchor />
// //   </>
// // )

function App() {
  const [isClassComponentRemoved, setIsClassComponentRemoved] = useState(false)
  const [isFuncComponentRemoved, setIsFuncComponentRemoved] = useState(false)

//   const username = 'Tyler' // from api / backend
//   const url = 'https://avionschool.com'

  return (
    <div className="App">
      {!isClassComponentRemoved && <ClassComponent />}
      {!isFuncComponentRemoved && <FunctionalComponent />}
      <div>
        <button onClick={() => setIsClassComponentRemoved(true)}>Remove Class Component</button> 
        <button onClick={() => setIsFuncComponentRemoved(true)}>Remove Functional Component</button> 
      </div>
      {/* <Form></Form> */}
      {/* <header className="App-header">
        <HeaderContent />      
      </header> */}
      {/* <main>
        <Header username={username} />
        <Anchor url={url} />
        <Button />
      </main> */}
      {/* <footer>
        <FooterContentNull />
        <FooterContentString />
      </footer> */}
    </div>
  );
}

// const FooterContentNull = () => null
// const FooterContentString = () => 'This is a footer'

// A component can return a jsx tag, an array, a fragment, a react component, null, string

export default App;
