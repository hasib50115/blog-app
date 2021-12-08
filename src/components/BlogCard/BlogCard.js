import React from 'react';
import './BlogCard.scss';
import car1 from '../../images/img1.PNG';

const BlogCard = () => {
    return (
        <div className="blog-card-container">
        <div className="row blog-cards d-flex justify-content-between pt-5">
        <div className="col-md-6">
            <div className="blog-img">
                <img src={car1} alt="" />
            </div>
        </div>
        <div className="col-md-6 d-flex justify-conten-between">
            <div className="blog-card-info">
                <h1>How to charge your Bike</h1>
                <p className="mt-5">Akij Motors one of the biggest automobile companies in Bangladesh. It has</p>
                <button className="mt-5">Reading Continue</button>
            </div>
        </div>
        </div>
        </div>
    );
};

export default BlogCard;