import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Question from '../Question/Question';

const Quiz = () => {
    const quiz = useLoaderData();
    console.log(quiz)
    return (
        <div className='container mx-auto max-w-container px-4 sm:px-6 lg:px-20'>
            <header className='flex justify-center text-2xl py-4 font-bold text-indigo-600'>Quiz of {quiz.data.name}</header>
            {
                quiz.data.questions.map(question => <Question question={question}></Question>)
            }
        </div>
    );
};

export default Quiz;