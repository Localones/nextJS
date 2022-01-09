import React, {useState} from "react";
import {Button, Htag, Ptag, Rating, Tag} from "../components";


export default function Home() {

    const [counter, setCounter] = useState<number>(0);

    return (
        <>
            <Htag tag='h1'>Текст</Htag>
            <Button appearance='primary' arrow='right' onClick={() => setCounter(x => x + 1)}>Кнопка</Button>
            <Button appearance='ghost' arrow='down'>Кнопка</Button>
            <Ptag size='s'>
                {counter}
            </Ptag>
            <Tag color='primary' size='m' href='/'>Prim</Tag>
            <Tag color='red' size='s' >Red</Tag>
            <Rating rating={4} />
        </>
    );
}
