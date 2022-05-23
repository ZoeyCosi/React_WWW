import React,{Component} from "react";
import {variable} from './Variable.js';

export class TaxonomicRank extends Component{

    constructor(props){
        super(props);

        this.state={
            tranks:[],
            isLoaded: false,
            modalTitle:"",


        }
    }

    refreshList(){
        fetch(variable.API_URL + "taxonomicranks")
        .then(response=>response.json())
        .then(data => {
            this.setState({
                tranks:data,
                isLoaded: true,
                Name:"",
                Id:0
            })
        });
    }

    componentDidMount(){
        this.refreshList();
    }

    changeName =(e)=>{
        this.setState({Name:e.target.value});
    }

    addClick(){
        this.setState({
            modalTitle:"Add Domain",
            Id:0,
            Name:""
        });
    }

    editClick(trank){
        this.setState({
            modalTitle:"Edit Domain",
            Id:trank.Id,
            Name:trank.Name
        });
    }

    createClick(){
        fetch(variable.API_URL+"taxonomicranks",{
            method:"POST",
            headers:{
                "Accept":"application/json",
                "Content-Type":"application/json"                
            },
            body:JSON.stringify({
                Name:this.state.Name
            })
        })
        .then(response=>response.json())
        .then((result)=>{
            this.refreshList();
        },(error)=>{
            alert("Failed");
        })
    }

    updateClick(){
        fetch(variable.API_URL+"taxonomicranks",{
            method:"PUT",
            headers:{
                "Accept":"application/json",
                "Content-Type":"application/json"                
            },
            body:JSON.stringify({
                Id:this.state.Id,
                Name:this.state.Name
            })
        })
        .then(response=>response.json())
        .then((result)=>{
            this.refreshList();
        },(error)=>{
            alert("Failed");
        })
    }

    deleteClick(Id){
        if(window.confirm("Are you sure?")){
        fetch(variable.API_URL+"taxonomicranks/"+Id,{
            method:"DELETE",
            headers:{
                "Accept":"application/json",
                "Content-Type":"application/json"                
            }
        })
        .then(response=>response.json())
        .then((result)=>{
            this.refreshList();
        })
    }
    }

    render(){

        var {
            isLoaded,
            modalTitle, 
            tranks,
            Name,
            Id
        } = this.state;

        if (!isLoaded)
        {
            return <div>Loading...</div>
        }
        else
        {
            return(
                <div>
                    <button type="button" id="addButton"
                    className="btn btn-primary m-2 float-end"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                    onClick={()=>this.addClick()}>
                        Add Domain
                    </button>
                    <table className="table container">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Description</th>
                                <th>photoPath</th>
                                <th>Options</th>
                            </tr>
                        </thead>
                        <tbody id="test">
                            {tranks.map(trank=>
                            <tr key={trank.Id}>
                                <td>{trank.Name}</td>
                                <td>{trank.Description}</td>
                                <td>{trank.PhotoURL}</td>
                                <td>
                                    <button type="button" className="btn btn-warning"
                                    data-bs-toggle="modal"
                                    data-bs-target="#exampleModal"
                                    onClick={()=>this.editClick(trank)}>
                                        Edit
                                    </button>
                                    <button type="button" className="btn btn-danger"
                                    onClick={()=>this.deleteClick(trank.Id)}>
                                        Delete
                                    </button>
                                </td>
                            </tr>
                            )}
                        </tbody>
                    </table>
                    <div className="modal fade" id="exampleModal" tabIndex="-1" aria-hidden="true">
                    <div className="modal-dialog modal-lg modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-title">
                            <h5 className="modal-title">{modalTitle}</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close">
                            </button>
                        </div>

                        <div className="modal-body">
                            <div className="input-group mb-3">
                                <span className="input-group-text">Name</span>
                                <input type="text" className="form-control"
                                value={Name}
                                onChange={this.changeName}/>
                            </div>

                            {Id==0?
                            <button type="button"
                            className="btn btn-primary float-start"
                            onClick={()=>this.createClick()}
                            >Create</button>
                            :null}
                            
                            {Id!=0?
                            <button type="button"
                            className="btn btn-primary float-start"
                            onClick={()=>this.updateClick()}
                            >Update</button>
                            :null}

                        </div>

                    </div>
                    </div>
                    </div>
                </div>
            )
        }     
    }
}