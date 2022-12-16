import React from "react";

class Digitalwatch extends React.Component{
    constructor(props){
        super(props)
        this.state={
            currentTime:new Date().toLocaleTimeString()
        }
    }
    componentDidMount(){
        this.timer=setInterval(()=>{
            this.setState({
                currentTime:new Date().toLocaleTimeString()
            })
        },1000 )
    }
    componentWillUnmount(){
        clearInterval(this.timer)
    }
    render(){
        return(
            <React.Fragment>
<div className="container">
<div className="row">
<div className="col-md-4">
<div className="card">
<div className="card-header">
<p className="h4">Digitalwatch</p>
<div className="card-body bg-primary">
<small className="display-4">{this.state.currentTime}</small>
</div>
</div>

</div>

</div>

</div>

</div>
            </React.Fragment>
        )
    }
}
export default Digitalwatch;