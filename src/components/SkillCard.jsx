const SkillCard = ({ title, description, icon }) => {
  return (
    <div className="flex flex-col gap-4 py-4">
      <div className="flex items-center justify-center w-16 h-16 rounded-md bg-primary-100/30 border border-primary-100/70 dark:border-primary-900 dark:bg-primary-900/70 text-primary-500" aria-describedby="icon">
        {icon}
      </div>
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="text-sm dark:invert text-gray-800 dark:text-gray-200">
        {description}
      </p>
    </div>
  )
}

export default SkillCard