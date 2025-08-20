import Discovery_phase from "../assets/img_information/infor1-image_8.png";
import Planning_phase from "../assets/img_information/infor2-image_9.webp";
import Launch_phase from "../assets/img_information/infor-image_10.webp";
import Development_phase from "../assets/img_information/infor3-image_11.webp";
const my_workflow = () => {
  return (
    <section className="w-full flex justify-center items-center gap-8 p-6 py-12 lg:py-16 flex-col relative overflow-hidden">
      <div className="hidden lg:flex justify-center w-full h-full absolute -bottom-1/2 pointer-events-none">
        <svg viewBox="0 0 1024 1024" aria-hidden="true" className="w-full lg:w-2/3 h-auto z-0 absolute">
            <circle cx="512" cy="512" r="512" fill="url(#gradient-primary)" ></circle>
            <defs>
                <radialGradient id="gradient-primary" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(512 512) rotate(90) scale(512)">
                <stop></stop>
                <stop offset="1"></stop>
                </radialGradient>
            </defs>
        </svg>
      </div>
      <div className="relative w-full flex flex-col sm:items-center container-wide">
        <h2 className="w-full text-2xl md:text-3xl lg:text-4xl font-semibold leading-tight md:leading-tight max-w-sm sm:max-w-none">
            Quy trình làm việc
        </h2>
        <p className="w-full mt-6 md:text-xl">
            Tôi tuân theo một quy trình có cấu trúc để đảm bảo dự án thành công từ đầu đến cuối.
        </p>
      </div>
      <div className="!p-0 relative isolate gap-6 container-wide flex flex-col">
        <section className="relative w-full flex flex-col justify-center items-center gap-8 py-12 lg:py-16 overflow-hidden !p-0 rounded-xl">
            <div className="w-full p-0 md:p-6 flex-col items-center relative max-w-full container-wide grid gap-4 lg:grid-cols-2 m-0 lg:m-0 h-full">
                <div className="w-full flex flex-col gap-4 items-start p-6">
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold leading-tight">1.  Khám phá</h2>
                    <p className="mt-4 md:text-xl">Tôi bắt đầu bằng cách hiểu mục tiêu, đối tượng mục tiêu và yêu cầu của dự án thông qua tư vấn chuyên sâu</p>
                </div>
                <img alt="" src={Discovery_phase}  className="relative w-full rounded-md lg:scale-90 hover:scale-100 transition-all shadow-md lg:-right-6 lg:perspective-bottom my-8 mb-0 !scale-100  lg:-mb-12 lg:-mt-12"/>
            </div>
        </section>
        <section className="relative w-full flex flex-col justify-center items-center gap-8 py-12 lg:py-16 overflow-hidden !p-0 rounded-xl">
            <div className="w-full p-0 md:p-6 flex-col items-center relative max-w-full container-wide grid gap-4 lg:grid-cols-2 m-0 lg:m-0 h-full">
                <div className="w-full flex flex-col gap-4 lg:col-start-2 lg:row-start-1 items-start p-6">
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold leading-tight">2. Lập kế hoạch</h2>
                    <p className="mt-4 md:text-xl">
                        Tôi tạo ra các khung dự án chi tiết và mốc thời gian của dự án để đảm bảo chúng tôi có lộ trình rõ ràng để thành công.
                    </p>
                </div>
                <img alt="Development phase" src={Planning_phase}  className="relative w-full rounded-md lg:scale-90 hover:scale-100 transition-all shadow-md lg:-left-6 lg:perspective-bottom my-8 mb-0 !scale-100 lg:-mb-12 lg:-mt-12"/>
            </div>
        </section>
        <section className="relative w-full flex flex-col justify-center items-center gap-8 py-12 lg:py-16 overflow-hidden !p-0 rounded-xl">
            <div className="w-full p-0 md:p-6 flex-col items-center relative max-w-full container-wide grid gap-4 lg:grid-cols-2 m-0 lg:m-0 h-full">
                <div className="w-full flex flex-col gap-4 items-start p-6">
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold leading-tight">3. Phát triển</h2>
                    <p className="mt-4 md:text-xl">
                        Tôi xây dựng dự án của bạn bằng các phương pháp viết mã hiện đại, hiệu quả với các phiên phản hồi và cập nhật thường xuyên.
                    </p>
                </div>
                <img alt="Development phase" src={Development_phase}  className="relative w-full rounded-md lg:scale-90 hover:scale-100 transition-all shadow-md lg:-right-6 lg:perspective-bottom my-8 mb-0 !scale-100  lg:-mb-12 lg:-mt-12"/>
            </div>
        </section>
        <section className="relative w-full flex flex-col justify-center items-center gap-8 py-12 lg:py-16 overflow-hidden !p-0 rounded-xl">
            <div className="w-full p-0 md:p-6 flex-col items-center relative max-w-full container-wide grid gap-4 lg:grid-cols-2 m-0 lg:m-0 h-full">
                <div className="w-full flex flex-col gap-4 lg:col-start-2 lg:row-start-1 items-start p-6">
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold leading-tight">4. Tôi</h2>
                    <p className="mt-4 md:text-xl">
                        Tôi đảm bảo việc triển khai diễn ra suôn sẻ với quá trình thử nghiệm kỹ lưỡng và cung cấp tài liệu cũng như đào tạo khi cần thiết.
                    </p>
                </div>
                <img alt="Launch phase" src={Launch_phase}  className="relative w-full rounded-md lg:scale-90 hover:scale-100 transition-all shadow-md lg:-left-6 lg:perspective-bottom my-8 mb-0 !scale-100 lg:-mb-12 lg:-mt-12"/>
            </div>
        </section>
      </div>
    </section>
  )
}

export default my_workflow
