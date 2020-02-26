import React from 'react';

const PersonalData=()=>{
    return(
        <div className="personal-data">
            <div className="name">
                <label >Wpisz imię i nazwisko </label>
                <input type="text" placeholder="np. Anna Nowak"/>
            </div>  
            <div className="email">
                <label> Wpisz adres e-mail </label>
                <input type="email" placeholder="np. anna.nowak@gmail.com" />    
            </div>
        </div>
    )
}

export default PersonalData;