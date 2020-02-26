import React, { Component } from 'react';


class Form extends Component{

    render(){

        return(
            <>
                <form>
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
                        <div className="textarea">
                            <label>Wpisz treść wiadomości </label>
                                <textarea wrap="off" cols="60" rows="10" placeholder="np. Chcę się umówić na zajęcia!"></textarea>
                            
                        </div>
                </form>

                    
                <button className="wyslij-wiadomosc">Wyślij wiadomość</button>
               


            </>
        ) 
    }
}

export default Form;