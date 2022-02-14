import React, {Component} from "react";
import Child from "./Child";
import axios from "axios";

class Parent extends Component{

    componentDidMount () {
        axios.get("http://localhost:8000/api/v1/employee/details")
            .then((res)=>{
                console.log(res);
            })
    }

    render(){
        return(
            <div>
                <h1>ParentComponent</h1>
                <Child propValue="Elevation Academy"/>
            </div>
        )
    }
}

export default Parent