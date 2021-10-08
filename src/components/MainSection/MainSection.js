import React, { useContext } from 'react';
import { dataContext } from '../../App';
import Course from '../Course/Course';

const MainSection = () => {
    // eslint-disable-next-line no-unused-vars
    const [data, setData] = useContext(dataContext);
    return (
        <div>
            <h1 className="text-center text-primary fw-bold mb-5">Top Courses</h1>
            <div className="container">
                <div className="row gx-3">
                    {
                        data.slice(0, 4).map(course => <Course
                            key={course.title}
                            course={course}
                        ></Course>)
                    }
                </div>
            </div>
        </div>
    );
};

export default MainSection;