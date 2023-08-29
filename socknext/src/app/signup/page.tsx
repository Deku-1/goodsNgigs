"use client"
import Head from 'next/head';

import "../../../components/signup/logink.css"
import icon8 from '../../../components/photos/googlelogo.png'
import Grid from '@mui/material/Grid';
import { Card, ButtonBase} from '@mui/material';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import imageic from '../../../components/photos/My project.png'
import { useRouter } from 'next/navigation';
import { useState } from "react"
import { GoogleAuthProvider,signInWithPopup } from "firebase/auth";
import { auth } from "../../../components/utils/firebase";
import Icons from "../../../components/signup/icons";
import Image from "next/image";
function Cardsignup(){
  //sign in with googleprovider
  const googleprovider= new GoogleAuthProvider()
  const googlelogin=async () => {
    try {
          const result= await signInWithPopup(auth,googleprovider)
          console.log(result.user)
          console.log("hi sexy")
          navigate.push("/homepage");

    } catch (error) {
      console.log(error)
    }
    
  }
  const navigate=useRouter();
  const gotosignin=()=>{
    navigate.push('/signin')
  }
  const[username,setusername]=useState<string>('');
  const[password,setpassword]=useState<string>('');
  const[email,setemail]=useState<string>('');
  const handlesignup = async () => {
    const response = await fetch('http://localhost:3000/auth/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password, email})
    });
    const data = await response.json();
    if (data.token) {
        localStorage.setItem("token", data.token)
       navigate.push("/homepage");
    } else {
        alert("invalid credentials");
    }
};





    return(<>
    
    <link href="https://fonts.googleapis.com/css2?family=Borel&family=Caprasimo&family=Lato&family=REM&display=swap" rel="stylesheet" /> 
    <div style={{ height: "80vh", backgroundColor: "#0E4097", position: 'relative', marginTop: 70, marginLeft: 110, marginRight: 110, zIndex: 0 }}>
  
  </div>
 
  <div style={{ zIndex: 2, position: 'absolute', top: '4%', left: '55%', }}>
  <Card variant="outlined" style={{ height: 650, display: "flex", alignItems: "center", flexDirection: "column", width: 400, borderRadius: 0, backgroundColor: " #e6ffff" }}>
        <span style={{ fontFamily:'Borel, cursive',fontSize: 45, marginTop: 12, color: "#0E4097" }}>Sign Up</span>
        <Image src={imageic} alt="my image" style={{ height: 100, width: 200, marginTop: -20,paddingBottom:10  }} />
  {/* google */}
  <ButtonBase onClick={googlelogin} component={Card} elevation={2} sx={{ width:'80%', height:45}}>
<Image src={icon8} alt="lund" height={30} />
<span style={{ fontFamily: 'REM, sans-serif', fontSize: 15, color:"#000080" ,paddingLeft:10}}>Sign up with Google</span>
</ButtonBase>

<Grid container spacing={0} style={{ marginTop: 30, }}>
          <Grid item xs={5.5} style={{ display: "flex", alignItems: "center", flexDirection: "column",padding:0, }}>
          <hr style={ {  width:'57%',  height: 1, border: "none", borderTop: "2px solid #7ba2e4"   }}/>

          </Grid>
          <Grid item xs={1} style={{ display: "flex", alignItems: "center", flexDirection: "column",padding:0 }}>
          <span style={{ fontFamily: 'REM, sans-serif', fontSize: 15, color:"#000080" ,paddingLeft:10}}>OR</span>
          </Grid>
          <Grid item xs={5.5} style={{ display: "flex", alignItems: "center", flexDirection: "column",padding:0 }}>
          <hr style={ {  width: "57%",  height: 1, border: "none", borderTop: "2px solid #7ba2e4"   }}/>

          </Grid>
</Grid>
        <TextField id="standard-basic" value={username} onChange={(event:React.ChangeEvent<HTMLInputElement>)=>setusername(event.target.value)} label="Username" variant="standard" sx={{ width: '80%', marginTop: 1 }} InputLabelProps={{
          style: {
            color: 'blue', // Change the color of the label text
            fontSize: '18px', // Change the font size of the label text
            fontFamily: 'REM, sans-serif',

          },
        }}
        />
        <TextField id="standard-basic"  label="Email" value={email} onChange={(event:React.ChangeEvent<HTMLInputElement>)=>setemail(event.target.value)} variant="standard" sx={{ width: '80%', marginTop: 1 }} InputLabelProps={{
          style: {
            color: 'blue', // Change the color of the label text
            fontSize: '18px', // Change the font size of the label text
            fontFamily: 'REM, sans-serif', // Change the font family of the label text
            // Add any other custom styles for the label here
          },
        }} />
         <TextField id="standard-basic" type="password" value={password} onChange={(event:React.ChangeEvent<HTMLInputElement>)=>setpassword(event.target.value)} label="Password" variant="standard" sx={{ width: '80%', marginTop: 1 }} InputLabelProps={{
          style: {
            color: 'blue', // Change the color of the label text
            fontSize: '18px', // Change the font size of the label text
            fontFamily: 'REM, sans-serif', // Change the font family of the label text
            // Add any other custom styles for the label here
          },
        }} />
        <Button variant="contained" onClick={handlesignup} style={{ borderRadius: 0, fontFamily: 'REM, sans-serif', }} sx={{ width: '80%', height: 40, marginTop: 4 }} >Sign Up</Button>
        <span  onClick={gotosignin} className="fontify" style={{ padding:0,marginTop:15,cursor: 'pointer',fontSize: 18, color: "#0E4097" }}>Already a homie?
            </span>
        <hr
          style={{
            width: "90%", 
            height: 1,
            border: "none",
            // Remove the default border
            borderTop: "2px solid #7ba2e4" // Set the color of the line
          }}

        />
        <br />
        <Grid container spacing={2} style={{ marginTop: 0, }}>
          <Grid item xs={6} style={{ padding:0,display: "flex", alignItems: "center", flexDirection: "column", }}>
            <span className="fontify" style={{ fontSize: 15, color: "#0E4097" }}  > <a href="/fuckYouChangePassword" style={{ textDecoration: "none" }}>Forgot password?</a></span>

          </Grid>
          <Grid item xs={6} style={{ padding:0,display: "flex", alignItems: "center", flexDirection: "column", }}>
            <span className="fontify" style={{ fontSize: 15, color: "#0E4097" }}  > <a href="/fuckYouChangePassword" style={{ textDecoration: "none" }}>About us</a></span>
          </Grid>
        </Grid>
      </Card>
  </div>
  <Icons />  
    </>)
}
export default Cardsignup