import InterkeyHero from '../assets/images/projects/Interkey_hero.jpeg';
import SiinHero from '../assets/images/projects/Siin_hero.jpeg';
import TahsinHero from '../assets/images/projects/Tahsin_hero.jpeg';
import CoffeeStrapHero from '../assets/images/projects/CoffeeStrap_hero.jpeg';



const projects = [
    {
      name: 'Interkey',
      role: 'Frontend developer',
      imageUrl: InterkeyHero,
      description: 'Ultricies massa malesuada viverra cras lobortis. Tempor orci hac ligula dapibus mauris sit ut eu. Eget turpis urna maecenas cras. Nisl dictum.',
      url: 'https://interkey2023.netlify.app/',
      github: '#'    
    },
    {
      name: 'Siin shop',
      role: 'Frontend developer',
      imageUrl: SiinHero,
      description: 'Ultricies massa malesuada viverra cras lobortis. Tempor orci hac ligula dapibus mauris sit ut eu. Eget turpis urna maecenas cras. Nisl dictum.',
      url: 'https://gorgeous-cucurucho-749274.netlify.app/',
      github: '#'
    },
    {
      name: 'Tahsin Alwajiha',
      role: 'Frontend developer',
      imageUrl: TahsinHero,
      description: 'Ultricies massa malesuada viverra cras lobortis. Tempor orci hac ligula dapibus mauris sit ut eu. Eget turpis urna maecenas cras. Nisl dictum.',
      url: 'https://tahsinalwajiha.com/',
      github: '#'
    },
    {
      name: 'CoffeeStrap',
      role: 'Mobile developer',
      imageUrl: CoffeeStrapHero,
      description: 'Ultricies massa malesuada viverra cras lobortis. Tempor orci hac ligula dapibus mauris sit ut eu. Eget turpis urna maecenas cras. Nisl dictum.',
      url: 'https://www.sessionforward.com/',
      github: '#'
    },
  ]
  

  export default function Projects() {

    return (
      <div className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl gap-20 px-6 lg:px-8">

          <div className="max-w-2xl xl:col-span-2 mb-12 animate-fade-right">
            <h2 className="text-pretty text-4xl font-semibold tracking-tight text-green-900 dark:text-blue-300 sm:text-5xl">
              Main projects
            </h2>
            
            <p className="mt-6 text-lg/8 text-gray-600 dark:text-gray-200">
            Below is a list view of my main and fully develop web and mobile jobs throughout my career as software developer.</p>
          </div>

          <ul role="list" className="-mt-12 space-y-12 divide-y divide-gray-200 xl:col-span-3">

            {projects.map((project, index) => (
              <li key={index} className="flex flex-col gap-10 pt-12 sm:flex-row">


                {/* <iframe src={project.url} className="aspect-square w-80 md:w-96 xl:w-[40rem] h-60 flex-none rounded-2xl object-cover"></iframe> */}
                <img alt={project.name} src={project.imageUrl} className="aspect-square w-80 md:w-96 xl:w-[35rem] h-72 flex-none rounded-2xl" />

                <div className="max-w-xl flex-auto animate-fade-left">
                  <a href={project.url} target="_blank" rel="noopener noreferrer">  
                    <h3 className="text-xl font-semibold tracking-tight text-green-900 dark:text-blue-300">{project.name}</h3>
                 
                    <p className="text-base/7 font-semibold text-gray-600 dark:text-gray-200">{project.role}</p>
                    <p className="mt-1 text-base/7 text-gray-600 dark:text-gray-200">{project.description}</p>
                  </a>
                  
                  <ul role="list" className="mt-3 flex gap-x-6">
                    <li>
                      <a href={project.url} className="text-gray-400 hover:text-gray-500">
                        <span className="sr-only">X</span>
                        <svg fill="currentColor" viewBox="0 0 20 20" aria-hidden="true" className="size-5">
                          <path d="M11.4678 8.77491L17.2961 2H15.915L10.8543 7.88256L6.81232 2H2.15039L8.26263 10.8955L2.15039 18H3.53159L8.87581 11.7878L13.1444 18H17.8063L11.4675 8.77491H11.4678ZM9.57608 10.9738L8.95678 10.0881L4.02925 3.03974H6.15068L10.1273 8.72795L10.7466 9.61374L15.9156 17.0075H13.7942L9.57608 10.9742V10.9738Z" />
                        </svg>
                      </a>
                    </li>
                    <li>
                      <a href={project.github} className="text-gray-400 hover:text-gray-500">
                        <span className="sr-only">LinkedIn</span>
                        <svg fill="currentColor" viewBox="0 0 20 20" aria-hidden="true" className="size-5">
                          <path
                            d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"
                            clipRule="evenodd"
                            fillRule="evenodd"
                          />
                        </svg>
                      </a>
                    </li>
                  </ul>

                </div>
              </li>
            ))}
          </ul>

        </div>
      </div>
    )
  }
  