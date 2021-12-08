import React from 'react';
import BlogCard from '../../components/BlogCard/BlogCard';
import './Blog.scss';

const Blog = () => {
    return (
        <div className="blog">
            <div className="container">
                <div className="row">
                <div className="col-lg-8">  
                    <div className="left-content">
                        <BlogCard></BlogCard>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="newsletter"></div>
                </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;