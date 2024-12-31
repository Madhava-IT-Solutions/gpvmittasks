import {React, useState } from "react"

import FeedbackForm from "./FeedbackForm"


function Thanks (){
     const [submitted, setsubmit] = useState({
        submitted:false
      })

      const submitFeedback = (s) => {
        setsubmit(previousState => {
          console.log(s)
          return {...previousState, submitted:s}
    
        })
      }
   
    
    if (submitted.submitted === true){
        return <p className="thanks">Thanks For Your Feedback</p>
    }else{
        return (
            <FeedbackForm  submitFeedback={submitFeedback}  submitted={submitted} />
         )
    }
    
}

export default Thanks
