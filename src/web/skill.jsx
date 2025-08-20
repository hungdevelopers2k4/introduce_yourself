// Skill.jsx
import SkillCard from '../components/SkillCard.jsx'
import { skillsData } from '../data/skillsData.js'

const Skill = () => {
  return (
    <section id="skills" className="w-full flex justify-center items-center gap-8 py-12 lg:py-16 flex-col relative overflow-hidden">
      <div className="hidden lg:flex justify-center w-full h-full absolute -bottom-1/2">
        <svg viewBox="0 0 1024 1024" aria-hidden="true" className="w-full lg:w-2/3 h-auto absolute -z-10">
          <circle cx="512" cy="512" r="512" fill="url(#gradient-primary)" fillOpacity="0.7"></circle>
          <defs>
            <radialGradient id="gradient-primary" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(512 512) rotate(90) scale(512)">
              <stop stopColor="var(--primary-lighter-hex)" stopOpacity="0.5"></stop>
              <stop offset="1" stopColor="var(--primary-darker-hex)" stopOpacity="0"></stop>
            </radialGradient>
          </defs>
        </svg>
      </div>
      <div className="container-wide w-full px-6 relative z-10">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold leading-tight max-w-xs sm:max-w-none fancyHeading">Kỹ năng </h2>
        <p className="mt-6 md:text-xl">
            Là một Front-end Developer đam mê kiến tạo trải nghiệm người dùng thông qua làm việc với các framework hiện đại và tuân thủ các tiêu chuẩn trong phát triển website.
        </p>
        <div className="mt-12 flex flex-col sm:grid sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-12">
          {skillsData.map(skill => (
            <SkillCard
              key={skill.id}
              title={skill.title}
              description={skill.description}
              icon={skill.icon}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skill