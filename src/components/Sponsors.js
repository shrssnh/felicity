import '../App.css'

import Spontit from './spontit'

import qual from '../sponsors_logos/qualcomm.png'
import ea from '../sponsors_logos/thumbnail.png'
import crom from '../sponsors_logos/Croma_Logo.png'
import mons from '../sponsors_logos/monster.png'
import sbi from '../sponsors_logos/SBI.png'

import { Link } from 'react-router-dom'

export default function Home() {

  return (
    <>
        <Spontit></Spontit>
        <div style={{marginBottom: '10%'}}></div>
        <h1 className='red forward fivo about'>TITLE SPONSOR</h1>
        <Link to='https://www.qualcomm.com/home'><img className='forward qual' src={qual}></img></Link>
        <div className='container fivo forward'>
            <div>
                <h2>Gaming, Title and<br/>Prime Sponsor</h2>
                <h2>Banking Partner</h2>
            </div>
            <div>
                <Link target="_blank" to='https://www.ea.com/'><img className='forward sponimg fiximg' src={ea}></img></Link>
                <Link target="_blank" to='https://www.onlinesbi.sbi/'><img className='forward sponimg' src={sbi}></img></Link>
            </div>
        </div>
        <div className='container fivo forward'>
            <div>
                <h2>Gifting Partner</h2>
                <h2>Energy Partner</h2>
            </div>
            <div>
                <Link target="_blank" to='https://www.qualcomm.com/home'><img style={{width: '10vw'}} className='forward sponimg' src={crom}></img></Link>
                <Link target="_blank" to='https://www.qualcomm.com/home'><img style={{width: '10vw'}} className='forward sponimg' src={mons}></img></Link>
            </div>
        </div>
        <div className='footer forward'>test</div>
    </>
  )
}
