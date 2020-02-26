import React from 'react';


import TrainersDescription from '../trainers/TrainersDescription';




const Person=()=>{
   
    return(
        <div className="person">
            <div className="introduce">
                <div className="image aneta"></div>
                <div className="name">Aneta<br></br> Murakowska</div>
            </div>
            <TrainersDescription/>
        </div>
    )
}

export default Person;