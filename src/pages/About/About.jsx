import { Link } from 'react-router';
import cafeImg from '../../assets/img/cafe.jpg'
import SectionHeading from '../../components/SectionHeading/SectionHeading';

const About = () => {
    return (
        <div className='my-24 max-w-7xl mx-auto p-5 lg:p-10'>

            <div className='flex flex-col lg:flex-row gap-10 items-center'>

                <div>
                    <img className='rounded-xl' src={cafeImg} alt="" />
                </div>

                <div className='space-y-4'>

                    <SectionHeading heading={'About Fork & Flame'} subHeading={'Where Fire Meets Flavor'} />

                    <p>
                        At Fork & Flame, we believe that great food starts with fire. Our passion for flame-grilled perfection drives us to craft dishes that ignite your senses and leave a lasting impression.
                        <br />
                        From smoky, slow-cooked ribs to charred, juicy steaks, every plate is an experience—bold flavors, fresh ingredients, and the perfect sear. We take pride in using only the finest, locally sourced ingredients, ensuring that every bite is as authentic as it is delicious.
                        <br />
                        Whether you&apos;re here for a cozy dinner, a celebration, or simply to indulge in the art of grilling, Fork & Flame is your destination for unforgettable meals, warm ambiance, and handcrafted perfection.
                        <br />
                        Great food starts with fire. Let&apos;s feast.
                    </p>

                    <Link to=''> <button className='btn'> See more </button> </Link>
                </div>
            </div>

        </div>
    );
};

export default About;