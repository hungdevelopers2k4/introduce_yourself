// ProjectCard.jsx
import { Link } from "react-router"

const ProjectCard = ({ imageSrc, title, description, linkText = "Xem dự án" }) => {
  return (
    <div className="relative group flex flex-row md:flex-col gap-0 md:gap-4 rounded-xl transition-all duration-200 overflow-hidden h-full border-2 shadow-md  hover:shadow-md">
      <div className="flex-shrink-0 w-1/3 md:w-full md:h-48 relative rounded-md overflow-hidden">
        <img src={imageSrc} alt={title} className="object-cover group-hover:scale-105 transition-all duration-500 w-full h-full"/>
      </div>
      <div className="flex-1 flex flex-col justify-between gap-4 px-4 pb-4">
        <div className="text-left space-y-2">
          <h3 className="md:text-lg">
            {title}
          </h3>
          <p className="text-xs md:text-sm text-gray-600  line-clamp-3">
            {description}
          </p>
        </div>
        <div className="flex flex-col mt-auto pt-2">
          <Link className="inline-flex bg-black/90  text-white hover:opacity-80 items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50  h-10 px-4 py-2 w-full">
            {linkText}
          </Link>
        </div>
      </div>
    </div>
  )
}

export default ProjectCard