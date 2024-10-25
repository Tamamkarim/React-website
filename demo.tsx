import { createSignal } from 'solid-js';
import type { Component } from 'solid-js';

const Demo: Component = () => {
  // Create a state to manage dark mode
  const [isDarkMode, setIsDarkMode] = createSignal(false);

  // Function to toggle dark mode
  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode());
  };

  return (
    <div class={isDarkMode() ? 'dark' : 'light'}>
      <div class="flex flex-col min-h-screen">
        {/* Dark Mode Toggle Button */}
        <button
          onClick={toggleTheme}
          class="mb-4 self-center rounded-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
        >
          Toggle Dark Mode
        </button>

        <section
          class="relative bg-[url('https://images.unsplash.com/photo-1604014237800-1c9102c219da?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80')] bg-cover bg-center bg-no-repeat"
        >
          <div class="absolute inset-0 bg-gray-900/75 sm:bg-transparent sm:from-gray-900/95 sm:to-gray-900/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l"></div>

          <div class="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8">
            <div class="max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
              <h1 class="text-3xl font-extrabold text-white sm:text-5xl">
              Full Stack 
                <strong class="block font-extrabold text-rose-500">Software Developer.</strong>
              </h1>

              <p class="mt-4 max-w-lg text-white sm:text-xl/relaxed">
              Join Nordcloud and make your mark on the European IT industry. Help our clients thrive on their cloud journey in solution areas such as infrastructure, migration, data, and security!.
              </p>

              <div class="mt-8 flex flex-wrap gap-4 text-center">
                <a
                  href="#"
                  class="blok rounded-md bg-[#08C2FF] px-5 py-2.5 text-sm font-medium text-white transition hover:bg-teal-700 dark:hover:bg-teal-500"
                >
                  Get Started
                </a>
                <a
                  href="#"
                  class="blok rounded-md bg-[#08C2FF] px-5 py-2.5 text-sm font-medium text-white transition hover:bg-teal-700 dark:hover:bg-teal-500"
                >
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </section>

       
      </div>
    </div>
  );
};

export default Demo;
