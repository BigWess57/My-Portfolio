import React from 'react'
import WorkExperience from './WorkExperience'
import About from './About'

const BeginningSection = () => {
  return (
    <div className="relative bg-neutral-950 overflow-hidden">
        <div 
          aria-hidden="true" 
          className="absolute inset-x-0 top-0 z-0 h-full blur-3xl opacity-30"
        >
            <div className="absolute inset-0 m-auto h-full w-full max-w-7xl">
          
                <div 
                    className="absolute h-96 w-96 blur-3xl"
                    style={{
                        backgroundColor: 'var(--primary-500)', 
                        animation: 'aurora 12s ease-in-out infinite',
                        top: '10%',
                        left: '5%',
                    }}
                />
                
                <div 
                    className="absolute h-96 w-96 blur-3xl"
                    style={{
                        backgroundColor: 'var(--secondary-500)',
                        animation: 'aurora 17s ease-in-out infinite',
                        animationDelay: '6s',
                        animationFillMode: 'backwards',
                        bottom: '50%',
                        right: '10%',
                    }}
                />
                
                <div 
                    className="absolute h-96 w-96 blur-3xl"
                    style={{
                        backgroundColor: 'var(--accent-500)',
                        animation: 'aurora 21s ease-in-out infinite',
                        animationDelay: '13s',
                        animationFillMode: 'backwards',
                        bottom: '30%',
                        left: '20%',
                    }}
                />
            </div>
        </div>
        <About />
        <WorkExperience />
    </div>
  )
}

export default BeginningSection