import React,{useState,useEffect} from 'react';
import axios from 'axios';
import Joi from 'joi';
import './Login.css';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [action, setAction] = useState("Login");
    const [joiErrors, setJoiErrors] = useState(null);
    const [userData, setUserData] = useState({
        email:'',
        password:''
    });
    const [apiMessage, setApiMessage] = useState("");

    const navigate = useNavigate();

    function submitUser(e){
        // Default form submit => page refresh
        e.preventDefault();
        
        // 1.Validation
        const schema = Joi.object({
            email:Joi.string().email({minDomainSegments:2,tlds:{allow:['com','net']}}).required(),
            password:Joi.string().pattern(/^[a-z]{6,10}$/i ).required()
        })

        let joiResponse = schema.validate(userData , {abortEarly:false});


        if(joiResponse.error == undefined)
        {
            // data valid
            // call api
            SendUser();
        }
        else {
            let errorList = joiResponse.error.details;
            setJoiErrors(errorList);
            // console.log(joiErrors);
        }

    }
    

    async function SendUser(){
        const {data} = await axios.get("http://localhost:3030/users");
        
        console.log(data);
        
        for(let i=0;i<data.length;i++){
            if((data[i].email == userData.email) && (data[i].password == userData.password))
                //Redirect to Home
                navigate('/home');
        }

        if(data.message == "success"){
            // Redirect to home page
            // navigate('/home');
            console.log("Home");
        }
        else{
            // user already registered
            // console.log(data);
            setApiMessage( data.message );
        }
    }

    
    
    function getUser(e){
        let inputValue = e.target.value;
        let inputId = e.target.id;

        const temp = {...userData};

        temp[inputId] = inputValue;
        setUserData(temp);
        

        
        
    }




    return <>

        <div className="container p-5 bg-dark vh-100">
            <div className="row mb-4">
                <div className="col-12">
                    <div className='header'>
                        <h2 className='text-white text-center'>{action}</h2>
                    </div>
                </div>
            </div>

            <div className="row">

                { joiErrors == null ? "" : joiErrors.map( (err) =>  <div className='alert alert-warning'>{err.message}</div> ) }

                {/* {apiMessage.length == 0 ? "" : <div className='alert alert-danger'>{apiMessage}</div>} */}

                <form onSubmit={submitUser}>


                    <div className="col-12 mb-3">
                        <div>
                            <input className='form-control' id='email' type="email" placeholder='E-mail'  onChange={getUser}/>
                        </div>
                    </div>
                    <div className="col-12 mb-4">
                        <div>
                            <input className='form-control' id='password' type="password" placeholder='Password'  onChange={getUser}/>
                        </div>
                    </div>
                    <div className="col-12 d-flex justify-content-center">
                        <div>
                            <button className='btn btn-outline-secondary' type='submit'>{action}</button>
                        </div>
                    </div>


                </form>
            
            </div>
        </div>
    

    
    </>
}

export default Login;
