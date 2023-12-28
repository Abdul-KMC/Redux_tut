import React from 'react';
import './Door.css'

function Door() {
  return (
    <div className='parent-container'>
        <section className='main_body'>
            <button className="close">Close</button>
            <p className="status">You can only shop if store is open</p>
            <button className="open">Open</button>
        </section>
    </div>
  )
}

export default Door