import '@/styles/About.css';
import Image from 'next/image';
import owners1 from '@/assets/owners1.jpg';
import owners2 from '@/assets/owners2.jpg';

export default function About() {
    return (
        <section className="about-section-background">
            <div className="about-section-container">
                <div className="about-section-left">
                    <h1>Little Lemon</h1>
                    <h2>Chicago</h2>
                    <p>
                        Little Lemon is owned by two Italian brothers, Mario and Adrian, who moved
                        to the United States to pursue their shared dream of owning a restaurant. To
                        craft the menu, Mario relies on family recipes and his experience as a chef
                        in Italy. Adrian does all the marketing for the restaurant and led the
                        effort to expand the menu beyond classic Italian to incorporate additional
                        cuisines from the Mediterranean region.
                    </p>
                </div>
                <div className="about-section-right relative">
                    <div className="flex flex-wrap justify-evenly gap-4">
                        <div className="relative lg:absolute lg:right-0 w-[280px] h-[320px]">
                            <Image
                                src={owners1}
                                alt="Owners"
                                priority
                                fill
                                className="object-cover rounded-[10px]"
                            />
                        </div>
                        <div className="relative lg:absolute lg:right-40 lg:top-20 w-[280px] h-[320px]">
                            <Image
                                src={owners2}
                                alt="Owners"
                                priority
                                fill
                                className="object-cover rounded-[10px]"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
