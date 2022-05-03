import React, {useState,useEffect} from 'react'
import collapse from './main-images/Group 4.png'
import connect from './main-images/connect.png'
import map from './main-images/map.png'
import phone from './main-images/phone.png'
import "@fontsource/poppins";
import axios from "axios";


function Main() {
  const [city,setCity]=useState("");

  useEffect(()=>{},[city]);
  /* Api Key */
  const key = 'apikey 3J7NnR1zn9C7HDPz5Ztbnu:0HyfDd2VVGoZLQKhvo17us';
  console.log(key);
  // eslint-disable-next-line no-lone-blocks
  {axios.get("https://api.collectapi.com/health/dutyPharmacy?ilce=%C3%87ankara&il=Ankara").then(res =>setCity(res.data[0].title))}

  return (
    
    <div className='main'>
        <button className='main-btn'>
          <p>Samsun</p>
    
      {/* <p>{city}</p>  Yazılacak  */}   
          <button>77</button>
          <img src={collapse} alt={''} />
        </button>
        <button className='main-btn-2'>
          <p>Atakum</p>
          <button>3</button>
          <img src={collapse} alt={''} />
        </button>
        <button className='main-btn-3'>
          <p >Denizevleri Eczanesi</p>
          <button>Sabah 08.30'a kadar</button>
          <span style={{fontFamily:'poppins'}}>Esenevler, 390. Sk. No:26A, 55200 Atakum/Samsun</span>
          <img className='img1' src={connect} alt={''} />
          <img className='img2' src={map} alt={''} />
          <img className='img3' src={phone} alt={''} />
        </button>
        <button className='main-btn-4'>
          <p>Çakır Eczanesi</p>
          <button>Sabah 08.30'a kadar</button>
          <span style={{fontFamily:'poppins'}}>Mimarsinan Mah.162. Sk. No:17/A Atakum/Samsun</span>
          <img className='img1' src={connect} alt={''} />
          <img className='img2' src={map} alt={''} />
          <img className='img3' src={phone} alt={''} />
        </button>
        <button className='main-btn-5'>
          <p>Fakülte Eczanesi</p>
          <button>Sabah 08.30'a kadar</button>
          <span style={{fontFamily:'poppins'}}>Körfez Mah.Atatürk Bul.No:171/A Atakum/Samsun</span>
          <img className='img1' src={connect} alt={''} />
          <img className='img2' src={map} alt={''} />
          <img className='img3' src={phone} alt={''} />
        </button>
    </div>
  )
}

export default Main
