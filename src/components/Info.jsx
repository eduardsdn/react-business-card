import '../style.css'
import React from 'react'
import photo from '../assets/business-card-photo.png'
import email from '../assets/Mail.svg'
import linkedin from '../assets/linkedin.svg'

export default function Info(){
    return(
        <section className='info'>
            <img src={photo} alt="applicant" />
            <h1 className='name'>Laura Smith</h1>
            <p className='title'>Frontend Developer</p>
            <a className='email-link' href="/">laurasmith.website</a>

            <div className='buttons'>
                <button className='button white'><img src={email} />Email</button>
                <button className='button blue'><img src={linkedin} />LinkedIn</button>
            </div>
        </section>
    )
}