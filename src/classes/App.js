
import React, { Component }  from "react";
import countries from "./cont"

export default class App extends Component{
    constructor() {
        super() 
        this.state = {
            countries:[]
        }

    }
    static getDerivedStateFromProps(props, state) {
        //new updated state based upon props
        
    }

    getSnapshotBeforeUpdate(){
        //create a backup of the current way the things
    }
    // componentWillMount(){
    // are removed
    // }
    componentDidMount() {
        // get the data from an external source to get the data i need to display correctly
     
        this.setState({countries})
    }
    //  componentDidMount() {
    //      get the data from an external source to get the data i need to display correctly
    // }

    // componentWillReceiveProps(nextProps) {
       // if (nextProp.whatever !== this.prop.whatever){
           //do something here
    //    }
    // }

    shouldComponentUpdate(nextProps, nextState){
       // return true if it want to update
       //return false if not
    }

    // componentWillUpdate(){

    // }

    componentWillUnmount(){
        // clean up your code before your component disappears
        // like removeEventListener
    }


    render() {
        console.log({countries: this.state.countries})
        const {countries} = this.state
        return (
            <div>   
                {countries && countries.map((item,i)=><li key={i}>{item.country}</li>)}
            </div>
        )
    }
}