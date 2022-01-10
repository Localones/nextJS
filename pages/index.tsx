import React, {useState} from "react";
import {Button, Htag, Ptag, Rating, Tag} from "../components";
import {withLayout} from "../layout/Layout";


function Home(): JSX.Element {

    const [rating, setRating] = useState<number>(4);

    return (
        <>
            <Htag tag='h1'>Текст</Htag>
            <Button appearance='primary' arrow='right'>Кнопка</Button>
            <Button appearance='ghost' arrow='down'>Кнопка</Button>
            <Ptag size='s'>
                Desk
            </Ptag>
            <Tag color='primary' size='m' href='/'>Prim</Tag>
            <Tag color='red' size='s'>Red</Tag>
            <Rating rating={rating} isEditable setRating={setRating}/>
        </>
    );
}

export default withLayout(Home);