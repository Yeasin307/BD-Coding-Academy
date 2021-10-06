import React, { useContext } from 'react';
import { dataContext } from '../../App';
import DisplayAllCourses from '../DisplayAllCourses/DisplayAllCourses';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';

const AllCourses = () => {
    // eslint-disable-next-line no-unused-vars
    const [data, setData] = useContext(dataContext);
    return (
        <div>
            <Header></Header>
            <h1 className="text-primary text-center fw-bold mt-5">All Courses</h1>
            <div className="container my-5">
                <div className="row gx-3">
                    {
                        data.map(course => <DisplayAllCourses
                            key={course.title}
                            course={course}
                        ></DisplayAllCourses>)
                    }
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default AllCourses;