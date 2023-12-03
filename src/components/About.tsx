import MyPhoto from "../assets/images/me2.png"

const About = () => {
  return (
    <section className="my-[100px] flex flex-col items-center">
      <header className="mb-[20px]">
        <h2 className="section-title">About</h2>
        <p className="text-slate-400">Know me better</p>
      </header>

      <div className="flex flex-col items-center md:flex-row w-full p-4 max-w-[800px]">

        {/* Photo */}
        <div className="overflow-hidden w-[75%] mx-auto relative rounded-[44%] max-w-[430px] sm:mx-2">
          <div className="absolute z-20 w-[105%] h-[105%] rounded-full box-inset-shadow border-none border-amber-400 -left-[10px] -top-[10px]"/>

          <img src={MyPhoto} className="rounded-full"/>
        </div>

        <div className="card w-[80%] p-4 -mt-4 md:relative md:-left-4 md:m-0 -z-10">
          <h3 className="text-lg">Welcome!</h3>
          {/* <p className='text-slate-400 hyphens-auto text-justify'>I am ambitious student with determined mindset to overcome any challange. I am also a lifelong learner. I enjoy exploring new various tech areas.</p> */}
          <p className='text-slate-400 hyphens-auto text-justify'>
            LOREM FSAkfdsjal fsad flskd jsdlkjf sdlk jfj ksdf lksdj flsk fldskj dslkj dsflkj sdlkf jsflksd flkds jflsdkf jsdlk jsdldskj flskf jsdlkfj sdlkf jsdlkfj sdflkdsj flkfjewiofj weoigh sdij
          </p>
        </div>
      </div>

    </section>
  )
}

export default About