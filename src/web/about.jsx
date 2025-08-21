import image from '../assets/1755501995678-image_1.webp'
const about = () => {
  return (
    <section id="about" className="w-full background--all flex flex-col justify-center items-center gap-8 py-12 lg:py-16 ">
        <div className='container-wide w-full p-6 flex flex-col items-center justify-center relative'>
            <div className='w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
                <div className='flex flex-col gap-4 items-start'>
                    <h1 className='text-2xl md:text-3xl lg:text-4xl font-semibold leading-tight'>
                        Giới thiệu
                    </h1>
                    <p className='text-base md:text-lg max-w-xl mt-2 text-gray-700'>
                        Tôi là một Developer Front-end mới. Công việc chính của tôi là biến những bản thiết kế thành website sống động, mượt mà và dễ sử dụng. Tôi đặc biệt quan tâm đến trải nghiệm người dùng và hiệu suất, vì tôi tin một website chạy nhanh, thân thiện chính là chìa khóa để giữ chân khách hàng. Rất mong được học hỏi , đóng góp để tạo ra những sản phẩm có giá trị thực cho doanh nghiệp và bản thân.
                    </p>
                </div>
                <div className='w-full h-full flex justify-center lg:justify-end'>
                    <div className='relative w-full max-w-lg overflow-hidden rounded-2xl'>
                        <img src={image} className='w-full h-auto object-cover rounded-2xl' alt="Developer working on code" />
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default about