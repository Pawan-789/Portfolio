import React from 'react'

/**
 * Components
 */

import ProjectCard from './ProjectCard';

const works = [
    
      
    {
      imgSrc: '/images/valify.png',
      title: 'Valify-',
      tags: ['API', 'SPA'],
      projectLink: "https://valify-website.technorthstar.com/"
    },
    {
      imgSrc: '/images/nimbus.png',
      title: 'Nimbus',
      tags: ['Development', 'API'],
      projectLink: 'https://ifqe-aa366.web.app/'
    },
    {
      imgSrc: '/images/project-4.jpg',
      title: 'Advik-CollegeFest',
      tags: ['Web-design', 'Development'],
      projectLink: 'https://ifqe-aa366.web.app/'
    },
    {
      imgSrc: '/images/project-5.jpg',
      title: 'eCommerce website',
      tags: ['eCommerce', 'Development'],
      /*projectLink: 'https://github.com/codewithsadee/anon-ecommerce-website'*/
    },
    {
      imgSrc: '/images/project-6.jpg',
      title: 'vCard Personal portfolio',
      tags: ['Web-design', 'Development'],
     // projectLink: 'https://github.com/codewithsadee/vcard-personal-portfolio'
    },
  ];

const Work = () => {
  return (
    <section
        id="work"
        className='="section py-16'
    >
        <div className="container px-6 md:px-12">
           <h2 className="headline-2 mb-8 reveal-up">
                My portfolio highlights
           </h2>

           <div className="grid gap-x-4 gap-y-5 grid-cols-[repeat(auto-fill,_minmax(280px,_1fr))]">
                {works.map(({imgSrc,title,tags,projectLink},key)=>(
                    <ProjectCard
                        key={key}
                        imgSrc={imgSrc}
                        title={title}
                        tags={tags}
                        projectLink={projectLink}
                        classes="reveal-up"
                    />
                ))}
           </div>
        </div>    


    
    </section>
  )
}

export default Work
