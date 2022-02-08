import React, { useState } from "react";
import './Form.css'

export default function Form(props) {
    const { label, buttonText, maxDate, onSubmit } = props
    const [dateToSearch, setDateToSearch] = useState('')
    const dateChangeHandler = (event) => {
        setDateToSearch(event.target.value)
    }
    const submitHandler = (event) => {
        event.preventDefault()
        onSubmit(dateToSearch)
    }
    return (
        <React.Fragment>
            <form onSubmit={submitHandler} className="customForm">
                <label className="customForm-label" htmlFor="date">{label}</label>
                <input className="customForm-input" type="date" id="date" min='1996-01-01' onChange={dateChangeHandler} />
                <button type="submit" className="btn bg-light customForm-button">{buttonText}</button>
            </form>
        </React.Fragment>
    )
}