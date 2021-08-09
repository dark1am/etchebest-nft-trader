import {React,useState} from 'react'
import './Modal.css'

export default function Modal() {
    const [state,setState] = useState('modal-open')

    const close = ()=>{
        setState('modal-close')
    }

    return (
        <div className={state}>
            <div className="modal">
            <h2>Petition sent!</h2>
            <button className="modal-button" onClick={()=>close()}>X</button>
            </div>
        </div>
    )
}

