import React from 'react'
import TypeIt from "typeit-react";

export default function header() {
  return (
    <header className = "row bg-dark text-light text-center m-2">
        <h1>Raymond Lewis's Portfolio</h1>
        <div>
          <TypeIt>This will be typed in a `span` element!</TypeIt>
        </div>

    </header>
  )
}
