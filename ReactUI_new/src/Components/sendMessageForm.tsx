import React, { ChangeEventHandler, ReactHTMLElement, useState } from "react";
import './scss/sendMessageForm.scss';


interface SendMessageFormProps {
    sendMessage: (message: string) => void
}

export default function SendMessageForm(props: SendMessageFormProps) {

    const [message, setMessage] = useState('');

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        props.sendMessage(message);
        setMessage('');
    }


    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setMessage(e.target.value);
    }

    return (
        <form
            onSubmit={handleSubmit}
            className="send-message-form">
            <input
                onChange={handleChange}
                value={message}
                placeholder="Type your message and hit ENTER"
                type="text" />
        </form>)

}


