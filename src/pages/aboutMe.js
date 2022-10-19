import React from 'react'
import avatar from '../components/assets/images/avatar.jpg'
export default function content() {
  return (
  <>
      <h1 className = "text-3xl font-bold text-center"> About Me </h1>
      <div  className = "flex">
      <img  className="w-80 h-80" src={avatar}/>
      <div className = "p-2">
      <p>
        Hello! My name is Raymond, from Boulder Colorado, I am a South Korean adoptee who was adopted with my older brother and sister when I was 5 years old.
      </p>
      <p>
        When I was seven, I would watch my mom work on her spreadsheets on her macintosh classic, learning all the 
        button keys and how to navigate. When I was in third grade, I taught a fourth grade teacher and her class room how to use there new macintosh plus. She was very impressed that a seven year old who could barely speak english was teaching her how to use the computer.
      </p>
      <p>
        My first programming book was when I was 14 and on a roadtrip. Without a computer I read through C textbook.
        I always thought I would become a programmer, but life had different plans for me other than college. I would continue to program for fun, learning actionScript and later learning JavaScript through a game called Screeps. 
      </p>
      <p>
        In 2014 I decided that I wanted to be involved in cyber security. I got an job at Webroot as a tech support, moved on to advanced malware removal and finally got into threat research. I became a senior in my team due to my creative approach that changed how the team worked.
      </p>
      <p>
        Before and during the pandemic I had two kids. In dreaming about what I wanted for them, I decided that I needed to fulfill a dream in me, and needed to become a professional programmer. 
        I took a bootcamp at DU for 3 months, this taught me how to apply my JavaScript skills in a greater context of the MERN stack.
      </p>
      </div>
    </div>
    </>
  )
}
