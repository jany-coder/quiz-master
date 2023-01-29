import React from 'react';
import { NavLink } from 'react-router-dom';

const Topic = (props) => {
  const {id, name, logo, total} = props.topic;
    return (
        <div className='bg-gray-100 shadow rounded p-2'>
           <img className='w-full' src={logo} alt="" />
           <div className='flex justify-between bg-white p-2'>
                <div className='text-lg font-medium text-indigo-600'>{name}</div>
                <div>
                   <NavLink to={`/api/quiz/${id}`}> <button className='bg-indigo-600 text-white py-0.5 px-2 rounded'>Start Practice</button></NavLink>
                </div>
           </div>
        </div>
    );
};

export default Topic;