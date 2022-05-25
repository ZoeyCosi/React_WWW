
import React,{Component} from "react";
import {variable} from './Variable.js';

export class TaxonomicRank extends Component{
// super is used to call the constructor of the parent class
    constructor(props){
        super(props);

        // added tranks array to populate data from taxonomic ranks database
        // isLoaded boolean to check if connected to database
        this.state={
            tranks:[],
            isLoaded: false,
            modalTitle:"",
            item:{}


        }
    }
    // method to refresh data from teh get api method of taxonomic rank
    // setting isLoaded boolean to true to not display isLoading
    refreshList(){
        fetch(variable.API_URL + "taxonomicranks")
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

    // calling to refresh list
    componentDidMount(){
        this.refreshList();
    }
    // all three different methods to set the values of each variable through the modal window
    changeName =(e)=>{
        this.setState({Name:e.target.value});
    }

    changeDescription =(e)=>{
        this.setState({Description:e.target.value});
    }
    
    changePhoto =(e)=>{
        this.setState({PhotoURL:e.target.value});
    }
    // got rid of add click call
    addClick(){
        this.setState({
            modalTitle:"Add",
            Id:0,
            Name:"",
        });
    }

    // Included all the variables that will be changed through edit
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
    // got rid of create click call
    createClick(){
        fetch(variable.API_URL+"taxonomicranks",{
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
    // update click method grabs ID to 
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
        fetch(variable.API_URL+"taxonomicranks/"+Id,{
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
    // got rid of delete click call
    deleteClick(Id, obj){
        let a = this.state.tranks;
       let b =  a.filter(item=>item!=obj);
       this.setState({tranks:b});
        fetch(variable.API_URL+"taxonomicranks/"+Id,{
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
    
    // listed all the variables used and set conditional statement to check if data is loaded
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
                
                
                    <table className="table container table-responsive">
                    <colgroup>
                        <col className="col1" span="4"/>
                    </colgroup>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Description</th>
                                <th>Photo</th>
                                <th>Options</th>
                            </tr>
                        </thead>
                        <tbody id="test">
                            {tranks.map(trank=>
                            <tr key={trank.Id}>
                                <td id="trankName">{trank.Name}</td>
                                <td id="trankDesc">{trank.Description}</td>
                                <td><img src={trank.PhotoURL} width="300" height="220"/></td>
                                <td>
                                    <button type="button" className="btn btn-warning"
                                    data-bs-toggle="modal"
                                    data-bs-target="#exampleModal"
                                    onClick={()=>this.editClick(trank)}>
                                        Edit
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