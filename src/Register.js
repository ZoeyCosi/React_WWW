import React, {SyntheticEvent, useState} from 'react';

const Register = () => {
    const[name, setName] = useState();
    const[email, setEmail] = useState();
    const[password, setPassword] = useState();

    const submit = (e: SyntheticEvent) => {
        console.log({
            name,
            email,
            password
        })
    }


        return(
<div>
 <main className="form-signin" id="main">
    <form onSubmit={submit}>
    <h1 className="h3 mb-3 fw-normal">Please Register</h1>

    <div className="form-floating">
      <input className="form-control"  placeholder="Name" required/>
      <label htmlFor="floatingInput">Name</label>
    </div>

    <div className="form-floating">
      <input type="email" className="form-control"  placeholder="name@example.com" required/>
      <label htmlFor="floatingInput">Email address</label>
    </div>

    <div className="form-floating">
      <input type="password" className="form-control" placeholder="Password" required/>
      <label htmlFor="floatingPassword">Password</label>
    </div>

        <button className="w-100 btn btn-lg btn-primary" type="submit">Submit</button>
    </form>
    </main>
</div>
  );
};
export default Register