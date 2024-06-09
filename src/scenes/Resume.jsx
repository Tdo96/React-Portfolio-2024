import LineGradient from "../components/LineGradient";
import { motion } from "framer-motion";

const Resume = () => {

    const onButtonClick = () => {
        const pdfUrl = "CE Resume 2024.pdf";
        const link = document.createElement("a");
        link.href = pdfUrl;
        link.download = "document.pdf"; // specify the filename
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

  return (
    <section id="resume" className="pt-32 pb-16">
      {/* HEADING */}
      <motion.div
        className="md:w-1/4"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, x: -50 },
          visible: { opacity: 1, x: 0 },
        }}
      >
        <p className="font-playfair font-semibold text-4xl mb-5 text-yellow">
          RESUME
        </p>

          <LineGradient width="w-1/3" />

        <p className="mt-10">
          Here's is a provided resume and certification. THis shows my education and 
          previous experience
        </p>
      </motion.div>

      {/* Resume */}
      <div className="md:flex md:justify-between gap-8">
        <motion.div
          className="mx-auto relative bg-blue max-w-[400px] h-[350px] flex flex-col justify-end p-16 mt-48
            before:absolute before:top-[-120px] before:-ml-[120px] before:left-1/2 before:content-resume1"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          variants={{
            hidden: { opacity: 0, scale: 0.8 },
            visible: { opacity: 1, scale: 1 },
          }}
        >
          <div className= " text-center p-6 z-10 ">
            <button onClick={onButtonClick} className="-mb-5 p-3 bg-yellow border-none text-deep-blue text-xl hover:text-white hover:bg-red" >
              Download CV
            </button>
          </div>
        </motion.div>
      
      </div>
    </section>
  );
};

export default Resume;