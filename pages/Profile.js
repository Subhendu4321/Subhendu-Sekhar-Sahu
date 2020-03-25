import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';
import Link from 'next/link';
import Router from 'next/router';
import { makeStyles } from '@material-ui/core/styles';
import { useState } from 'react';
import FormDialog from './Dialog';




const useStyles = makeStyles(theme => ({
    Profile:{
      backgroundColor: '#fff',
      minHeight: '381px',
      width: '400px',
      margin: '40px auto'
    },
    CardContent:{
        display: 'flex',
        justifyContent : 'center',
        flexDirection : 'column'
    },
    ButtonClass:{
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        
    },
    button: {
        margin:'10px'
    }
  }));


function Profile(){

    const [isopen,setIsopen] = useState(false);

    const classes = useStyles();

    const getName = () =>{
        const fullName= localStorage.getItem("firstName") +" " +localStorage.getItem("lastName");
        return fullName;

    };
    const doBack = () =>{
        Router.push("/Login");;

    };
    const doEdit =() =>{
        setIsopen(!isopen);
    }


    return(
        <Card className={classes.Profile}>
                <CardHeader className="header" title="Profile Page" titleTypographyProps="Profile Page">
                

                </CardHeader>
                    <CardContent className={classes.CardContent}>
                        <TextField id="Name" label="Name" variant="outlined" color="primary" className="userid" style={{padding:9}}
                        value={getName()}
                        />
                        
                        <TextField id="phoneNum" label="Phone Number" variant="outlined" color="primary" className="password"style={{padding:9}}
                        value={localStorage.getItem("phoneNum")}
                        />
                        <TextField id="email_id" label="Email Id" variant="outlined" color="primary" className="userid" style={{padding:9}}
                        value = {localStorage.getItem("email")}
                        />

                        <div className={classes.ButtonClass}>
                            <Button variant="contained" color="primary" className={classes.button} type="submit" style={{padding:9}} onClick={doBack}>Back</Button>
                        
                        </div>
                        <div className={classes.ButtonClass}>
                            <Button variant="contained" color="primary" className={classes.button} type="submit"  style={{padding:9}} onClick={doEdit}>Edit</Button>
                        
                        </div>
                    </CardContent>
                    <FormDialog  isopen={isopen} onEdit={doEdit}/>


                
                {/* <FormDialog />  */}

            </Card>

    )
}

export default Profile;