import topright from '../photos/My project (1).png'
import icon1 from '../photos/icontrimmed3.png'
import icon2 from '../photos/iconpp.png'
import icon3 from '../photos/My project (2).png'
import icon4 from '../photos/iconppp.png'
import icon5 from '../photos/My project (3).png'
import icon7 from '../photos/imagepo.png'
import Image from 'next/image';
export default function Icons(){
    return <>
    <div style={{ zIndex: 2, position: 'absolute', top: '-1%', left: '86%', }}>
    <Image src={topright.src} alt="lund" width={200} height={200}   />
    </div>

  <div style={{ zIndex: 2, position: 'absolute', top: '30%', left: '84%', }}>
    <Image src={icon1} alt="lund" />
  </div>
  <div style={{ zIndex: 2, position: 'absolute', top: '60%', left: '84%', }}>
    <Image src={icon2} alt="lund" />
  </div>
  <div style={{ zIndex: 2, position: 'absolute', top: '17%', left: '17%', }}>
    <span style={{ fontFamily: 'REM, sans-serif', fontSize: 50, paddingTop: 12, color: "#ECF6FF" }}>Welcome To,<br /> 'canSell'</span>

  </div>
  <div style={{ zIndex: 2, position: 'absolute', top: '40%', left: '9%', }}>
    <Image height={110} width={110} src={icon3} alt="lund" />

  </div>
  <div style={{ zIndex: 2, position: 'absolute', top: '19%', left: '45%', }}>
    <Image height={130} width={130} src={icon4} alt="lund" />

  </div>
  <div style={{ zIndex: 2, position: 'absolute', top: '41%', left: '15%', }}>
    <Image height={270} width={320} src={icon5} alt="lund"   />

  </div>
  <div style={{ zIndex: 2, position: 'absolute', top: '60%', left: '38%', }}>
    <Image height={130} width={130} src={icon7} alt="lund" />

  </div></>
}