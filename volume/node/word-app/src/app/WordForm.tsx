import getAllData from './mysql-connect'
import { FC, ReactNode } from 'react';

interface Props { children: ReactNode};

const WordForm = (msg: Props): JSX.Element => {
    const result = getAllData();
    console.log(result)
    return (
        <WordForm>
            <div>
                <h1>{msg.children}</h1>
            </div>
        </WordForm>
    )
};

export default WordForm
