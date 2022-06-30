import React, { useState,useEffect } from "react";
import PropTypes from 'prop-types';
import { connect , useSelector} from "react-redux";
import { logoutUser } from "../actions/authActions";
import axios from "axios";
import { ToastContainer,toast } from "react-toastify";

const Dashboard = (props) =>{

    const [data,setData] = useState()
    const [user,setUser] = useState({name:'',img:''})

    const name =  useSelector( state=> state.auth.user.name);
    const img = "https://ui-avatars.com/api/?name="+name
   useEffect(()=>{
    toasty()
    setUser({name:name,img:img})
    
   },[])

   const toasty =()=>{
    toast.success('Welcome '+name)
   }

    
   


    const onLogout = e =>{
        e.preventDefault();
        props.logoutUser();
    }
    
        // const {user} = props.auth 
    return(
        

        <><h1>Hai {user.name} You are Logged In Successfully</h1>
        <img src={user.img} style={{borderRadius:"50%"}} alt={user.name}/>
        <button
            onClick={onLogout}
        >
            Logout
        </button>
        <ToastContainer/></>
    )

}

Dashboard.prototype = {
    logoutUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
};

const mapStateToProps = state =>({
    auth: state.auth
});

export default connect(mapStateToProps,{logoutUser})(Dashboard);