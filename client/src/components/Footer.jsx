import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className='container px-4 2xl:px-20 mx-auto flex items-center justify-between gap-4 py-3 mt-20'>
      <img width={160} src={assets.logo} alt="" />
      <p className='flex-1 border-l border-gray-400 pl-4 text-sm text-gray-500 max-sm:hidden'>Copyright @GreatStack.dev | All right reserved.</p>
      <div className='flex gap-2.5'>
        <a href="" target='_blank'><img width={38} src={assets.facebook_icon} alt="" /></a>
        <a href="https://x.com/Jayveer74857519?s=09" target='_blank'><img width={38} src={assets.twitter_icon} alt="" /></a>
        <a href="https://www.instagram.com/jayveer_singh_93?igsh=MXJ3MmxsbDhxYWt2MQ==" target='_blank'><img width={38} src={assets.instagram_icon} alt="" /></a>
      </div>
    </div>
  )
}

export default Footer