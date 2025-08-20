import ClientCard from '../components/ClientCard.jsx'
import { clientsData } from '../data/clientsData.js'

const Clients = () => {
  return (
    <section className="w-full flex flex-col justify-center items-center gap-8 py-12 lg:py-16 bg-primary-100/20 dark:bg-primary-900/10">
      <div className="w-full p-6 max-w-full container-wide relative flex flex-col items-center">
        <h2 className="md:text-center text-2xl md:text-3xl lg:text-4xl font-semibold leading-tight md:leading-tight max-w-sm sm:max-w-none">Các bình luận của khách hàng</h2>
        <p className="mt-6 md:text-xl">Đừng chỉ tin lời tôi nói—đây là những gì mọi người nói về việc làm việc với tôi.</p>
      </div>
      <div className="relative isolate">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl xl:mx-0 xl:max-w-none text-sm leading-6 text-gray-900 dark:text-gray-100 columns-1 md:columns-2 xl:columns-3 gap-4">
            {clientsData.map(client => (
              <ClientCard
                key={client.id}
                quote={client.quote}
                name={client.name}
                username={client.username}
                image={client.image}
                type={client.type}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Clients