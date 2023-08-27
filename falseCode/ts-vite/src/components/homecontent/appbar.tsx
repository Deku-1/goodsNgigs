import './appbar.css'
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import MailIcon from '@mui/icons-material/Mail';
import Badge from '@mui/material/Badge';
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from '../../../utils/firebase';

export default function Appbarhome(){
  const [user, loading]=useAuthState(auth);
  //other than google signup
   // const [userdata,setuserdata]=useState('');
  // useEffect(()=>{
  //   fetch('http://localhost:3000/auth/me',{
  //     headers:{
  //       "authorization":"bearer "+localStorage.getItem('token')
  //     }
  //   }).then(response => {
  //     if (!response.ok) {
  //         throw new Error('Network response was not ok');
  //     }
  //     return response.json();
  // }).then(data=>{
  //   const domdata=data.username;
  //   setuserdata(domdata)

  // }).catch(error=>console.log(error))
  // },[])
  return <>
       <div style={{display:"flex",justifyContent:"space-between",backgroundColor:"#508cf3",height:70}} >
      <div style={{  marginTop:17,paddingRight:10,paddingLeft:100}}>
      <span style={{ fontFamily: 'Borel, cursive', fontSize: 30, marginTop:20, color: "#ECF6FF" }}>canSell</span>
      </div>
      <div  style={{display: 'flex', alignItems: 'center', paddingRight:50}}>
      <Paper component="form" sx={{  width:400 ,borderRadius:10,backgroundColor:"#ECF6FF"}} >
      <InputBase sx={{ height: 10, ml: 2.5,  flex:0 , width:330}}  placeholder="Find it here" inputProps={{style:{fontFamily: 'REM, sans-serif', alignItems:"baseline",fontSize:16,height:50,paddingTop:0,paddingBottom:0}}} />
      <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
      <SearchIcon />
      </IconButton>
      </Paper>
      </div>
      <div  style={{display:"flex",justifyContent:"space-between",}}>
      <div style={{display: 'flex', alignItems: 'center', paddingRight:10 }}>
      <IconButton size="large"  color="default">
              <Badge badgeContent={4} color="error">
                <MailIcon />
              </Badge>
              <br />      <span style={{ fontFamily: 'Lato, sans-serif', fontSize: 10, color: "#ECF6FF" }}>messege</span>

            </IconButton>
      </div>
      <div style={{display: 'flex', alignItems: 'center', paddingRight:10 }}>
      {user&&(<div>
        <img src={user.photoURL||''} style={{width: 35,height: 35,borderRadius:'50%'}} alt="lund" />
<br />
        </div>)}
        </div>
    </div>
    <div></div>
    </div>
  </>
}