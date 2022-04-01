import React from "react"
import './Card.css'
export default function Card(props) {

    const { image, title, date, caption, copyright } = props
    const titleToId = title.replaceAll(' ', '').replaceAll(':', '')
    
    return (
        <React.Fragment>
            <div className="card">
                <img src={image} className="card-img-top" alt="Astronomic pic of the Day" />
                <div className="card-body">
                    <h6 className="card-title">{title}</h6>
                    <h6 className="card-title">{date}</h6>
                    <button className="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target={`#${titleToId}`} aria-expanded="false" aria-controls={titleToId}>
                        Explanation
                    </button>
                    <div className="collapse" id={titleToId}>
                        <div className="card-caption">
                            {caption}
                        </div>
                    </div>
                    <span className="badge bg-info text-dark">{copyright}</span>
                </div>
            </div>
        </React.Fragment>
    )
}