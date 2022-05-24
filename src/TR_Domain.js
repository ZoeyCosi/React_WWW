import React,{Component} from "react";
import {variable} from './Variable.js';

export class TR_Domain extends Component{

    constructor(props){
        super(props);

        this.state={
            tranks:[],
            isLoaded: false,
            modalTitle:"",
            item:{}


        }
    }
    refreshList(){
        fetch(variable.API_URL + "TR_domain")
        .then(response=>response.json())
        .then(data => {
            this.setState({
                tranks:data,
                isLoaded: true,
                Name:"",
                Id:0,
                Description:"",
                PhotoURL:""
            })
        });
    }

    componentDidMount(){
        this.refreshList();
    }

    changeName =(e)=>{
        this.setState({Name:e.target.value});
    }

    changeDescription =(e)=>{
        this.setState({Description:e.target.value});
    }
    
    changePhoto =(e)=>{
        this.setState({PhotoURL:e.target.value});
    }
    addClick(){
        this.setState({
            modalTitle:"Add Domain",
            Id:0,
            Name:"",
        });
    }
    editClick(trank){
        this.setState({
            modalTitle:"Edit",
            Id:trank.Id,
            Name: trank.Name,
            Description: trank.Description,
            PhotoURL:trank.PhotoURL,
            item:trank
        });
    }

    createClick(){
        fetch(variable.API_URL+"TR_domain",{
            method:"POST",
            headers:{
                "Accept":"application/json",
                "Content-Type":"application/json"                
            },
            body:JSON.stringify({
                Name:this.state.Name,
                Description:this.state.Description,
                PhotoURL:this.state.PhotoURL,
            })
        })
        .then(response=>response.json())
        .then((result)=>{
            this.refreshList();
        },(error)=>{
            alert("Failed");
        })
    }

    updateClick(Id){
        let index = this.state.tranks.indexOf(this.state.item);
        let obj = this.state.tranks;
        obj[index].Name = this.state.Name;
        let a = this.state.item;
        a.Name = this.state.Name;
        a.Description = this.state.Description;
        a.PhotoURL = this.state.PhotoURL;
        this.setState({tranks:obj});
        
        console.log(obj);       
        
        this.state.tranks[index].Name = this.state.Name;
        fetch(variable.API_URL+"TR_domain/"+Id,{
            method:"PUT",
            headers:{
                "Accept":"application/json",
                "Content-Type":"application/json"                
            },
            body:JSON.stringify(a)
        })
        .then(response=>response.json())
        .then((result)=>{
            this.refreshList();
        })
    }
    deleteClick(Id, obj){
        let a = this.state.tranks;
       let b =  a.filter(item=>item!=obj);
       this.setState({tranks:b});
        fetch(variable.API_URL+"TR_domain/"+Id,{
            method:"DELETE",
            headers:{
                "Accept":"application/json",
                "Content-Type":"application/json"                
            }
        })
        .then(response=>response.json(this.deleteClick))
        .then((result)=>{
            this.refreshList();
            
        })
    }

    render(){

        var {
            isLoaded,
            modalTitle, 
            tranks,
            Name,
            Id,
            Description,
            PhotoURL
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
                        Add
                    </button>
                    <table className="table container table-responsive">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th id="table">Description</th>
                                <th>Photo</th>
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
                                    onClick={()=>this.deleteClick(trank.Id, trank)}>
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

                            <div className="input-group mb-3">
                                <span className="input-group-text">Description</span>
                                <input type="text" className="form-control"
                                value={Description}
                                onChange={this.changeDescription}/>
                            </div>

                            <div className="input-group mb-3">
                                <span className="input-group-text">Photo</span>
                                <input type="text" className="form-control"
                                value={PhotoURL}
                                onChange={this.changePhoto}/>
                            </div>
                           

                            {Id===0?
                            <button type="button"
                            className="btn btn-primary float-start"
                            onClick={()=>this.createClick()}
                            >Create</button>
                            :null}
                            
                            {Id!==0?
                            <button type="button"
                            className="btn btn-primary float-start"
                            onClick={()=>this.updateClick(Id)}
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