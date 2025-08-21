// ClientCard.jsx
import { Link } from "react-router"

const ClientCard = ({ quote, name, username, image, type }) => {
  const linkClassName = type === "type1" 
    ? "w-full inline-block bg-white rounded-2xl shadow-md ring-1 ring-gray-900/5 cursor-default pointer-events-none mb-4"
    : "w-full inline-block bg-white rounded-2xl shadow-md ring-1 ring-gray-900/5 p-6 cursor-default pointer-events-none mb-4"
  const blockquoteClassName = type === "type1" 
    ? "text-gray-900 dark:text-gray-100 p-6 text-lg font-semibold leading-7 tracking-tight sm:text-xl sm:leading-8"
    : "text-gray-900 dark:text-gray-100"
  const figcaptionClassName = type === "type1" 
    ? "flex items-center gap-x-4 flex-wrap gap-y-4 border-t border-gray-900/10 px-6 py-4 sm:flex-nowrap"
    : "flex items-center gap-x-4 mt-6"
  return (
    <Link href="" className={linkClassName}>
      <figure>
        <blockquote className={blockquoteClassName}>
          <p className="text-gray-900 ">
            {quote}
          </p>
        </blockquote>
        <figcaption className={figcaptionClassName}>
          <img src={image} alt={name} className="h-10 w-10 flex-none rounded-full bg-gray-50" />
          <div className="flex-auto">
            <div className="font-semibold flex gap-0.5 items-center">
              {name}
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="lucide lucide-badge-check flex-shrink-0 fill-blue-500 text-white w-4 h-4">
                <path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"></path>
                <path d="m9 12 2 2 4-4"></path>
              </svg>
            </div>
            <div>
              {username}
            </div>
          </div>
        </figcaption>  
      </figure>
    </Link>
  )
}

export default ClientCard