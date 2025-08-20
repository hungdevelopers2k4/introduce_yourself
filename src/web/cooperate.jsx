
const Cooperate = () => {
  const handleSmoothScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <section className="relative w-full flex flex-col justify-center items-center gap-8 py-12 lg:py-16  overflow-hidden"> 
      <div className="hidden lg:flex justify-center w-full h-full absolute -bottom-1/2 pointer-events-none">
        <svg viewBox="0 0 1024 1024" aria-hidden="true" className="w-full lg:w-2/3 h-auto z-0 absolute ">
          <circle cx="512" cy="512" r="512" fill="url(#gradient-primary)" ></circle>
            <defs>
              <radialGradient id="gradient-primary" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(512 512) rotate(90) scale(512)">
              <stop ></stop>
              <stop offset="1" ></stop>
              </radialGradient>
            </defs>
          </svg>
      </div>
      <div className="w-full p-6 container-narrow">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold leading-tight max-w-xs sm:max-w-none fancyHeading">
          Bạn đã sẵn sàng hợp tác chưa?
        </h2>
        <p className="mt-6 md:text-xl">Hãy cùng tạo nên điều gì đó tuyệt vời cho doanh nghiệp hoặc thương hiệu cá nhân của bạn.</p>
         <div className="mt-6 flex flex-wrap gap-4 w-full items-center">
              <button 
                onClick={() => handleSmoothScroll('contact')}
                className="inline-flex items-center justify-center whitespace-nowrap font-medium ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary-300/70 text-primary-foreground text-white bg-gray-900 hover:bg-black/80 h-12 rounded-md px-6 sm:px-10 text-md"
              >
                Liên hệ
              </button>
              <button 
                onClick={() => handleSmoothScroll('work')}
                className="inline-flex items-center justify-center whitespace-nowrap font-medium ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-primary-300 hover:opacity-65 h-12 rounded-md px-6 sm:px-10 text-md"
              >
                Các dự án
              </button>
          </div>
      </div>
    </section>
  )
}

export default Cooperate