import React, { useEffect, useState } from "react";
import Card from "../Components/Card";
import Form from "../Components/Form";
import SectionTitle from "../Components/SectionTitle";
import './APOD.css'

export default function APOD(props) {
    const today = new Date()
    const todayFormat = (today.getFullYear() + '-' + parseInt(today.getMonth() + 1) + '-' + today.getDate())
    const [date, setDate] = useState('2000-01-01')
    const [APODTitle, setAPODTitle] = useState('')
    const [APODUrl, setAPODUrl] = useState('')
    const [APODCaption, setAPODCaption] = useState('')
    const [APODCopyright, setAPODCopyright] = useState('')

    const url = 'https://api.nasa.gov/planetary/apod?date='
    const myKey = '&api_key=GDbHBhyp5mYZPHfnBbgkzF9qXnBp2u1gOCdN4onp'

    useEffect(() => {
        fetch(`${url}${date}${myKey}`)
            .then(response => response.json())
            .then(data => {
                setAPODTitle(data.title)
                setAPODUrl(data.hdurl)
                setAPODCaption(data.explanation)
                setAPODCopyright(data.copyright)
            })
    }, [date])
    const dateHandler = (dateToSearch) => {
        setDate(dateToSearch)
        
    }
    return (
        <React.Fragment>
            <SectionTitle title='Astronomy Picture Of the Day' />
            <Form label='Select a date to search' buttonText='Generate' maxDate={todayFormat} onSubmit={dateHandler}/>
            <div className="cards-container">
                <Card key={Math.random()} image={APODUrl} title={APODTitle} date={date} caption={APODCaption} copyright={APODCopyright} />
            </div>
        </React.Fragment>
    )
}