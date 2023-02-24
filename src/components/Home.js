import '../App.css'

import Felicity from './felicity'


import triangle from '../triangle.svg'

export default function Home() {

  return (
    <>
        <Felicity></Felicity>
        <h1 className='date gogo forward'>16<sup>th</sup>-18<sup>th</sup></h1>
        <p className='gogo month forward'>MARCH AT <code className='gogo red'>IIITH</code></p>
        <div className='horline forward'></div>
        <div className='fig forward'>
          <img src={triangle} style={{transform: 'rotate(180deg)'}}></img>
          <img src={triangle} style={{border: 'solid', borderWidth: '0 2px 0 2px'}}></img>
          <img src={triangle} style={{transform: 'rotate(180deg)'}}></img>
        </div>
        <h1 className='red forward gogo about'>THE WAIT IS OVER</h1>
        <p className='forward fivo about'>
        Felicity, IIIT's Annual College Fest, is back and this year it's all about <code className='red'>sci-fi</code>!
        It isn't just a festival, it's an experience that evokes euphoria. Get ready to zoom into the future with an exciting lineup of cultural programs, workshops, comedy, and EDM nights. From cutting-edge tech talks to mind-bending competitions, Felicity has something for everyone. Brace yourself for takeoff into an alternate reality!
        </p>
        <h1 className='red forward gogo about'>FEATURING...</h1>
        <div className='container gogo forward'><div><h2>data</h2><h2>data</h2></div></div>
        <div className='container gogo forward'><div><h2>data</h2><h2>data</h2></div></div>
        <div className='footer forward'>test</div>
    </>
  )
}
