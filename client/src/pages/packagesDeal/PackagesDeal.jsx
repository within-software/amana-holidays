import React from 'react'
import './PackagesDeal.scss'

const PackagesDeal = () => {
  return (
    <div className='packagesDeal'>
      <div className='container'>
        <div className='packageLeft'>
          <div className='searchBox'>
            <div className='searchBoxContainer'>
              <div className='searchBoxItem'>
                <h1>
                  Search for a Package
                </h1>
                <h2>Find your best package</h2>
              </div>
              <div className='searchBoxItem'>
                <input/>
              </div>
              <div className='searchBoxItem'></div>
              <div className='searchBoxItem'></div>
              <div className='searchBoxItem'></div>
            </div>
          </div>
        </div>
        <div className='packageRight'>right</div>
      </div>
    </div>
  )
}

export default PackagesDeal
