import "./logink.css"
import topright from '../../photos/My project (1).png'
import icon1 from '../../photos/icontrimmed3.png'
import icon2 from '../../photos/iconpp.png'
import icon3 from '../../photos/My project (2).png'
import icon4 from '../../photos/iconppp.png'
import icon5 from '../../photos/My project (3).png'
import icon7 from '../../photos/imagepo.png'
import icon8 from '../../photos/googlelogo.png'
import Grid from '@mui/material/Grid';
import { Card, ButtonBase } from '@mui/material';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import imageic from '../../photos/My project.png'
import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
function Cardlogin(){
  const navigate = useNavigate();
    const gotosignup=()=>{
        navigate('/signup')
    }
  const[username,setusername]=useState<string>('');
  const[password,setpassword]=useState<string>('');
  const handleLogin = async () => {
    const response = await fetch('http://localhost:3000/auth/signin', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password })
    });
    const data = await response.json();
    if (data.token) {
        localStorage.setItem("token", data.token)
       navigate("/homepage");
    } else {
        alert("invalid credentials");
    }
};




    return(<>
    <div style={{ height: "80vh", backgroundColor: "#0E4097", position: 'relative', marginTop: 70, marginLeft: 110, marginRight: 110, zIndex: 0 }}>
  
  </div>
 
  <div style={{ zIndex: 2, position: 'absolute', top: '4%', left: '55%', }}>
  <Card variant="outlined" style={{ height: 650, display: "flex", alignItems: "center", flexDirection: "column", width: 400, borderRadius: 0, backgroundColor: "#ecf2f9" }}>
        <span className="fontify" style={{ fontSize: 45, marginTop: 12, color: "#0E4097" }}>Log In</span>
        <img src={imageic} alt="my image" style={{ height: 100, width: 200, marginTop: -20,paddingBottom:10 }} />
      {/* google */}
<ButtonBase component={Card} elevation={2} sx={{ width:'80%', height:45}}>
<img src={icon8} alt="lund" style={{height:30,}}/>
<span style={{ fontFamily: 'REM, sans-serif', fontSize: 15, color:"#000080" ,paddingLeft:10}}>Sign in with Google</span>
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
        <TextField id="standard-basic"value={username} onChange={(x)=>setusername(x.target.value)} label="Username" variant="standard" sx={{ width: '80%',  }} InputLabelProps={{
          style: {
            color: 'blue', 
            fontSize: '18px', 
            fontFamily: 'REM, sans-serif',

          },
        }}
        />
        <TextField id="standard-basic" type="password" value={password} onChange={(x)=>setpassword(x.target.value)} label="Password" variant="standard" sx={{ width: '80%', marginTop: 1 }} InputLabelProps={{
          style: {
            color: 'blue', 
            fontSize: '18px', 
            fontFamily: 'REM, sans-serif', 
          },
        }} />
        <Button onClick={handleLogin} variant="contained" style={{ borderRadius: 0, fontFamily: 'REM, sans-serif', }} sx={{ width: '80%', height: 40, marginTop: 4 }} >login</Button>
      
            <span  onClick={gotosignup} className="fontify" style={{ cursor: 'pointer',paddingTop:20,fontSize: 21, color: "#0E4097" }}>New? Join us.
            </span>
          {/* <Grid item xs={6} style={{ display: "flex", alignItems: "center", flexDirection: "column", }}>

            <span className="fontify" style={{ fontSize: 20, paddingTop: 12, color: "#0E4097" }}>Be Anonymous!</span>
            <Button variant="contained" style={{ paddingLeft: 20, borderRadius: 0, fontFamily: 'REM, sans-serif', }} sx={{ width: '70%', height: 40, boxShadow: 15, }} >guest</Button>

          </Grid> */}
        <hr style={ {  width: "90%",  height: 1, border: "none", borderTop: "2px solid #7ba2e4"   }}/>
        <br />
        <Grid container spacing={2} style={{ marginTop: 0, }}>
          <Grid item xs={6} style={{ display: "flex", alignItems: "center", flexDirection: "column",padding:0, }}>
            <span className="fontify" style={{ fontSize: 15, color: "#0E4097" }}  > <a href="/fuckYouChangePassword" style={{ textDecoration: "none" }}>Forgot password?</a></span>

          </Grid>
          <Grid item xs={6} style={{ display: "flex", alignItems: "center", flexDirection: "column",padding:0 }}>
            <span className="fontify" style={{ fontSize: 15, color: "#0E4097" }}  > <a href="/fuckYouChangePassword" style={{ textDecoration: "none" }}>About us</a></span>
          </Grid>
        </Grid>
      </Card>
  </div>
  <div style={{ zIndex: 2, position: 'absolute', top: '-3%', left: '86.5%', }}>
    <img src={topright} alt="lund" />
  </div>

  <div style={{ zIndex: 2, position: 'absolute', top: '30%', left: '84%', }}>
    <img src={icon1} alt="lund" />
  </div>
  <div style={{ zIndex: 2, position: 'absolute', top: '60%', left: '84%', }}>
    <img src={icon2} alt="lund" />
  </div>
  <div style={{ zIndex: 2, position: 'absolute', top: '17%', left: '15%', }}>
    <span style={{ fontFamily: 'REM, sans-serif', fontSize: 50, paddingTop: 12, color: "#ECF6FF" }}>Welcome Back,</span>

  </div>
  <div style={{ zIndex: 2, position: 'absolute', top: '40%', left: '9%', }}>
    <img style={{ height: 110 }} src={icon3} alt="lund" />

  </div>
  <div style={{ zIndex: 2, position: 'absolute', top: '19%', left: '45%', }}>
    <img style={{ height: 130 }} src={icon4} alt="lund" />

  </div>
  <div style={{ zIndex: 2, position: 'absolute', top: '41%', left: '15%', }}>
    <img style={{ height: 270 }} src={icon5} alt="lund" />

  </div>
  <div style={{ zIndex: 2, position: 'absolute', top: '60%', left: '38%', }}>
    <img style={{ height: 150, transform: 'rotate(0deg)' }} src={icon7} alt="lund" />

  </div>
    
    </>)
}
export default Cardlogin
