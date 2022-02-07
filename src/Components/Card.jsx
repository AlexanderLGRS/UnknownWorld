import React from "react"
import './Card.css'
export default function Card(props) {

    const { image, title, date, caption, copyright } = props
    const titleToId = title.replaceAll(' ', '')
    
    return (
        <React.Fragment>
            <div className="card">
                <img src={image} className="card-img-top" />
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <h6 className="card-title">{date}</h6>
                    <button className="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target={`#${titleToId}`} aria-expanded="false" aria-controls={titleToId}>
                        Caption
                    </button>
                    <div className="collapse" id={titleToId}>
                        <div className="card card-caption">
                            {caption}
                        </div>
                    </div>
                    <span className="badge bg-warning text-dark">{copyright}</span>
                </div>
            </div>
        </React.Fragment>
    )
}