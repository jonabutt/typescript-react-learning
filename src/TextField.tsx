import React from 'react';

interface Person {
    firstName: string;
    lastName: string;
}

interface Props {
    text?: string;
    flag?: boolean;
    i?: number;
    fn?: (fnParam: string) => string;
    person: Person;
}

export const TextField: React.FC<Props> = () => {
    return (
        <div>
            <input />
        </div>
    )
}