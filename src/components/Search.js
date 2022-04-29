import React from 'react'
import searchimg from './search-images/search.png';
import "@fontsource/poppins";

function Search() {
  return (
    <div className='search'>
        <img className='search-img' src={searchimg} alt='' />
        <div className="search-input">
                <span className='material-icons'>search</span>
                <input style={{fontFamily:'poppins'}} type="text" placeholder='Samsun, Atakum, Denizevleri Eczanesi' />
         </div>
    </div>
  )
}
export default Search
