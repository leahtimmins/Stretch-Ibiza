'use client';
import React, { useState } from 'react';
import { sendContactEmail } from '@/utils/sendContactEmail';
import { useForm } from 'react-hook-form';
import { sendGTMEvent } from '@next/third-parties/google'
import Container from '../elements/Container';

function ContactForm({blok}) {
    const { register, handleSubmit } = useForm();

    const {
        _uid,
        anchorIdentity
    } = blok;

    function onSubmit(data) {
        sendGTMEvent({ event: 'formSubmitted', value: 'contact-form' })
        sendContactEmail(data);
    }


    return (
        <section id={anchorIdentity ? anchorIdentity : _uid} data-component="contactForm" className="py-12">
            <Container>
                <div className="max-w-3xl mx-auto">
                    <form encType="multipart/form-data" onSubmit={handleSubmit(onSubmit)}>
                        <div className='mb-5'>
                            <label
                                htmlFor='name'
                                className={`mb-3 block font-semibold text-glacialBold text-black`}
                            >
                                Full Name
                            </label>
                            <input
                                id="name"
                                type='text'
                                placeholder='Your name'
                                className='w-full rounded-md border border-gray-300 bg-white py-3 px-6 font-semibold text-glacialBoldtext-gray-700 outline-none focus:border-purple-500 focus:shadow-md'
                                {...register('name', { required: true })}
                            />
                        </div>
                        <div className='mb-5'>
                            <label
                                htmlFor='email'
                                className={`mb-3 block font-semibold text-glacialBold text-black`}
                            >
                                Email Address
                            </label>
                            <input
                                type='email'
                                id="email"
                                placeholder='yourname@email.com'
                                className='w-full rounded-md border border-gray-300 bg-white py-3 px-6 text-base font-semibold text-glacialBold text-gray-700 outline-none focus:border-purple-500 focus:shadow-md'
                                {...register('email', { required: true })}
                            />
                        </div>
                        <div className='mb-5'>
                            <label
                                htmlFor='phone'
                                className={`mb-3 block font-semibold text-glacialBold text-black`}
                            >
                                Contact Number
                            </label>
                            <input
                                id="phone"
                                type='phone'
                                placeholder='Phone number'
                                className='w-full rounded-md border border-gray-300 bg-white py-3 px-6 text-base font-semibold font-glacialBold text-gray-700 outline-none focus:border-purple-500 focus:shadow-md'
                                {...register('phone', { required: true })}
                            />
                        </div>

                        <div className='mb-5'>
                            <label
                                htmlFor='interest'
                                className={`mb-3 block font-semibold text-glacialBold text-black`}
                            >
                                Reason for contact
                            </label>
                            <select
                                id="interest"
                                name="interest"
                                {...register('interest', { required: false })}
                                className="font-semibold text-glacialBold"
                            >
                                <option value={'No interest selected'}>Select Option</option>
                                <option value={'Bodywork'}>Bodywork</option>
                                <option value={'Yoga and Somatics'}>Yoga & Somatics</option>
                                <option value={'Retreats'}>Retreats</option>
                                <option value={'Workshops and Classes'}>Workshops & Classes</option>
                                <option value={'Work with me'}>Work with me</option>
                                <option value={'Equipment hire'}>Equipment hire</option>
                            </select>
                        </div>
                        <div className='mb-5'>
                            <label
                                htmlFor='message'
                                className={`mb-3 block font-semibold text-glacialBold text-black`}
                            >
                                Your message / additional information
                            </label>
                            <textarea
                                id="message"
                                rows={4}
                                className='w-full resize-none rounded-md border border-gray-300 bg-white py-3 px-6 text-base font-semibold text-glacialBold text-gray-700 outline-none focus:border-purple-500 focus:shadow-md'
                                placeholder={'Your message'}
                                {...register('message', { required: false })}
                            ></textarea>
                        </div>
                        <div>
                            <button className={`hover:shadow-form rounded-md bg-mustard-yellow py-3 px-8 text-glacialBold font-bold uppercase text-black outline-none`}>
                                Submit
                            </button>
                        </div>
                    </form>
                </div>

            </Container>

        </section>

    )
}


export default ContactForm;
