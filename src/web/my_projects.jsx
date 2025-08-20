// MyProjects.jsx
import ProjectCard from '../components/ProjectCard.jsx'
import { projectsData } from '../data/projectsData.js'

const MyProjects = () => {
  return (
    <section className="w-full flex flex-col justify-center items-center gap-8 py-12 lg:py-16">
      <div className="container-wide w-full px-6 flex flex-col relative items-center text-center">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight mb-4">Dự án của tôi</h2>
        <p className="text-muted-foreground max-w-2xl mb-8">Một số tác phẩm gần đây của tôi trong nhiều ngành công nghiệp và công nghệ khác nhau.</p>
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projectsData.map(project => (
            <ProjectCard
              key={project.id}
              imageSrc={project.imageSrc}
              title={project.title}
              description={project.description}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default MyProjects