import '../style.css'
import React from 'react'
import twitter from '../assets/Twitter.svg'
import facebook from '../assets/Facebook.svg'
import instagram from '../assets/Instagram.svg'
import github from '../assets/GitHub.svg'

export default function Footer(){
    return(
        <footer>
            <a href="/"><img src={twitter} /></a>
            <a href="/"><img src={facebook} /></a>
            <a href="/"><img src={instagram} /></a>
            <a href="/"><img src={github} /></a>
        </footer>
    )
}