import React from 'react'
import logos from './footer-images/LOGO.png'
import rec from './footer-images/rec.png'

function Footer() {
  return (
    <div className='footer'>
       <div className='logos'>
            <img src={logos} alt="" />
       </div>
       <div className='rec'>
            <img src={rec} alt="" />
       </div>
       <div className='p'>
           <p className='p1'>Popular Cities İstanbul Duty Pharmacy, İzmir Duty Pharmacy, Ankara Duty Pharmacy, Çanakkale Duty Pharmacy, Bursa Duty Pharmacy, Mersin Duty Pharmacy, Antalya Duty Pharmacy, Samsun Duty Pharmacy</p>
           <p className='p2'>© Copyright 2022 - All rights reserved.</p>
           <p className='p3'>Pharmacies Site</p>
       </div>
    </div>

  )
}
export default Footer
