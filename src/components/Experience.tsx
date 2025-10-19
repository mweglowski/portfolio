const Experience = () => {
  return (
	<section className="flex flex-col mb-[150px]" id="experience">
	  <header>
		<h2 className="section-title mb-8">Experience</h2>
		{/* <p className="text-slate-400 text-center">
		  I was also getting knowledge from courses from various websites
		</p> */}

		<div className="flex flex-col items-center">
		  <div>
			{/* <div className="edu-time-container">
			  <div className="edu-card">
				<p className="text-amber-400">2019 - 2023</p>
				<h2 className="text-xl text-slate-300">High School</h2>
				<div className="text-slate-500">
				  Zespół Szkół nr 2 im. Krzysztofa K. Baczyńskiego w Ełku
				</div>
			  </div>
			</div> */}
			<div className="edu-time-container">
			  <div className="edu-card">
				<p className="text-amber-400">July 2025 - Present</p>
				<h2 className="text-xl text-slate-300">AI Software Validation Intern</h2>
				<div className="text-[#9babb3]">Intel Corporation</div>
				<div className="text-slate-500">
				  Gdańsk, Poland
				</div>
			  </div>
			</div>
		  </div>
		</div>
	  </header>
	</section>
  );
};

export default Experience;
