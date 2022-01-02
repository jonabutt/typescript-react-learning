import React, { useRef, useState } from 'react';

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
    handleChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

interface TextNode {
    text: string
}

export const TextField: React.FC<Props> = ({handleChange}) => {
    const [count, setCount] = useState<number | null>(5);
    const [obj, setObj] = useState<TextNode>({text: 'hello'});
    const inputRef = useRef<HTMLInputElement>(null);
    const divRef = useRef<HTMLDivElement>(null);
    setCount(null);
    setObj({text: 'hello1'});

    return (
        <div ref={divRef}>
            <input ref={inputRef} onChange={handleChange}/>
        </div>
    )
}