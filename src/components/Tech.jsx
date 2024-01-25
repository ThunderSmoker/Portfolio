import React from 'react'
import { BallCanvas } from './canvas'
import { SectionWrapper } from '../hoc'
import { technologies } from '../constants'
import { motion } from 'framer-motion'
import { textVariant } from '../utils/motion'
import {styles} from  '../styles'
import { useMediaQuery } from 'react-responsive'
const Tech = () => {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const animationVariants = {
    hover: {
      scale: 1.2,
      rotateY: [0, 360],
      transition: {
        duration: 1,
        ease: 'easeInOut',
        repeat: Infinity,
      },
    },
  };

  return (
    <div className='flex flex-col flex-wrap justify-center gap-10'>
       <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My Skills </p>
        <h2 className={styles.sectionHeadText}>Technologies.</h2>
      </motion.div>
      <motion.div className='flex flex-row flex-wrap justify-center gap-10' variants={textVariant()}>

      {isMobile ? (
          technologies.map((technology) => (
            <div className='w-28 h-28' key={technology.name}>
              {/* Render your 3D CSS ball with technology icon for mobile */}
              <motion.div
                className='mobile-3d-ball'
                style={{
                  width: '100px',
                  height: '100px',
                  background: 'radial-gradient(circle at 15% 40%, #555, #222)',
                  borderRadius: '50%',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
                variants={animationVariants}
                whileHover='hover'
              >
                <img src={technology.icon} alt={technology.name} style={{ width: '80%', height: '80%' }} />
              </motion.div>
            </div>
          ))
        ) : (
          technologies.map((technology) => (
            <div className='w-28 h-28' key={technology.name}>
              {/* Render BallCanvas for non-mobile devices */}
              <BallCanvas icon={technology.icon} />
            </div>
          ))
        )}
      </motion.div>
  </div>
  )
}

export default SectionWrapper(Tech,"")