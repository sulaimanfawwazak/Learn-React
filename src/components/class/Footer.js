// This is called "Class Component", while the "Navbar.js" and "MyButton.js" is called "Functional Component"
import React from "react";

class Footer extends React.Component {
  constructor(props) {
    super(props)
  }
  
  render () {
    return (
      <div>
        {/* <h1>My Footer {this.props.paragraph()}</h1> */}
        <h1>My Footer</h1>
        {this.props.paragraph()}
      </div>
    )
  }
}

export default Footer;