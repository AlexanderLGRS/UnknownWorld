import { useEffect, useState } from 'react';
import './APOW.css';
import Card from '../Components/Card';
import SectionTitle from '../Components/SectionTitle';

export default function APOW() {
    let lastWeekAPOD = []
    const [refresh, setRefresh] = useState(true)
    const [apodList, setApodList] = useState(lastWeekAPOD)

    const today = new Date()
    const prevWeek = new Date(today.getFullYear(), today.getMonth(), today.getDate() - 7);
    const prevWeekDate = prevWeek.getFullYear() + '-' + parseInt(prevWeek.getMonth() + 1) + '-' + prevWeek.getDate()

    const url = 'https://api.nasa.gov/planetary/apod?'
    const urlStartDate = `start_date=${prevWeekDate}`
    const myKey = '&api_key=GDbHBhyp5mYZPHfnBbgkzF9qXnBp2u1gOCdN4onp'

    useEffect(() => {
        if (refresh === true) {
            fetch(`${url}${urlStartDate}${myKey}`,)
                .then(response => response.json())
                .then(data => {
                    lastWeekAPOD = [...data]
                    setApodList(lastWeekAPOD)
                    setRefresh(false)
                }, [refresh])
                .catch((error) => {
                    console.log('Error: ' + error);
                })
        }
    }
    )

    return (
        <div className="App">
            <SectionTitle title='Astronomy Pictures Of the Week' />
            <div className="cards-container">
                {apodList.slice(0).reverse().map((apod) =>
                    <Card index={apodList.indexOf(apod)} key={Math.random()} image={apod.url} title={apod.title} date={apod.date} caption={apod.explanation} copyright={apod.copyright} />
                )}
            </div>
        </div>
    );
}
