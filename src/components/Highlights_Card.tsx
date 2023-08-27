import Image from 'next/image';
import { ISpecialList } from './Highlights';
import { MdDeliveryDining } from 'react-icons/md';

export default function Highlights_Card({ special }: { special: ISpecialList }) {
    return (
        <div className="flex flex-col bg-[#edefee] rounded-tl-[20px] rounded-tr-[20px]">
            <div className="w-full h-[300px] overflow-hidden flex items-center rounded-tl-[20px] rounded-tr-[20px]">
                <Image
                    src={special.image}
                    alt="Special dessert"
                />
            </div>
            <div className="grow pt-[30px] px-5 pb-10 flex flex-col">
                <div className="special-card-title">
                    <h3>{special.title}</h3>
                    <h3 className="price-tag">{special.price}</h3>
                </div>
                <p className="card-p grow">{special.description}</p>
                <h4 className="card-h4">
                    {special.order}
                    <MdDeliveryDining
                        size={30}
                        style={{ color: '#333333', marginLeft: '10px' }}
                    />
                </h4>
            </div>
        </div>
    );
}
