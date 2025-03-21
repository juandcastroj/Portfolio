import JDphoto from '../assets/images/hero/jd_photo.jpeg';
import JDavatar from '../assets/images/hero/avatar_jd.png';

export default function Hero() {
  
    return (
        <div className="relative isolate -z-10 overflow-hidden bg-gradient-to-b from-indigo-100/20 pt-14">
          <div
            aria-hidden="true"
            className="absolute inset-y-0 right-1/2 -z-10 -mr-96 w-[200%] origin-top-right skew-x-[-30deg] bg-white dark:bg-[#2b0076] shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 dark:ring-[#2b0076] sm:-mr-80 lg:-mr-[22rem]"
          />


        <div className="mx-auto max-w-6xl px-6 py-10 sm:py-28 lg:py-40 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0 lg:flex gap-16 lg:max-w-none">
            <div className="flex flex-col justify-between font-mono animate-fade-right animate-duration-[3000ms] animate-delay-200">
                <h1 className="max-w-2xl text-balance text-3xl sm:text-5xl font-semibold tracking-tight text-green-900 dark:text-blue-300 lg:text-7xl lg:col-span-2 xl:col-auto">
                  Hi. I&#39;m Juan David Castro,
                  Software developer.
                </h1>
                <div className="my-2 sm:my-8 max-w-xl lg:mt-0 xl:col-end-1 xl:row-start-1">
                  <p className="text-pretty text-base sm:text-lg font-medium text-gray-500 dark:text-gray-200 md:text-xl/8 lg:mt-6">
                    Best known as JD, specialized on frontend web developer, 
                    lover of technology, music and bikes. Lets discover my work... 
                  </p>
                </div>
            </div>

            <div className="animate-fade-left animate-duration-[3000ms] animate-delay-200">
              <img
                  alt="JD photo"
                  src={JDavatar}
                  className="mt-10 aspect-square w-full max-w-lg rounded-full object-cover sm:mt-8 lg:mt-0 lg:max-w-72 text-center"
                />
            </div>
          </div>
        </div>
        {/* <div className="absolute inset-x-0 bottom-0 -z-10 h-24 bg-gradient-to-t from-white sm:h-32" /> */}
      </div>

    )
}