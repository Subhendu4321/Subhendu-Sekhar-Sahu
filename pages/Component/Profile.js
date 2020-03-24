import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';
import Link from 'next/link';
import Router from 'next/router';



function Profile(){

    const getName = () =>{
        const fullName= localStorage.getItem("firstName") +" " +localStorage.getItem("lastName");
        return fullName;

    };
    const doBack = () =>{
        Router.push("/Component/Login");;

    }

    return(
        <Card >
                <CardHeader className="header" title="Profile Page" titleTypographyProps="Profile Page">
                

                </CardHeader>
                    <CardContent className="cardContent">
                        <TextField id="Name" label="Name" variant="outlined" color="primary" className="userid" style={{padding:9}}
                        value={getName()}
                        />
                        
                        <TextField id="phoneNum" label="Phone Number" variant="outlined" color="primary" className="password"style={{padding:9}}
                        value={localStorage.getItem("phoneNum")}
                        />
                        <TextField id="email_id" label="Email Id" variant="outlined" color="primary" className="userid" style={{padding:9}}
                        value = {localStorage.getItem("email")}
                        />

                        <div className="buttonClass">
                            <Button variant="contained" color="primary"  type="submit" style={{padding:9}} onClick={doBack}>Back</Button>
                        
                        </div>
                        <div className="buttonClass">
                            <Button variant="contained" color="primary"  type="submit"  style={{padding:9}}>Edit</Button>
                        
                        </div>
                    </CardContent>


                
                {/* <FormDialog />  */}

            </Card>

    )
}

export default Profile;