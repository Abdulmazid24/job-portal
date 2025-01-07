import { easeOut, motion } from 'framer-motion';

const Banner = () => {
  return (
    <div className="hero  min-h-96 my-10">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="flex-1 space-y-3">
          {/* <div className="flex gap-3">
            <motion.img
              animate={{ x: [null, 100, 0] }}
              transition={{
                duration: 15,
                delay: 1,
                ease: [0, 0.71, 0.2, 1.01],
                repeat: Infinity,
              }}
              src="https://i.ibb.co.com/1nGBHGy/happy-team-1.jpg"
              className="max-w-sm rounded-tr-3xl shadow-2xl md:w-60 object-contain rounded-t-[40px] rounded-br-[40px] border-b-[6px] border-l-4 border-gray-950"
            />
            <motion.img
              animate={{ x: [0, 50, 0], y: [null, 300, 0] }}
              transition={{
                duration: 20,
                delay: 0.5,
                ease: [0, 0.71, 0.2, 1.01],
                repeat: Infinity,
              }}
              src="https://i.ibb.co.com/x3YNRtk/happy-team-3.jpg"
              alt=""
              className="max-w-sm rounded-lg shadow-2xl md:w-60 object-contain rounded-t-[40px] rounded-br-[40px] border-b-[6px] border-l-4 border-gray-950"
            />
          </div>
          <div className="flex gap-5">
            <motion.img
              animate={{ x: [null, 100, 0], y: [null, 100, 0] }}
              transition={{
                duration: 15,
                delay: 1,
                ease: [0, 0.71, 0.2, 1.01],
                repeat: Infinity,
              }}
              src="https://i.ibb.co.com/RQ73d32/happy-team-2.jpg"
              alt=""
              className="max-w-sm rounded-lg shadow-2xl md:w-60 object-contain rounded-t-[40px] rounded-br-[40px] border-b-[6px] border-l-4 border-gray-950"
            />
            <motion.img
              animate={{ x: [0, 200, 0], y: [0, 100, 0] }}
              transition={{
                duration: 20,
                delay: 0.5,
                ease: [0, 0.71, 0.2, 1.01],
                repeat: Infinity,
              }}
              src="https://i.ibb.co.com/xhRgRmb/happy-team-4.jpg"
              alt=""
              className="max-w-sm rounded-lg shadow-2xl md:w-60 object-contain rounded-t-[40px] rounded-br-[40px] border-b-[6px] border-l-4 border-gray-950"
            />
          </div> */}
          <div className="flex flex-wrap gap-5 justify-center">
            <motion.img
              animate={{ x: [-50, 50, -50] }} // Smooth horizontal oscillation
              transition={{
                duration: 6,
                ease: 'easeInOut', // Smooth easing
                repeat: Infinity,
              }}
              src="https://i.ibb.co/1nGBHGy/happy-team-1.jpg"
              alt="Smiling team photo 1"
              className="max-w-sm shadow-2xl md:w-60 object-contain rounded-t-[40px] rounded-br-[40px] border-b-[6px] border-l-4 border-gray-950"
            />

            <motion.img
              animate={{ y: [-30, 30, -30] }} // Vertical bobbing animation
              transition={{
                duration: 7,
                ease: 'easeInOut',
                repeat: Infinity,
              }}
              src="https://i.ibb.co/x3YNRtk/happy-team-3.jpg"
              alt="Smiling team photo 2"
              className="max-w-sm shadow-2xl md:w-60 object-contain rounded-t-[40px] rounded-br-[40px] border-b-[6px] border-l-4 border-gray-950"
            />

            <motion.img
              animate={{ scale: [1, 1.1, 1] }} // Gentle zoom effect
              transition={{
                duration: 5,
                ease: 'easeInOut',
                repeat: Infinity,
              }}
              src="https://i.ibb.co/RQ73d32/happy-team-2.jpg"
              alt="Smiling team photo 3"
              className="max-w-sm shadow-2xl md:w-60 object-contain rounded-t-[40px] rounded-br-[40px] border-b-[6px] border-l-4 border-gray-950"
            />

            <motion.img
              animate={{ rotate: [0, 5, 0] }} // Subtle tilting animation
              transition={{
                duration: 8,
                ease: 'easeInOut',
                repeat: Infinity,
              }}
              src="https://i.ibb.co/xhRgRmb/happy-team-4.jpg"
              alt="Smiling team photo 4"
              className="max-w-sm shadow-2xl md:w-60 object-contain rounded-t-[40px] rounded-br-[40px] border-b-[6px] border-l-4 border-gray-950"
            />
          </div>
        </div>
        <motion.div
          transition={{
            duration: 10,
            delay: 1,
            ease: easeOut,
            repeat: Infinity,
          }}
          className="flex-1"
        >
          <h1 className="text-5xl font-bold">
            Latest{' '}
            <motion.span
              animate={{
                color: [
                  '#33ff46',
                  '#33ff42',
                  '#ff4633',
                  '#DFFF00',
                  '#800000',
                  '#808000',
                ],
              }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              Jobs
            </motion.span>{' '}
            for you
          </h1>
          <p className="py-6 font-thin text-lg">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <button className="btn bg-purple-400 font-bold">Get Started</button>
        </motion.div>
      </div>
    </div>
  );
};

export default Banner;
