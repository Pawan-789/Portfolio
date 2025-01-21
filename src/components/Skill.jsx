import React from 'react'
/**
 * Components
 */

import SkillCard from './SkillCard';


const skillItem = [
    {
        imgSrc: '/images/html.png',
        label: 'HTML5',
        desc: 'Structure'
      },
    {
        imgSrc: '/images/css3.svg',
        label: 'CSS',
        desc: 'User Interface'
      },  
    {
        imgSrc: '/images/javascript.svg',
        label: 'JavaScript',
        desc: 'Interaction'
      },
    {
      imgSrc: '/images/figma.svg',
      label: 'Figma',
      desc: 'Design tool'
    },
    {
        imgSrc: '/images/react.svg',
        label: 'React',
        desc: 'Framework'
      },
    {
        imgSrc: '/images/tailwindcss.svg',
        label: 'TailwindCSS',
        desc: 'User Interface'
      },
      {
        imgSrc: '/images/next.png',
        label: 'NextJs',
        desc: 'Library'
      },
      {
        imgSrc: '/images/github.png',
        label: 'GitHub',
        desc: 'Platform'
      },
    {
      imgSrc: '/images/materialUi.png',
      label: 'Material-UI',
      desc: 'Material Design'
    },
    {
      imgSrc: '/images/firebase.png',
      label: 'Firebase',
      desc: 'Database'
    },
    
    
  ];
const Skill = () => {
  return (
    <section className='section flex flex-col items-center text-center'>
        <div className="cotainer max-w-6xl mx-auto p-4">
            <h2 className="headline-2 text-3xl font-bold reveal-up">
                Essential Tools I use
            </h2>
            <p className="text-zinc-400 mt-3 mb-8 max-w-auto reveal-up">
            Discover the powerful tools and technologies I 
            use to create exceptional, high-performing
             websites & applications.  
            </p>
            <div className="grid gap-3 grid-cols-[repeat(auto-fill,_minmax(200px,_1fr))]">
                {
                    skillItem.map(({ imgSrc, label,  desc },key) =>
                    (
                        <SkillCard 
                            key={key}
                            imgSrc={imgSrc}
                            label={label}
                            desc={desc}
                            classes="reveal-up"
                            />
                    )

                    )
                }

            </div>

        </div>
    </section>
  )
}

export default Skill
