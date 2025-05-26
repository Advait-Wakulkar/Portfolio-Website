import React from 'react'
import { passions, words } from '../constants'
import Button from '../components/Button'

const Hero = () => {
  return (
    <section id='hero' className='relative overflow-hidden'>
        <div className='absolute top-0 left-0 z-10'>
            <img src='/images/bg.png' alt='background' />
        </div>
        <div className='hero-layout'>
            {/*LEFT: HERO CONTENT */}
            <header className='flex flex-col justify-center md:w-full w-screen md:px-20 px-5'>
                <div className='flex flex-col gap-7'>
                    <div className='hero-text'>
                        <h1>
                            Shaping
                            <span className='slide'>
                                <span className='wrapper'>
                                    {words.map((word) => (
                                        <span key={word.text} className='flex items-center md:gap-3 gap-1 pb-2'>
                                            <img 
                                                src={word.imgPath}
                                                alt={word.text}
                                                className='xl:w-12 xl:h-12 md:w-10 md:h-10 w-8 h-8 md:p-2 p-1 rounded-full bg-gray-100'
                                            />
                                            <span>{word.text}</span>
                                        </span>
                                    ))}
                                </span>
                            </span>
                        </h1>
                        <h1>into Real Projects</h1>
                        <h1>that Deliver Results</h1>
                    </div>
                    
                    {/* Passion text with sliding animation
                        - text-white-50: Custom white color from theme
                        - md:text-xl: Larger text on desktop
                        - relative z-10: Stacking context
                        - pointer-events-none: Prevents text selection
                    */}
                    <p className='text-white-50 md:text-xl relative z-10 pointer-events-none'>
                        Hi, I'm Advait, a Master's Student at Northeastern University with a passion for 
                        {/* Passion slider - needs custom class for inline text animation */}
                        <span className='passion-slide'>
                            <span className='passion-wrapper'>
                                {passions.map((passion) => (
                                    // Each passion word in its own span
                                    // No images needed for text-only passions
                                    <span key={passion} className='passion-word'>
                                        {passion}.
                                    </span>
                                ))}
                            </span>
                        </span>
                    </p>
                    <Button className="md:w-80 md:h-16 w-60 h-12" id="button" text=" See My Work"></Button>
                </div>
            </header>
        </div>
    </section>
  )
}

export default Hero