import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function Panel({_width, _height}) {
    return (
	<div 
	    className="panel" 
	    style={{width:_width,height:_height}}
	>
	</div>
    );
}

export default function App() {
    return (
	<>
	    <Panel _width={'25%'} _height={'80%'}/>
	</>
    )
}
