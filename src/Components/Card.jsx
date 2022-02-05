import React from "react"
import './Card.css'
export default function Card(props) {

    const { image, title, date, caption, copyright } = props

    return (
        <React.Fragment>
            <div className="card">
                <img src={image} className="card-img-top" />
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{date}</p>
                    <div className="accordion" id="accordionExample">
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="headingOne">
                                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                    Caption
                                </button>
                            </h2>
                            <div id="collapseOne" className="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                <div className="accordion-body">
                                    {caption}
                                </div>
                            </div>
                        </div>
                    </div>






                    <span className="badge bg-warning text-dark">{copyright}</span>
                </div>
            </div>
        </React.Fragment>
    )
}