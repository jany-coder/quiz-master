import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Topic from '../Topic/Topic';

const Topics = () => {
    const topics = useLoaderData();
    return (
        <div className='container mx-auto max-w-container px-4 sm:px-6 lg:px-20'>
           <div className='grid gap-4 grid-cols-2 lg:grid-cols-4 py-10'>
                {
                    topics.data.map(topic => <Topic key={topic.id} topic={topic}></Topic>)
                }
           </div>
        </div>
    );
};

export default Topics;