
import Stripe from "../assets/stripe.svg"
import Shopify from "../assets/shopify.svg"
import Tech_crunch from "../assets/tech-crunch.svg"
import Product_hunt from "../assets/product-hunt.svg"
import Medium from "../assets/medium.svg"
const companies = () => {
  return (
    <div id="work" className="container-wide companies mt-20 w-full flex flex-wrap items-center justify-center gap-6 dark:invert">
        <p className="w-full text-center text-sm opacity-70 dark:invert">Đã làm việc với</p>
        <img className='w-auto h-9 dark:invert' src={Stripe} alt="Stripe" />
        <img className='w-auto h-9 dark:invert' src={Shopify} alt="Shopify" />
        <img className='w-auto h-9 dark:invert' src={Tech_crunch} alt="Tech_crunch" />
        <img className='w-auto h-9 dark:invert' src={Product_hunt} alt="Product_hunt" />
        <img className='w-auto h-9 dark:invert' src={Medium} alt="Medium" />
    </div>
  )
}

export default companies