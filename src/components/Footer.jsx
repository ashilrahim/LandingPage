
import { Home } from "lucide-react";
import { BsTwitterX, BsYoutube, BsInstagram, BsMeta } from "react-icons/bs";

function Footer() {
  return (
    <footer className="bg-gray-100 dark:bg-gray-900 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div className="flex flex-col items-center md:items-start">
            <div className="flex items-center space-x-3 mb-4">
              <Home className="w-8 h-8 text-blue-600" />
              <span className="text-xl font-bold text-gray-800 dark:text-white">ACME Industries</span>
            </div>
            <p className="text-center md:text-left text-gray-600 dark:text-gray-300 max-w-xs">
              Innovating technology solutions and providing reliable tech services since 1992.
            </p>
          </div>

          {/* Quick Links */}
          <div className="grid grid-cols-2 gap-4 text-center md:text-left ">
            <div className="m-auto">
              <h6 className="font-semibold text-gray-800 dark:text-white mb-3">Services</h6>
              <ul className="space-y-2">
                {['Branding', 'Design', 'Marketing', 'Advertising'].map((service) => (
                  <li key={service}>
                    <a 
                      href="#" 
                      className="text-gray-600 dark:text-gray-400 hover:text-blue-600 transition duration-300"
                    >
                      {service}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="m-auto">
              <h6 className="font-semibold text-gray-800 dark:text-white mb-3">Company</h6>
              <ul className="space-y-2">
                {['About', 'Contact', 'Careers', 'Press'].map((item) => (
                  <li key={item}>
                    <a 
                      href="#" 
                      className="text-gray-600 dark:text-gray-400 hover:text-blue-600 transition duration-300"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Social and Legal */}
          <div className="flex flex-col items-center md:items-end mr-4">
            <div className="flex space-x-4 mb-4 gap-3">
              {[
                { Icon: BsTwitterX, href: "#" },
                { Icon:  BsYoutube, href: "#" },
                { Icon: BsInstagram, href: "#" },
                { Icon: BsMeta, href: "#" }
              ].map(({ Icon, href }) => (
                <a 
                  key={href} 
                  href={href} 
                  className="text-gray-600 dark:text-gray-400 hover:text-blue-600 transition duration-300"
                >
                  <Icon className="w-6 h-6" />
                </a>
              ))}
            </div>
            <div className="flex space-x-4 text-sm ">
              {['Privacy', 'Terms', 'Cookies'].map((item) => (
                <a 
                  key={item} 
                  href="#" 
                  className="text-gray-500 dark:text-gray-400 hover:text-blue-600 transition duration-300"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-200 dark:border-gray-700 mt-8 pt-6 text-center">
          <p className="text-sm text-gray-600 dark:text-gray-400">
            © {new Date().getFullYear()} ACME Industries Ltd. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;