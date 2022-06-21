import logo from './logo.svg';
import './App.css';
import React, { Fragment } from 'react';
import Header from './components/Header';
import Button from './components/Button';

const Code = () => {
  const text = 'src/App.js'
  return (
    <code>{text}</code>
  )
}

function Paragraph () {
  return (
    <p>
      {'Edit'}
      <Code /> 
      {'and save to reload.'}
    </p>
  )  
}

function Image () {
  return (
    <img src={logo} className="App-logo" alt="logo" />
  )
}

class Anchor extends React.Component {
  render() {
    return (
      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
      </a>
    )
  }
}

// Wrapping Method 1
// const HeaderContent = () => (
//   [
//     <Image />,
//     <Paragraph />,
//     <Anchor />,
//   ]
// )

// Wrapping Method 2: Fragment 
const HeaderContent = () => (
  <Fragment>
    <Image />
    <Paragraph />
    <Anchor />
  </Fragment> 
)

// Wrapping Method 3: Also fragment
// const HeaderContent = () => (
//   <>
//     <Image />
//     <Paragraph />
//     <Anchor />
//   </>
// )

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <HeaderContent />      
      </header> */}
      <main>
        <Header />
        <Button />
      </main>
      {/* <footer>
        <FooterContentNull />
        <FooterContentString />
      </footer> */}
    </div>
  );
}

const FooterContentNull = () => null
const FooterContentString = () => 'This is a footer'

// A component can return a jsx tag, an array, a fragment, a react component, null, string

export default App;
