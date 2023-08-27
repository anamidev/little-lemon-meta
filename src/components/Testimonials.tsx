import '@/styles/Testimonials.css';
import { StaticImageData } from 'next/image';
import photo1 from '@/assets/photos/photo1.jpg';
import photo2 from '@/assets/photos/photo2.jpg';
import photo3 from '@/assets/photos/photo3.jpg';
import Testimonials_Card from './Testimonials_Card';

export interface ITestimonial {
    key: number;
    stars: number[];
    userPhoto: StaticImageData;
    review: string;
}

const testimonialsList: ITestimonial[] = [
    {
        key: 1,
        stars: [1, 1, 1, 1, 1],
        userPhoto: photo1,
        review: 'One of the friendliest family restaurant!',
    },
    {
        key: 2,
        stars: [1, 1, 1, 1, 1],
        userPhoto: photo2,
        review: 'Fascinating food and atmosphere!',
    },
    {
        key: 3,
        stars: [1, 1, 1, 1, 1],
        userPhoto: photo3,
        review: 'Feels like home!',
    },
];

export default function Testimonials() {
    return (
        <section className="testimonials-section-background">
            <div className="testimonials-section-container">
                <h1>What people say about us</h1>
                <div className="testimonials-cards">
                    {testimonialsList.map((review) => (
                        <Testimonials_Card
                            key={review.key}
                            review={review}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
