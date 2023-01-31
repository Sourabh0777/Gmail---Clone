import React from 'react';
import "./SendMail.css"

import CloseIcon from '@mui/icons-material/Close';
import { Button } from '@mui/material';
// react-hook-form
import { useForm } from "react-hook-form";
//react-redux
import { useDispatch } from 'react-redux';
import { closeSendMessage } from './features/mailSlice';

//firebase
import { updateDoc, serverTimestamp } from "firebase/firestore";
import { doc, onSnapshot, collection, addDoc, documentId, getDoc } from "firebase/firestore";
import { db } from './firebase';




function SendMail() {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    const onSubmit = (formdata) => {
        console.log(formdata);
        addDoc(collection(db, "emails"), {
            to: formdata.to,
            subject: formdata.subject,
            message: formdata.message,
            timestamp: serverTimestamp()
        })
        dispatch(closeSendMessage());
    }
    const dispatch = useDispatch();
    return (
        <div className='sendMail'>
            <div className="sendMail_header">
                <h3>New Message</h3>
                <CloseIcon
                    className='sendMail_close'
                    onClick={() => dispatch(closeSendMessage())}
                />
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input
                    placeholder='To'
                    type="email"
                    {...register('to', { required: true })}
                    aria-invalid={errors.to ? "true" : "false"}
                />
                {errors.to && <p className='sendMail_Error'>* To is required</p>}
                <input placeholder='Subject'
                    type="text"
                    {...register('subject', { required: true })}
                    aria-invalid={errors.subject ? "true" : "false"}
                />
                {errors.subject && <p className='sendMail_Error'>* Subject is required</p>}

                <input
                    placeholder='Message..'
                    type="text" className='sendMail_Message'
                    {...register('message', { required: true })}
                />
                {errors.message && <p className='sendMail_Error'>* Message is required</p>}

                <div className="sendMail_options">
                    <Button type='submit' className='sendMail_send'>Send</Button>
                </div>
            </form>
        </div>
    )
}

export default SendMail