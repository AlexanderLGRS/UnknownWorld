import React, { useState } from "react";
import './Form.css'

export default function Form(props) {
    const { label, maxDate, onSubmit } = props
    const [dateToSearch, setDateToSearch] = useState('')
    const dateChangeHandler = (event) => {
        setDateToSearch(event.target.value)
        onSubmit(dateToSearch)
    }
    const submitHandler = (event) => {
        event.preventDefault()
    }
    return (
        <React.Fragment>
            <form onSubmit={submitHandler} className="customForm">
                <label className="customForm-label" htmlFor="date">{label}</label>
                <input className="customForm-input" type="date" id="date" min='1996-01-01' max={maxDate} onChange={dateChangeHandler} />
            </form>
        </React.Fragment>
    )
}