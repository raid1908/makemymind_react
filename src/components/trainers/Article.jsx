import React from 'react';

import Person from '../trainers/Person';
import TrainersDescription from '../trainers/TrainersDescription';
//obrazy


const Article =()=>{
    return (
        <article className="article trainer">
           <Person />
           <TrainersDescription />
        </article>

    )
}

export default Article;