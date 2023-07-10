import React from 'react'
import "./Contact.css";
import { Fade } from 'react-reveal';


const Contact = () => {

    const handleSubmit = (event) => {
        event.preventDefault();
    }
  return (
    <>
        <Fade bottom duraion={1200}>
            <h1 className='title'>Contactez-nous</h1>
        </Fade>
    <div className='Contact' id="contact">
    <div className='sub-container'>

        <Fade left cascade>
            <div className='part'>
                <p>
                Contactez nous pour plus d'info
                </p>
                <Fade cascade left>
                    <div className='social'>
                        <i class="fa-solid fa-phone"></i>
                        <i class="fa-solid fa-envelope"></i>
                        <i class="fa-brands fa-linkedin"></i>
                        <i class="fa-brands fa-facebook"></i>
                    </div>
                </Fade>
                
            </div>
        </Fade>


        {/* comerce 
        industrue 
        service and agriculture  */}
    
        <form className='form-contact' onSubmit={handleSubmit}>
            <Fade right cascade>
            <div className='part-1'>
                <input className='input-field' required  type='text' placeholder='Entrer votre Nom ' />
                <input className='input-field' required type='email' placeholder='Entrer votre Email ' />
                <input className='input-field' required type='text' placeholder='Entrer votre Numero ' />   
                <input className='input-field' required type='text' placeholder='Entrer Sujet ' />
                <textarea className='text-area'required  placeholder='Entrer votre message '>
                </textarea>
                <div className='btns'>
                    <input type="submit" value={"Envoyer"}  className='btn' />
                    <input type="reset" value={"reset"}  className='btn' />
                </div>
            </div>
            </Fade>
        </form>
        </div>
    </div>
    </>
  )
}

export default Contact