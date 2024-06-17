import React from 'react'
import '@/styles/globals.css'
import TopNav from '@/components/global/TopNav'
import Navbar from '@/components/global/Navbar'

const layout = ({children}) => {
  return (
    <html>
        <body>
            <div>
                <Navbar/>
                {children}
            </div>
        </body>
    </html>
  )
}

export default layout