import Link from 'next/link';
import React from 'react'

const Contact = () => {
  return (
    <div>Contact <br />
        <Link href="/" style={{color: 'red'}} > To the Landing Page</Link>
        <Link href="contact/more" style={{color: 'red'}} > To the Contact/More</Link>
    </div>
  )
}

export default Contact;