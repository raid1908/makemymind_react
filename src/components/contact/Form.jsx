import React, { Component } from 'react';

// formularz kontrolowany: imię i nazwisko nie może być puste, email musi zawierać @, wiadomość też nie może być pusta
class Form extends Component{

    state={
        name:'',
        email:'',
        message:'',
        errorName:'',
        errorEmail:'',
        errorMessage:'',
        isValidated:false,
    }


    handleChange=(event)=>{
        this.setState({
          [event.target.name]: event.target.value
        });
      }

    validate =()=>{

        const {name, email, message}=this.state;
        let isValid= true;

        if(name === ''){
            isValid=false;
            this.setState({ errorName:"Pole IMIĘ I NAZWISKO musi być uzupełnione"})
        }else{
            this.setState({errorName:''});
        }

        if(message === ''){
            isValid=false;
            this.setState({ errorMessage:"Pole WPISZ WIADOMOŚĆ musi być uzupełnione"})
        }else{
            this.setState({errorMessage:''});
        }

        if(email === '' || email.indexOf("@") === -1){
            isValid=false;
            this.setState({ errorEmail:"Pole E-MAIL musi być uzupełnione i zawierać znak @"})
        }else{
            this.setState({errorEmail:''});
        }
        return isValid;
    }

    handleSubmit=(event)=>{
        event.preventDefault();

        this.validate();

        if(this.validate()){
            this.setState({
                isValidated: true,
                name: '',
                email: '',
                text: '' 
            })
        }
      
      }

    render(){
        const{name, email, message, errorName,errorMessage,errorEmail,isValidated}=this.state;
        

        return(
            <>
                <form>
                        <div className="personal-data">
                            <div className="name">
                                <label >Wpisz imię i nazwisko </label>
                                <input type="text" name="name" onChange={this.handleChange} placeholder="np. Anna Nowak"/>
                            </div>  
                            <div className="email">
                                <label> Wpisz adres e-mail </label>
                                <input type="email" name="email" onChange={this.handleChange}placeholder="np. anna.nowak@gmail.com" />    
                            </div>
                        </div>
                        <div className="textarea">
                            <label>Wpisz treść wiadomości </label>
                                <textarea wrap="on" cols="60" rows="10" placeholder="np. Chcę się umówić na zajęcia!"
                                name="message"
                                
                                onChange={this.handleChange}></textarea>
                            
                        </div>
                </form>

                    
                <button className="wyslij-wiadomosc"
                type="submit" value="Wyślij" 
                onClick={this.handleSubmit}>Wyślij wiadomość</button>
               
                {isValidated && <span className="alert green ok">Dziękujemy za wiadomość!</span>}
                {errorName && <span className =" alert red error">{errorName}</span>}
                {errorEmail && <span className ="alert red error">{errorEmail}</span>}
                {errorMessage && <span className ="alert red error">{errorMessage}</span>}

            </>
        ) 
    }
}

export default Form;