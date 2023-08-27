'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { BsArrowLeft, BsCheckCircleFill } from 'react-icons/bs';
import Link from 'next/link';

const schema = yup.object({
    name: yup.string().required('Full name is a required field!'),
    email: yup.string().required('Email is a required field!').email('Email is not valid!'),
    telephone: yup.string().required('Telephone is a required field!'),
    guests: yup
        .number()
        .integer('You must enter an integer number of guests!')
        .typeError('You must enter a valid number!')
        .min(1, 'There must be at least 1 guest!')
        .required('Please specify number of guests per table!'),
    date: yup.string().required('Please select date and time!'),
    occasion: yup.string().required('Please select an occasion!'),
});

export default function Reservations_Form() {
    const [isSuccess, setIsSuccess] = useState(false);

    const {
        handleSubmit,
        register,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema),
    });

    const formSubmit = (data: object) => {
        console.table(data);
        console.log('Success!');
        setIsSuccess(true);
    };

    return !isSuccess ? (
        <form onSubmit={handleSubmit(formSubmit)}>
            <h1 className="text-center">Reserve a Table</h1>
            <p className="text-center">
                Please fill in and submit form to book your reservation at Little Lemon.
            </p>
            <fieldset>
                <div className="field">
                    <label htmlFor="name">Full Name</label>
                    <input
                        type="text"
                        placeholder="Your name"
                        {...register('name')}
                    />
                    <span className="error-message">{errors.name?.message}</span>
                </div>
                <div className="field">
                    <label htmlFor="email">Email</label>
                    <input
                        type="text"
                        placeholder="example@email.com"
                        {...register('email')}
                    />
                    <span className="error-message">{errors.email?.message}</span>
                </div>
                <div className="field">
                    <label htmlFor="telephone">Telephone</label>
                    <input
                        type="tel"
                        placeholder="+1(234)555-55-55"
                        {...register('telephone')}
                    />
                    <span className="error-message">{errors.telephone?.message}</span>
                </div>

                <div className="field occasion">
                    <label htmlFor="occasion">Occasion (optional)</label>
                    <div className="options">
                        <select {...register('occasion')}>
                            <option value="">Select occasion</option>
                            <option value="birthday">Birthday</option>
                            <option value="engagement">Engagement</option>
                            <option value="anniversary">Anniversary</option>
                        </select>
                    </div>
                    <span className="error-message">{errors.occasion?.message}</span>
                </div>
                <div className="field guest">
                    <label htmlFor="guests">Guests</label>
                    <input
                        type="number"
                        placeholder="2"
                        {...register('guests')}
                    />
                    <span className="error-message">{errors.guests?.message}</span>
                </div>

                <div className="field">
                    <label htmlFor="date">Date & Time</label>
                    <input
                        type="datetime-local"
                        {...register('date')}
                    />
                    <span className="error-message">{errors.date?.message}</span>
                </div>
                <button
                    className="reserve-btn"
                    type="submit"
                >
                    Reserve
                </button>
            </fieldset>
        </form>
    ) : (
        <div className="flex flex-col items-center">
            <BsCheckCircleFill className="w-10 h-10 text-[#495e57]" />
            <h1>Success!</h1>
            <p className="text-center">We will contact you soon to confirm your reservation!</p>
            <Link
                href={'/'}
                className="reserve-btn text-center"
            >
                <BsArrowLeft className="w-6 h-6 inline mr-3" />
                Back to home
            </Link>
        </div>
    );
}
