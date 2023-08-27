import '@/styles/Highlights.css';
import '@/styles/HighlightsCard.css';
import greekSalad from '@/assets/salad.jpg';
import bruschetta from '@/assets/bruschetta1.jpg';
import dessert from '@/assets/creme.jpg';
import { StaticImageData } from 'next/image';
import Highlights_Card from './Highlights_Card';

export interface ISpecialList {
    image: StaticImageData;
    title: string;
    price: string;
    description: string;
    order: string;
}

const specialsList: ISpecialList[] = [
    {
        image: greekSalad,
        title: 'Greek Salad',
        price: '$12.99',
        description:
            'The famous Greek salad of crispy lettuce, peppers, olives and our Chicago styled feta cheese, garnished with crunchy garlic, rosemary croutons.',
        order: 'Order a delivery',
    },
    {
        image: bruschetta,
        title: 'Bruschetta',
        price: '$5.99',
        description:
            'Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil; made perfect for an evening dinner.',
        order: 'Order a delivery',
    },
    {
        image: dessert,
        title: 'Lemon Dessert',
        price: '$5.00',
        description:
            "This comes straight from Grandma's recipe book. Every last ingredient has been sourced and is as authentic as can be imagined.",
        order: 'Order a delivery',
    },
];

export default function Highlights() {
    return (
        <section className="specials-section-container">
            <div className="specials-section-title">
                <h1>This Week's Specials</h1>
                <div className="btn-container">
                    <button className="btn btn-menu">Online menu</button>
                </div>
            </div>
            <div className="special-card">
                {specialsList.map((special: ISpecialList) => (
                    <Highlights_Card
                        key={special.title}
                        special={special}
                    />
                ))}
            </div>
        </section>
    );
}
