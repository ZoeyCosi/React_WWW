import React,{Component} from "react";
import {variable} from './Variable.js';

export class TaxonomicRank extends Component{

    constructor(props){
        super(props);

        this.state={
            tranks:[],
            isLoaded: false,
        }
    }

    refreshList(){
        fetch(variable.API_URL + "taxonomicranks")
        .then(response=>response.json())
        .then(data => {
            this.setState({
                tranks:data,
                isLoaded: true,
            })
        });
    }

    componentDidMount(){
        this.refreshList();
    }

    render(){

        var {isLoaded, tranks} = this.state;

        if (!isLoaded)
        {
            return <div>Loading...</div>
        }
        else
        {
            return(
                <div>
                    <table className="table container">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Description</th>
                                <th>photoPath</th>
                            </tr>
                        </thead>
                        <tbody id="test">
                            {tranks.map(trank=>
                            <tr key={trank.Id}>
                                <td>{trank.Name}</td>
                                <td>{trank.Description}</td>
                                <td>{trank.PhotoURL}</td>
                            </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            )
        }     
    }
}