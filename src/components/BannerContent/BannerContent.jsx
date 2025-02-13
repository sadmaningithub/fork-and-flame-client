import { Link } from "react-router";


const BannerContent = ({ bg, title, text, btn_text }) => {
    return (
        <div
            className="hero min-h-screen"
            style={{
                backgroundImage: `url(${bg})`,
            }}>
            <div className="hero-overlay"></div>
            <div className="hero-content text-neutral-content text-center">
                <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold">{title}</h1>
                    <p className="mb-5">
                        {text}
                    </p>
                    {
                        btn_text && <Link to='/menu'> <button className="btn btn-primary">{btn_text}</button> </Link>
                    }
                </div>
            </div>
        </div>
    );
};

export default BannerContent;