import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';
// import { Link } from '@material-ui/core';
import Link from 'next/link';
import { useState } from 'react';
import Router from 'next/router';

const styles = theme => ({
    button: {
     margin:'10px'
    },
    Login :{
      backgrounColor: '#fff',
      minHeight: '381px',
      width: '400px',
      margin: '40px auto'
    }

      
  });


function Login(){
  const [userID,setUserID] = useState("");
  const [password,setPassword]= useState("");

  // const router = useRouter();
  // const { classes } = props;

  const verifyUser=()=>{
    if (userID === localStorage.getItem("email") && password === localStorage.getItem("password")){
      alert("Login Successful");
      Router.push("/Component/Profile");
      
    }
    else{
      alert("Please Enter correct username and password")
    }
  }
  const doRegister = () => {
    Router.push("/Component/Register");
  }
    return(
        <Card className="Login">
          <CardHeader  title="Login Page" titleTypographyProps="Login Page">
            
          </CardHeader>
        
          <CardContent className="cardContent">
            <TextField id="user_id" label="User Id" variant="outlined" color="primary" className="userid" style={{padding:9}}
            value={userID} onChange={event => setUserID(event.target.value)}/>
            <TextField type="password" id="password" label="Password" variant="outlined" color="primary" className="password"style={{padding:9}}
            value={password} onChange={event => setPassword(event.target.value)}/>
            
              <div className="buttonClass">
                <Button variant="contained" color="primary"  type="submit" style={{padding:9}} onClick={verifyUser}>Login</Button>
                <Button variant="contained" color="primary"  type="submit" style={{padding:9}} onClick={doRegister}>Register</Button>
              </div>
              

              
              
              {/* <RoutingExample /> */}
          </CardContent>
          
  
        </Card>
        
        
    )
}

export default Login;