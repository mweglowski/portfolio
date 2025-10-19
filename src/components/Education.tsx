import React from "react";

const Education = () => {
  return (
    <section className="flex flex-col" id="education">
      <header>
        <h2 className="section-title mb-8">Education</h2>
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
                <p className="text-amber-400">Started 2023</p>
                <h2 className="text-xl text-slate-300">Bachelor's Degree</h2>
                <div className="text-[#9babb3]">Computer Science (Artificial Intelligence)</div>
                <div className="text-slate-500">
                  Polish - Japanese Academy of Information Technology
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </section>
  );
};

export default Education;
