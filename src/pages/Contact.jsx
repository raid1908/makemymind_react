import React from 'react';

import Form from '../components/contact/Form';
//obrazy:

import Grow from '../assets/illustration_grow.svg';

const Contact =()=>{

    return(
        <main className="contact">
            <div className="container contact">
                <div className="txt">
                    <h2>Napisz do nas</h2>

                    <Form />

                    <button className="wyslij-wiadomosc">Wyślij wiadomość</button>
                </div>
                
                <div className="img"><img className="grow" src={Grow} alt="grow!"></img></div>
                
            </div>
        </main>
    )
}

export default Contact;