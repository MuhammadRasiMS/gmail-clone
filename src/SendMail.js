// import React from 'react'
// import CloseIcon from "@mui/icons-material/Close";
// import { Button } from '@mui/material';
// import './SendMail.css';
// import { useForm } from 'react-hook-form';

// function SendMail() {
//     const {register, handleSubmit, watch, errors} = useForm();
//     const onSubmit = (data) => {
//       console.log(data);
//     }   
//   return (
//     <div className="sendMail">
//       <div className="sendMail__header">
//         <h3>New Message</h3>
//         <CloseIcon className="sendMail__close" />
//       </div>
//       <form action= {handleSubmit(onSubmit)}>
//         <input {...register("to", { required: true })} placeholder="To" />
//         {errors.to && <p className='sendMail__error'>To is required</p>}
//         <input
//           {...register("subject", { required: true })}
//           placeholder="Subject"
//         />
//         <input
//           {...register("message", { required: true })}
//           placeholder="Message..."
//           className="sendMail__message"
//         />
//         <div className="sendMail__options">
//           <Button className="sendMail__send">Send</Button>
//         </div>
//       </form>
//     </div>
//   );
// }

// export default SendMail


import React from "react";
import CloseIcon from "@mui/icons-material/Close";
import { Button } from "@mui/material";
import "./SendMail.css";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { closeSendMessage } from "./features/mailSlice";
import firebase from "firebase";
import { db } from "./firebase";


function SendMail() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (formData) => {
    console.log(formData);
    db.collection("emails").add ({
      to : formData.to,
      subject : formData.subject,
      message : formData.message,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    dispatch(closeSendMessage()); 
  };
  const dispatch = useDispatch();
  return (
    <div className="sendMail">
      <div className="sendMail__header">
        <h3>New Message</h3>
        <CloseIcon onClick={()=>dispatch(closeSendMessage())}
         className="sendMail__close" />
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register("to", { required: true })} placeholder="To" type="email" name="to" />
        {errors.to && (
          <span className="sendMail__error">This field is required</span>
        )}
        <input
          {...register("subject", { required: true })}
          placeholder="Subject" name="subject"
        />
        {errors.subject && (
          <span className="sendMail__error">This field is required</span>
        )}
        <input
          {...register("message", { required: true })}
          placeholder="Message..."
          className="sendMail__message" name="message"
        />
        {errors.message && (
          <span className="sendMail__error">This field is required</span>
        )}
        <div className="sendMail__options">
          <Button type="submit" className="sendMail__send">
            Send
          </Button>
        </div>
      </form>
    </div>
  );
}

export default SendMail;

