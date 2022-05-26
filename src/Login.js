import React,{Component} from "react";
import './App.css';

export class Login extends Component{
    render(){
        return(
<div>
 <main className="form-signin">           
    <form>
    <h1 className="h3 mb-3 fw-normal">Please sign in</h1>
    <div className="form-floating">
      <input type="email" className="form-control"  placeholder="name@example.com" required/>
      <label htmlFor="floatingInput">Email address</label>
    </div>
    <div className="form-floating">
      <input type="password" className="form-control" placeholder="Password" required/>
      <label htmlFor="floatingPassword">Password</label>
    </div>
    <div className="checkbox mb-3">
      <label>
        <input type="checkbox" value="remember-me"/> Remember me
      </label>
    </div>
        <button className="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>
    </form>
    </main>
</div>
  );
};
}
export default Login;

