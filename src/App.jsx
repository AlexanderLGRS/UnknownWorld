import { useEffect, useState } from 'react';
import './App.css';
import Card from './Components/Card';
import Layout from './Components/Layout';

export default function App() {

  const today = new Date()
  const prevWeek = new Date(today.getFullYear(), today.getMonth(), today.getDate() - 7);
  const prevWeekDate = prevWeek.getFullYear() + '-' + prevWeek.getMonth() + 1 + '-' + prevWeek.getDate()

  const url = 'https://api.nasa.gov/planetary/apod?'
  const urlStartDate = `start_date=${prevWeekDate}`
  const myKey = '&api_key=GDbHBhyp5mYZPHfnBbgkzF9qXnBp2u1gOCdN4onp'
  const [staus, setStatus]= useState('')

  let lastWeekAPOD = []
  const [apodList, setApodList] = useState(lastWeekAPOD)
  useEffect(() => {
    fetch(`${url}${urlStartDate}${myKey}`)
      .then(response => response.json())
      .then(data => {
        lastWeekAPOD = [...data]
        setApodList(lastWeekAPOD)
        console.log('fetching');
      },[staus])
  }
  )

  return (
    <div className="App">
      <Layout>
        <div className="cards-container">

          {apodList.map((apod) =>
            <Card key={Math.random()} image={apod.url} title={apod.title} date={apod.date} caption={apod.explanation} copyright={apod.copyright} />
          )}
        </div>
      </Layout>
    </div>
  );
}
