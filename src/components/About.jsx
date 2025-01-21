import React from 'react'


const aboutItems = [
    {
      label: 'Project done',
      number: 5
    },
    {
      label: 'Years of experience',
      number: 2
    }
  ];
const About = () => {
  return (
    <section
        id="about"
        className='section'
    >
        <div className="container">
            <div className="bg-zinc-800/50 p-7 rounded-2xl
            md:1p-12 reveal-up">
                <p className="text-zinc-300 mb-4 md:mb-8
                md:text-xl md:max-w-[60ch] ">
                Hi, I’m Pawan, a passionate Frontend/Web Developer with a focus on creating user-friendly,
                visually appealing web applications. I specialize in transforming ideas into seamless digital
                experiences, ensuring that both design and functionality are perfectly balanced. With a strong
                understanding of modern web technologies, I aim to develop solutions that are intuitive, responsive,
                and align with both user needs and business goals. I’m always eager to stay updated with the latest
                trends to deliver innovative, impactful projects that provide excellent user experiences while meeting
                business objectives effectively.



                </p>
                <div className= "flex  flex-wrap items-center gap-4 md:gap-7">
                    {
                        aboutItems.map(({label,number},key) =>(
                            <div key={key}>
                                <div className="flex items-center md:mb-2">
                                    <span className="text-2xl font-semibold md:text-4xl">{number}</span>
                                    <span className="text-sky-400 font-semibold md:text-3xl">+</span>
                                </div>
                                <p className="text-sm text-zinc-400">{label}</p>
                            </div>

                        ))

                    }
                    <img
                    src="/images/My-logo.png"
                    alt="Logo"
                    width={30}
                    height={30}
                    className="ml-auto md:w-[40px] md:h-[40px]"></img>
                </div>
            </div>
        </div>


    </section>
  )
}

export default About
