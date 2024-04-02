import React from 'react'

export default function Map() {
    return (
        <>
            <div className='my-10'>
                <div>
                    <iframe
                        className='w-full h-96'
                        style={{ border: 0 }}
                        loading="lazy"
                        allowFullScreen
                        src="https://www.google.com/maps/embed/v1/place?key=AIzaSyARXnIUK0SlSVeprW025nOHnjeEtawrGHs&q=Space+Needle,Seattle+WA">
                    </iframe>
                </div>
            </div>
        </>
    )
}
