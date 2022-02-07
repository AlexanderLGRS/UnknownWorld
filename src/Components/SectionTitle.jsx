import React from "react";
import './SectionTitle.css'

export default function SectionTitle(props) {
    const { title } = props
    return (
        <React.Fragment>
            <div className="title-container">
                <h1>{title}</h1>
            </div>
        </React.Fragment>
    )
}