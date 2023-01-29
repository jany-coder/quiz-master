import React from 'react';
const Question = (props) => {
    const {question, options, id, correctAnswer} = props.question;
    return (
        <div className='mx-auto'>
            <div>
                <h2 className='text-lg text-indigo-600 text-center'>Quiz: {question}</h2>
                <div className='grid grid-cols-2 gap-4 xl:w-1/2 mx-auto my-4'>
                    {
                        options.map(option => <label className='border-2 w-full p-2 rounded cursor-pointer'><input value={option} name="quiz" type="checkbox" /> {option}</label>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Question;