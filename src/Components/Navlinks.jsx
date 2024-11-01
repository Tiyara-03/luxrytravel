import React from 'react'

const links = [
    {
        name: 'Destination',
    },

    {
        name: 'Holiday Types',
    },

    {
        name: "Exclusive Deals"
    },

    {
        name: 'Blogs'
    },

    {
        name: 'About Us'
    },

    {
        name: 'Contact Us'
    }

]

export default function Navlinks() {
  return (
    <>
     {links.map((data) =>(
        <div>
            <div>
                <h1>{data.name}</h1>
            </div>
        </div>
     ))}
    </>
  )
}
