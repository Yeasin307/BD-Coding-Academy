import React, { useContext, useEffect } from 'react';
import { dataContext } from '../../App';
import Course from '../Course/Course';

const MainSection = () => {
    const [data, setData] = useContext(dataContext);
    useEffect(() => {
        fetch('./data.json')
            .then(res => res.json())
            .then(data => setData(data));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    return (
        <div>
            <h1 className="text-center text-primary fw-bold my-5">Top Courses</h1>
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