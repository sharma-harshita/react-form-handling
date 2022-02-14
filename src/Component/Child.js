import React, {Component} from "react";

class Child extends Component{
    render(){
        return(
            <div>
                <h1>Child Component</h1>
                {this.props.propValue}
            </div>
        )
    }
}

export default Child