
import React from 'react';



// css and assets
import uni from  './Assets/university.svg';
import './css/education.scss';


const Education = ()=> {
    return (
        <section className="content-wrapper section-container">
            <h2>Education</h2>
            <div className="university-container">
                <h3>Queen's University</h3>
                <p>BA in Economics - 2021<br/>All electives in computer science </p>
                <img className="university-symbol" src={uni} alt=""/>
                
            </div>
            <button className="m-btn btn-details proTwoBtn"> See Details</button>
        </section>
    );
}

export default Education;