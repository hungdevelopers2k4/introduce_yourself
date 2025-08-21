import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <div id="contact" className="py-24 px-4 md:px-8 lg:px-12 container mx-auto">
        <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Liên hệ</h2>
            <p className="text-center mb-12">Bạn đang có dự án trong đầu? Hãy cùng thảo luận xem tôi có thể giúp bạn hiện thực hóa ý tưởng này như thế nào.</p>
            <form action="https://formspree.io/f/xldlywrp" method="POST" className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                        <label htmlFor="name" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                            Tên doanh nghiệp hoặc tên bạn
                        </label>
                        <input 
                            type="text" 
                            name="name"
                            id="name"
                            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring transition-all disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
                            placeholder="Tên doanh nghiệp hoặc tên bạn" 
                            required
                        />
                    </div>
                    <div className="space-y-2">
                        <label htmlFor="email" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                            Email
                        </label>
                        <input 
                            type="email" 
                            name="email"
                            id="email"
                            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring transition-all disabled:cursor-not-allowed disabled:opacity-50 md:text-sm" 
                            placeholder="Email của bạn"
                            required
                        />
                    </div>
                </div>
                <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                        Lời nhắn
                    </label>
                    <textarea 
                        name="message" 
                        id="message" 
                        className="w-full px-3 py-2 min-h-44 border rounded-md" 
                        placeholder="Hãy cho tôi biết về dự án của bạn"
                        required
                    ></textarea>
                </div>
                <button 
                    type="submit" 
                    className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 text-gray-foreground bg-black text-white hover:bg-black/80 h-10 px-4 py-2 w-full"
                >
                    Gửi tin nhắn
                </button>
            </form>
            <div className="mt-12 flex justify-center gap-2 space-x-6">
                <Link className="text-primary-600 hover:text-primary-800" to="https://github.com">
                    GitHub
                </Link>
                <Link className="text-primary-600 hover:text-primary-800" to="https://linkedin.com">
                    LinkedIn
                </Link>
                <Link className="text-primary-600 hover:text-primary-800" to="mailto:alex@pixelprofile.com">
                    Email
                </Link>
            </div>
        </div>
    </div>
  )
}

export default Contact