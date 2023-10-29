import { footerLogo } from "../assets/images"
import { copyrightSign } from "../assets/icons"
import { footerLinks, socialMedia } from "../constants"

const Footer = () => {
  return (
    <footer className="max-container">
      <div className="flex justify-between items-start gap-20 flex-wrap max-lg:flex-col">
        <div className="flex flex-col items-start">
          <a href="#">
            <img 
              src={footerLogo}
              height={46}
              width={150} 
            />
          </a>
          <p className="mt-6 text-base leading-7 font-montserrat text-white-500 sm:max-w-sm">Get shoes ready for the new term at your your nearest Nike store. Find Your Perfect Size In Store. Get Rewards!</p>
          <div className="flex items-center gap-5  mt-8">
            {socialMedia.map((icon, index) =>  (
              <div className="flex items-center justify-center text-white w-12 h-12 rounded-full bg-white cursor-pointer">
                <img 
                  key={index}
                  src={icon.src} 
                  alt={icon.alt} 
                  width={24}
                  height={24}
                />
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-1 justify-between lg:gap-10  gap-20 flex-wrap">
              {footerLinks.map((section) => (
                <div key={section}>
                  <h2 className="text-2xl mb-5">{section.title}</h2>
                  <div className="flex flex-col gap-2">
                    {section.links.map(link => (
                      <a 
                        key={link.name}
                        className="text-base font-montserrat mt-3 hover:text-slate-gray"
                        href={link.link}>{link.name}
                      </a>
                    ))}
                  </div>
                </div>
              ))}
        </div>
      </div>

      <div className="flex justify-between text-white-400 mt-24 max-sm:flex-col max-sm:items-center ">
          <div className="flex flex-1 justify-start items-center gap-2 font-montserrat cursor-pointer">
            <img 
              src={copyrightSign} 
              alt="copy right sign"
              width={20}
              height={20}
              className="rounded-full m-0" 
            />
            <p>Copyright. All rights reserved</p>
          </div>
          <p className="font-montserrat cursor-pointer">Terms & Conditions</p>
      </div>
    </footer>
  )
}

export default Footer