import Image from "next/image";

const Hero = () => {
  return (
    <section className="border-l border-r border-b border-gray-600 rounded-b-lg overflow-hidden -mt-3">
      {/* flex container */}
      <div className="container flex flex-col-reverse md:flex-row items-center pl-16 pr-5 space-y-0 md:space-y-0">
        {/* left column */}
        <div className="relative flex flex-col space-y-0 mb-32 md:w-1/2">
          <Image
            src="/left.webp"
            alt="logo"
            width={100}
            height={100}
            className=" -ml-16  top-0 absolute " 
          />

<div className="max-w-md text-3xl font-bold text-center md:text-left md:text-5xl text-white mb-4 ml-16 md:leading-tight">
  <p className="mb-1">YOUR</p>
  <p className="mb-1">ADVENTURE</p>
  <p className="mb-1">STARTS HERE</p>
</div>

          <address className="address ml-16 text-xs mt-9 ">
            Join exciting communities, have fun, and make a difference.
          </address>
          <div className="ml-16">
          <form>   
    <label for="default-search" class="mb-2 text-sm font-medium text-gray-300 sr-only dark:text-white">Search</label>
    <div class="relative mt-4"> 
        <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
        </div>
        <input type="search" id="default-search" class="block w-96 p-4 pl-10 text-sm font-thin text-gray-300 border border-gray-300 rounded-lg bg-transparent focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-200 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search for communities" required/>
    </div>
</form>





          </div>
          
        </div>
        {/* right column image */}
        <div>
          <Image
            src="/hero.webp"
            alt="hero"
            width={900}
            height={900}
            className="mb-10 rounded-lg shadow-lg md:w-300%"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
