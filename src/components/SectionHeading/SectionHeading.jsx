
const SectionHeading = ({heading, subHeading}) => {
    return (
        <div className="space-y-4">
            <h1 className="text-5xl font-bold ">{heading}</h1>
            <h3 className="text-xl font-bold ">{subHeading}</h3>
        </div>
    );
};

export default SectionHeading;