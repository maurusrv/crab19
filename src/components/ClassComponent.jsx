import React from "react";

class ClassComponent extends React.Component {
  constructor(props) {
    console.log("Class Component constructs count.");
    super(props);
    this.state = { count: 0 };
  }

  // componentWillMount

  componentDidMount() {
    // side effect
    console.log("Class Component is mounted.");
  }

  componentDidUpdate (_, prevState) {
    // side effect
    console.log('Class Component is updated.')
    if (prevState.count % 2 === 0) {
      console.log('Count is even a while ago.')
    } else {
      console.log('Count is odd a while ago.') 
    }

    if (this.state.count % 2 !== 0) {
      console.log('Count is odd now.')      
    } else {
      console.log('Count is even now.') 
    }
  }

  componentWillUnmount() {
    // side effect
    console.log('Class Component is unmounted.')
  }

  onIncrement = () => {
    const { count } = this.state
    this.setState({ count: count + 1 })
  }

  render() {
    console.log("Class Component is rendered.");
    const { count } = this.state;
    return (
      <span style={{ color: "red", fontSize: 50 }}>
        {count}
        <button onClick={this.onIncrement}>+</button>
      </span>
    )
  }
}

export default ClassComponent;
