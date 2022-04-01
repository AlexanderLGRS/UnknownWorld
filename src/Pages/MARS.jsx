import React, { useEffect, useState } from 'react';
import SectionTitle from '../Components/SectionTitle';
import Card from '../Components/Card';
import './MARS.css';
export default function MARS() {
    let marsPics = [];
    const [refresh, setRefresh] = useState(true);
    const [marsPicsList, setMaesPicsList] = useState(marsPics);
    const url =
        'https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?';
    const urlDetails = `sol=1110&camera=NAVCAM`;
    const myKey = '&api_key=GDbHBhyp5mYZPHfnBbgkzF9qXnBp2u1gOCdN4onp';

    useEffect(() => {
        if (refresh === true) {
            fetch(`${url}${urlDetails}${myKey}`)
                .then((response) => response.json())
                .then(
                    (data) => {
                        console.log(data);
                        for (
                            let i = 0;
                            i <
                            // 30
                            data.photos.length;
                            i++
                        ) {
                            marsPics.push({
                                url: data.photos[i].img_src,
                                title: data.photos[i].id,
                                date: data.photos[i].earth_date,
                                explanation: data.photos[i].camera.name +': ' + data.photos[i].camera.full_name,
                            });
                        }
                        console.log(marsPics);
                        setMaesPicsList(marsPics);
                        setRefresh(false);
                    },
                    [refresh]
                )
                .catch((error) => {
                    console.log('Error: ' + error);
                });
        }
    });
    return (
        <React.Fragment>
            <SectionTitle title='Curiosity: Mars Rover' />
            <div className='hero'></div>
            <div className='cards-container'>
                {marsPicsList
                    .slice(0)
                    .reverse()
                    .map((mars) => (
                        <Card
                            index={marsPicsList.indexOf(mars)}
                            key={Math.random()}
                            image={mars.url}
                            title={'Id: ' + mars.title}
                            date={mars.date}
                            caption={mars.explanation}
                            copyright={'Curiosity'}
                        />
                    ))}
            </div>
        </React.Fragment>
    );
}
