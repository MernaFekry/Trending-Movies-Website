import React,{useState,useEffect} from 'react';
import axios from 'axios';
import Joi from 'Joi';

const Login = () => {
    const [action, setAction] = useState("Sign Up");
    const [joiErrors, setJoiErrors] = useState(null);
    const [userData, setUserData] = useState({
        first_name:'',
        email:'',
        password:''
    });
    const [state, setstate] = useState(initialState);



    function handleSubmit(e){
        e.preventDefault();

        if(joiErrors == null){
            // add user
            //post request
            
        }
        else{
            console.log("Not Added");
        }


    }
    function getUser(e){
        let inputValue = e.target.value;
        let inputId = e.target.id;

        const temp = {...userData};

        temp[inputId] = inputValue;
        setUserData(temp);
        console.log(userData);
        
        const schema = Joi.object({
            first_name:Joi.string().alphanum().min(3).required(),
            email:Joi.string().email({minDomainSegments:2,tlds:{allow:['com','net']}}).required(),
            password:Joi.string().pattern(/^[a-z]{6,10}$/i ).required()
        })
        console.log(temp);

        let joiResponse = schema.validate(temp , {abortEarly:false});
        if(joiResponse.error == undefined)
        {
            handleSubmit();
        }
            
        let errorList = joiResponse.error.details;
        setJoiErrors(errorList);
    }


    return <>

        <div className="container p-5 bg-dark">
            <div className="row">
                <div className="col-12">
                    <div>
                        <h2>{action}</h2>
                    </div>
                </div>
            </div>

            <div className="row">
            
                <form action={handleSubmit}>


                    <div className="col-12">
                        <div>
                            <input id='first_name' type="text" placeholder='Name' onChange={getUser} />
                        </div>
                    </div>
                    <div className="col-12">
                        <div>
                            <input id='email' type="email" placeholder='E-mail'  onChange={getUser}/>
                        </div>
                    </div>
                    <div className="col-12">
                        <div>
                            <input id='password' type="password" placeholder='Password'  onChange={getUser}/>
                        </div>
                    </div>
                    <div className="col-12">
                        <div>
                            <button className='btn btn-primary' type='submit'>{action}</button>
                        </div>
                    </div>


                </form>
            
            </div>
        </div>
    
    
    </>
}

export default Login;
