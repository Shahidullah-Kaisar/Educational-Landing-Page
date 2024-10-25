import React from "react";
import about from '../assets/about.svg'

const About = () => {
  return (
    <>
      <section id="about" className="relative overflow-hidden">
        <div className="absolute -top-8 -right-12 opacity-50">
          {/* <img src={about} alt="" className="w-40 md:w-52 xl:w-64" /> */}
        </div>
        <div className="flex flex-col items-center gap-3 text-center mb-10 md:mb-20">
          <h2 className="title">About Us</h2>
          <p className="max-w-2xl">Follow instruction for more</p>
        </div>

        <div className="container space-y-10 xl:space-y-0">
          {/* item 1 */}
          <div className="flex flex-col items-center lg:flex-row gap-3">
            <div className="w-full lg:w-1/2">
              <img
                src={about}
                alt=""
                className="w-full sm:w-2/3 lg:w-full xl:w-2/3 mx-auto"
              />
            </div>

            {/* content */}
            <div className="w-full lg:w-1/2">
              <div className="space-y-5">
                <h3>
                  Make Your <span className="text-yellow-500">Organic</span>{" "}
                  <br /> Garden
                </h3>
                <p className="text-slate-300 font-Lobster">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed
                  tempore vero dolor id, deleniti aut. Suscipit autem in
                  molestiae ipsum, ipsa vero pariatur ullam quis, quae eligendi
                  mollitia? Reprehenderit, atque. molestiae ipsum, ipsa vero
                  pariatur ullam quis, quae eligendi mollitia? Reprehenderit,
                  atque.
                </p>
              </div>
            </div>
          </div>

          {/* item 2 */}
          <div className="flex flex-col items-center lg:flex-row-reverse gap-3">
            <div className="w-full lg:w-1/2">
              <img
                src={about}
                alt=""
                className="w-full sm:w-2/3 lg:w-full xl:w-2/3 mx-auto"
              />
            </div>

            {/* content */}
            <div className="w-full lg:w-1/2">
              <div className="space-y-5">
                <h3>
                  Come with us <span className="text-yellow-500">grow up</span>{" "}
                  <br /> your plant
                </h3>
                <p className="text-slate-300 font-Lobster">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed
                  tempore vero dolor id, deleniti aut. Suscipit autem in
                  molestiae ipsum, ipsa vero pariatur ullam quis, quae eligendi
                  mollitia? Reprehenderit, atque. molestiae ipsum, ipsa vero
                  pariatur ullam quis, quae eligendi mollitia? Reprehenderit,
                  atque.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
