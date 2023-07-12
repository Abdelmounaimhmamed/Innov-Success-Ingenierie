import React from 'react'
import "./Contact.css";
import { Fade } from 'react-reveal';
import { useState } from 'react';
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Social from '../../Components/Social/Social';
import SocialBtns from '../../Components/SocialBtns/SocialBtns';

const Contact = () => {
    const [name,setName] = useState();
    const [email,setEmail] = useState();
    const [numero , setNumero] = useState();
    const [subject,setSubject] = useState();
    const [message , setMessage] = useState();

    const handleSubmit = async  (event) => {
        event.preventDefault();
        try {
            const {data} = await axios.post("https://good-gold-piglet-hem.cyclic.app/contact" , {
                name , 
                email ,
                numero,
                subject,
                message
            });
            
            setName();
            setEmail();
            setNumero();
            setSubject();
            setMessage();
            toast.success("Message envoyer !!");
        } catch (error) {
            
        }
    }
  return (
    <>
     <Fade bottom duraion={1200}>
        <h1 className='title'>Contactez-nous</h1>
        <h3 className='title title-5'>Contactez nous pour plus d'information</h3>
        </Fade>
        <div className='Contact' id="contact">
        <Fade left cascade>
        <div className='part'>
            <Fade cascade left>
                <ToastContainer />
                <div className='social'>
                        <Social />
                        <div className='btns'>
                           <SocialBtns />
                        </div>
                </div>
            </Fade>
        </div>
        </Fade>
        <div className='contact-us'>
            <form className='form-contact' onSubmit={handleSubmit} method='post'>
                <Fade right cascade>
                    <div className='part-1'>
                        <input className='input-field  form-control' onChange={(e) => setName(e.target.value)}  required  type='text' placeholder='Entrer votre Nom ' />
                        <input className='input-field form-control' onChange={(e) => setEmail(e.target.value)}  required type='email' placeholder='Entrer votre Email ' />
                        <input className='input-field form-control' onChange={(e) => setNumero(e.target.value) }  required type='text' placeholder='Entrer votre Numero ' />   
                        <input className='input-field form-control' onChange={(e) => setSubject(e.target.value) }  required type='text' placeholder='Entrer Sujet ' />
                        <textarea className='text-area form-control'onChange={(e) => setMessage(e.target.value)}  required  placeholder='Entrer votre message '>
                        </textarea>
                        <div className='btns'>
                            <button type="submit" class="btn btn-primary btn-block px-5">Envoyer </button>
                            <input type="reset" value={"reset"}  className='btn btn-primary btn-block px-5' />
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





{/* 

{/* comerce 
industrue 
service and agriculture  */}

{/*


*/}