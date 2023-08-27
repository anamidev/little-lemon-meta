import Reservations_Form from '@/components/Reservations_Form';
import '@/styles/Reservations.css';

export default function Reservations() {
    return (
        <div className="res-content-wrapper">
            <div className="res-content-container">
                <div className="form">
                    <Reservations_Form />
                </div>
            </div>
        </div>
    );
}
