import { Component } from "react";
import axios from "axios"
import { toast } from "react-toastify"
toast.configure()

class LookInside extends Component {

    state = {
        id: this.props.match.params.id,
        config: {
            headers: { 'authorization': `Bearer ${localStorage.getItem('token')}` }
        },
        allItem: []
    }

    //load with content
    componentDidMount() {
        axios.get('http://localhost:90/content/singleInfodata/' + this.state.id)
            .then((response) => {
                console.log(response)
                this.setState({
                    allItem: response.data.data
                })
            })
            .catch((err) => {
                alert(err)
            })
    }

    render() {
        return (
            <div className="container" style = {{fontSize : "30px"}}>
                <div className="row">
                    <p >Title : </p>
                    {this.state.allItem.heading}
                    <hr/>
                    <p>Category : </p>
                    {this.state.allItem.categories}
                    <hr/>
                    <p>Description : </p>
                    {this.state.allItem.content_description}
                    <hr/>
                    <p>POSTED AT : </p>
                    {this.state.allItem.postedAt}
                    <hr />
                    <p>Price : </p>
                    {this.state.allItem.price}
                    <hr/>
                </div>
            </div>
        )
    }
}
export default LookInside;

