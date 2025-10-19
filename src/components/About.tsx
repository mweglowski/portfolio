import MyPhoto from "../assets/images/me2.png"
import Emphasis from "./UI/Emphasis"

const About = () => {
  return (
    <section className="my-[100px] flex flex-col items-center" id="about">
      <header className="mb-[20px]">
        <h2 className="section-title">About</h2>
        <p className="text-slate-400">Know me better</p>
      </header>

      <div className="flex flex-col items-center md:flex-row w-full p-4 max-w-[800px]">

        {/* Photo */}
        <div className="overflow-hidden w-[75%] mx-auto relative rounded-[44%] max-w-[430px] sm:mx-2">
          <div className="absolute w-[105%] h-[105%] rounded-full box-inset-shadow border-none border-amber-400 -left-[10px] -top-[10px]" />

          <img src={MyPhoto} className="rounded-full" />
        </div>

        <div className="card w-[80%] p-4 -mt-4 md:relative md:-left-4 md:m-0 z-10">
          <p className='text-slate-400 hyphens-auto text-justify'>My name is <Emphasis>Marcin</Emphasis>, and as a <Emphasis>Computer Science</Emphasis> student, I'm driven by <Emphasis>curiosity</Emphasis> that leads me to explore diverse technological domains. My current focus is on gaining an <Emphasis>in-depth understanding</Emphasis> of <Emphasis>Artificial Intelligence</Emphasis>, with a special interest in <Emphasis>Deep Learning</Emphasis>. Beyond that, I enjoy running, going to the gym, and spending time with others.</p>
        </div>
      </div>

    </section>
  )
}

export default About