import { Component } from 'solid-js';

const About: Component = () => {
  return (
    <div>
      <section>
        <div class="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
          <div class="max-w-3xl">
            <h2 class="text-3xl font-bold sm:text-4xl">
              Tailored software solutions. Flexible software development services.
            </h2>
          </div>

          <div class="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
            <div class="relative h-64 overflow-hidden sm:h-80 lg:h-full">
              <img
                alt="Software Solutions"
                src="https://partnership.education/wp-content/uploads/2020/06/iStock-1084948986.png"
                class="absolute inset-0 h-full w-full object-cover"
              />
            </div>

            <div class="lg:py-16">
              <article class="space-y-4 text-gray-600">
                <p>
                  At [Your Company Name], we understand that every business has unique needs when it comes to software development. That’s why we offer customized, flexible, and scalable software solutions to meet the specific requirements of your projects.
                </p>
                <p>
                  Whether you need to augment your in-house team with skilled professionals or outsource an entire project, we have the talent and experience to support your goals.
                </p>
                <p>
                  By partnering with [Your Company Name], you gain more than just development services.
                </p>
              </article>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div class="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
          <div class="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
            <div class="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full">
              <img
                alt="Grow Your Audience"
                src="https://www.entronet.cn/en/images/service-consultant.jpg"
                class="absolute inset-0 h-full w-full object-cover"
              />
            </div>

            <div class="lg:py-24">
              <h2 class="text-3xl font-bold sm:text-4xl">Grow your audience</h2>
              <p class="mt-4 text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut qui hic atque tenetur quis eius quos ea neque sunt, accusantium soluta minus veniam tempora deserunt?
              </p>
              <a
                href="#"
                class="mt-8 inline-block rounded bg-[#FFF100] px-12 py-3 text-sm font-medium text-white transition hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-yellow-400"
              >
                Get Started Today
              </a>
            </div>
          </div>
        </div>
      </section>

      <article class="overflow-hidden rounded-sm border border-gray-60 bg-white shadow-sm flex flex-col md:flex-row items-center justify-center h-screen">
        <img
          alt=""
          src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
          class="w-full md:w-1/2 h-full object-cover"
        />
        <div class="p-6 md:p-12 w-full md:w-1/2">
          <h2 class="text-3xl font-bold">We talk business, create code, and change behaviors</h2>
          <p class="mt-4">
            At Futurice, we foster a culture of empowerment, granting each individual the autonomy to innovate and drive change in line with our collective vision. We don’t passively adapt to the future; we actively shape it, challenging norms and crafting solutions that redefine industry standards, to the benefit of our clients and society at large.
          </p>
          <p class="mt-4">We do this by:</p>
          <p class="mt-2">
            <strong>Understanding Business:</strong> We're not just tech enthusiasts; we speak the language of business to ensure our solutions are always aligned with our clients' goals.
          </p>
          <p class="mt-2">
            <strong>Innovative Coding:</strong> Our expertise in developing cutting-edge technology solutions is unmatched, ensuring our clients always stay ahead.
          </p>
          <p class="mt-2">
            <strong>Behavioral Change:</strong> We don't just implement tech; we understand people, organizations, and behaviors, ensuring lasting impact and measurable success.
          </p>
          <a href="#" class="group mt-4 inline-flex items-center gap-1 text-sm font-medium text-blue-600">
            Find out more
          </a>
        </div>
      </article>

      <section class="bg-gray-900 text-white">
        <div class="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
          <div class="mx-auto max-w-lg text-center">
            <h2 class="text-3xl font-bold sm:text-4xl">Kickstart your marketing</h2>
            <p class="mt-4 text-gray-300">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur aliquam doloribus nesciunt eos fugiat. Vitae aperiam fugit consequuntur saepe laborum.
            </p>
          </div>

          <div class="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
           
            <a
              class="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10"
              href="#"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="size-10 text-pink-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M12 14l9-5-9-5-9 5 9 5z" />
                <path
                  d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                />
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                />
              </svg>
              <h2 class="mt-4 text-xl font-bold text-white">Digital campaigns</h2>
              <p class="mt-1 text-sm text-gray-300">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex ut quo possimus adipisci distinctio alias voluptatum blanditiis laudantium.
              </p>
            </a>

            <a
              class="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10"
              href="#"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="size-10 text-pink-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M12 14l9-5-9-5-9 5 9 5z" />
                <path
                  d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                />
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                />
              </svg>
              <h2 class="mt-4 text-xl font-bold text-white">Email marketing</h2>
              <p class="mt-1 text-sm text-gray-300">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex ut quo possimus adipisci distinctio alias voluptatum blanditiis laudantium.
              </p>
            </a>

            <a
              class="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10"
              href="#"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="size-10 text-pink-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M12 14l9-5-9-5-9 5 9 5z" />
                <path
                  d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                />
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                />
              </svg>
              <h2 class="mt-4 text-xl font-bold text-white">We believe in the future</h2>
              <p class="mt-1 text-sm text-gray-300">
              At the intersection of people, technology and creativity we find our power to make great 
              things happen – and we want to share this power with you.
              </p>
              <path d="M12 14l9-5-9-5-9 5 9 5z" />
                <path
                  d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                />
      </a>
      <a
        class="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10"
        href="#"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="size-10 text-pink-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M12 14l9-5-9-5-9 5 9 5z" />
          <path
            d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
          />
          <path
            stroke-Linecap="round"
            stroke-Linejoin="round"
            stroke-Width="2"
            d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
          />
        </svg>

        <h2 class="mt-4 text-xl font-bold text-white">We believe in creativity</h2>

        <p class="mt-1 text-sm text-gray-300">
        It leads us to original solutions, creates added value and takes us on new paths to better outcomes. We think that this fast-moving world needs curious 
        minds. Only those who think differently can create something new.
        </p>
      </a>

      <a
        class="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10"
        href="#"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="size-10 text-pink-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M12 14l9-5-9-5-9 5 9 5z" />
          <path
            d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
          />
          <path
            stroke-Linecap="round"
            stroke-Linejoin="round"
            stroke-Width="2"
            d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
          />
        </svg>

        <h2 class="mt-4 text-xl font-bold text-white">We believe in technology</h2>

        <p class="mt-1 text-sm text-gray-300">
        With technology, every organization has the power to change the world for the better. It helps us overcome the challenges of 
        tomorrow and empowers us to create sustainable economies and societies today.
        </p>
      </a>
      <a
        class="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10"
        href="#"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="size-10 text-yellow-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M12 14l9-5-9-5-9 5 9 5z" />
          <path
            d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
          />
          <path
            stroke-Linecap="round"
            stroke-Linejoin="round"
            stroke-Width="2"
            d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
          />
        </svg>

        <h2 class="mt-4 text-xl font-bold text-white">We believe in people</h2>

        <p class="mt-1 text-sm text-gray-300">
        People who are always on a journey. People who act and get things done. People who strive for improvement. 
        Because they are the ones who truly care to make a difference.
        </p>
      </a>
    </div>
    

    <div class="mt-12 text-center">
      <a
        href="#"
        
        class="mt-8 inline-block rounded bg-[#FFF100] px-12 py-3 text-sm font-medium text-white transition hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-yellow-400"
      >
        Get Started Today
      </a>
           
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
