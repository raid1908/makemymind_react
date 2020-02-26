import React from 'react';

const Textarea=()=>{
    return(
    <div className="textarea">
        <label>Wpisz treść wiadomości </label>
        <textarea wrap="off" cols="60" rows="10" placeholder="np. Chcę się umówić na zajęcia!"></textarea>
    </div> 
    )
}

export default Textarea;