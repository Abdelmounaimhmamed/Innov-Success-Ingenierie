import React from 'react'

const SocialBtns = () => {
  return (
    <>  
        <div className='btns'>
            <button type="button" class="btn btn-secondary btn-floating mx-1" >
                 <i class="fab fa-facebook-f"></i>
            </button>
            <button type="button" class="btn btn-secondary btn-floating mx-1">
                 <i class="fab fa-google"></i>
            </button>
            </div>
        <div className='btns'>
            <button type="button" class="btn btn-secondary btn-floating mx-1">
            <i class="fab fa-twitter"></i>
            </button>
            <button type="button" class="btn btn-secondary btn-floating mx-1">
            <i class="fab fa-linkedin"></i>
            </button>
        </div>
    </>
  )
}

export default SocialBtns