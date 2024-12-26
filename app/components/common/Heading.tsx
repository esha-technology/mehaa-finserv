import { motion } from "framer-motion";

interface HeadingProps {
  heading: string;
  color: string;
}

const Heading: React.FC<HeadingProps> = ({ heading, color }) => {
  return (
    <div className="w-fit relative mx-auto">
      <h1 className="font-poppins text-3xl sm:text-4xl md:text-5xl font-bold text-center w-fit mx-auto z-10">
        {heading}
      </h1>
      <span
        className={`absolute left-1/4 bottom-0 w-3/4 sm:w-1/2 md:w-3/4 lg:w-3/4 h-5 ${color} -z-10`}
      ></span>
    </div>
  );
};

export default Heading;
