import Image from 'next/image';
import { ITestimonial } from './Testimonials';
import { BsStarFill, BsStar } from 'react-icons/bs';

export default function Testimonials_Card({ review }: { review: ITestimonial }) {
    return (
        <div className="p-10 flex flex-col items-center bg-[#FCDABB]">
            <Image
                src={review.userPhoto}
                alt="Person testimonial"
                width={200}
                height={200}
                className="w-40 h-40 object-cover rounded-full"
            />
            <p className=" py-5 italic text-center">"{review.review}"</p>
            <div className="flex grow items-end">
                {review.stars.map((star, index) => (
                    <span key={star + index}>
                        {star === 1 ? (
                            <BsStarFill className="w-8 h-8 text-yellow-400" />
                        ) : (
                            <BsStar className="w-8 h-8 text-yellow-400" />
                        )}
                    </span>
                ))}
            </div>
        </div>
    );
}
