import MyPhoto from "../assets/images/me2.png"

const About = () => {
  return (
    <section className="my-[100px] flex flex-col items-center">
      <header className="mb-[20px]">
        <h2 className="section-title">About</h2>
        <p className="text-slate-400">Know me better</p>
      </header>
      {/* my portrait */}
      <div className="overflow-hidden w-[75%] mx-auto relative rounded-[44%]">
        <div className="absolute z-20 w-[105%] h-[105%] rounded-full inset-shadow -top-[7px] -left-[7px] border-4 border-amber-400" />

        <img src={MyPhoto} className="inset-shadow"/>
      </div>

      <div className="card w-[80%] p-4 -mt-4">
        <h3 className="text-lg">Welcome!</h3>
        <p className='text-slate-400 hyphens-auto text-justify'>I am ambitious student with determined mindset to overcome any challange. I am also a lifelong learner. I enjoy exploring new various tech areas.</p>
      </div>
      {/* <p className='card m-3 p-4 text-slate-400'>
        LOREM FSAkfdsjal fsad flskd jsdlkjf sdlk jfj ksdf lksdj flsk fldskj dslkj dsflkj sdlkf jsflksd flkds jflsdkf jsdlk jsdldskj flskf jsdlkfj sdlkf jsdlkfj sdflkdsj flkfjewiofj weoigh sdij
      </p> */}
    </section>
  )
}

export default About