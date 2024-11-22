import React, { useState } from 'react';
import '../Contacts/Contact.css';
import { useTranslation } from 'react-i18next';
import { db } from '../../configs/firebase';
import { collection, addDoc } from 'firebase/firestore';

function Contact() {
    const { t } = useTranslation();
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = {
            name: e.target.name.value,
            email: e.target.email.value,
            message: e.target.message.value,
        };

        setIsSubmitting(true);

        try {
            await addDoc(collection(db, 'contactMessages'), formData);
            alert(t('messageSent')); // Add this key to your translations
            e.target.reset(); // Reset the form
        } catch (error) {
            console.error('Error sending message:', error);
            alert(t('messageError')); // Add this key to your translations
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className='contactpage'>
            <h1>{t('contactUs')}</h1>

            <form id='contact-form' onSubmit={handleSubmit}>
                <label htmlFor='name'>{t('fullName')}</label>
                <input name='name' placeholder={t('enterFullName')} type="text" required />

                <label htmlFor='email'>{t('email')}</label>
                <input name='email' placeholder={t('enterEmail')} type="email" required />

                <label htmlFor='message'>{t('message')}</label>
                <textarea name="message" cols="30" rows="10" placeholder={t('enterMessage')} required></textarea>

                <button type='submit' disabled={isSubmitting}>
                    {isSubmitting ? t('sending') : t('sendMessage')}
                </button>
            </form>
        </div>
    );
}

export default Contact;
