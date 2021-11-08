import React  from "react";
import Function from "./funtions ";
class App extends React.Component{
    constructor() {
        super()
        this.state={
            isLoading:true
        }
    }
    componentDidMount(){
        setTimeout(() =>{
            this.setState({
                isLoading:false
            })
        }, 1500)
    }
    render() {
        return(
            <div>
                {this.state.isLoading ? 
            <h1>Loading....</h1>  :
            <Function/>
            }
                     
            </div>
           
        )
    }
}


export default App;