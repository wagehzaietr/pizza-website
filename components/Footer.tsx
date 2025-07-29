import Link from "next/link";
import { Facebook, Instagram, Twitter, Phone, Mail, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-background border-t text-gray-600 dark:bg-background dark:text-gray-400 transition-colors duration-300 pt-16 pb-8">
      <div className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-5">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          
          {/* Brand Column */}
          <div>
            <h3 className="text-2xl font-extrabold text-white mb-4">
              Pizzeria
            </h3>
            <p className="text-sm leading-relaxed mb-6 max-w-xs">
              Crafting wood-fired perfection since 2010. Fresh ingredients, bold flavors, and lightning-fast delivery.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-gray-400 hover:text-orange-500 transition-transform duration-200 hover:scale-110">
                <span className="sr-only">Facebook</span>
                <Facebook className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-orange-500 transition-transform duration-200 hover:scale-110">
                <span className="sr-only">Instagram</span>
                <Instagram className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-orange-500 transition-transform duration-200 hover:scale-110">
                <span className="sr-only">Twitter</span>
                <Twitter className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {["Home", "Menu", "About Us", "Contact", "Order Online", "Careers"].map((item) => (
                <li key={item}>
                  <Link
                    href={
                      item === "Home"
                        ? "/"
                        : `/${item.toLowerCase().replace(/\s+/g, "-")}`
                    }
                    className="hover:text-orange-500 transition-colors duration-200 text-sm"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-semibold text-lg mb-4">Contact Us</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start space-x-2">
                <MapPin className="h-5 w-5 text-orange-500 mt-0.5 flex-shrink-0" />
                <span>+963 Pizza Lane, Damascus City</span>
              </li>
              <li className="flex items-start space-x-2">
                <Phone className="h-5 w-5 text-orange-500 mt-0.5 flex-shrink-0" />
                <span>+1 (555) 123-PIZZ</span>
              </li>
              <li className="flex items-start space-x-2">
                <Mail className="h-5 w-5 text-orange-500 mt-0.5 flex-shrink-0" />
                <span>hello@pizzeria.com</span>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="text-white font-semibold text-lg mb-4">Open Hours</h4>
            <ul className="space-y-2 text-sm">
              {[
                "Monday - Friday: 11am - 10pm",
                "Saturday: 10am - 11pm",
                "Sunday: 10am - 9pm",
              ].map((time, i) => (
                <li key={i} className="flex justify-between">
                  <span>{time.split(":")[0]}:</span>
                  <span className="text-orange-500 font-medium">{time.split(":")[1].trim()}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gray-800 dark:bg-gray-700 mb-8"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row md:justify-between items-center text-sm">
          <p className="mb-4 md:mb-0">
            &copy; {new Date().getFullYear()}{" "}
            <span className="text-white"><span className="text-primary">P</span>izzeria</span>. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <Link href="/privacy" className="hover:text-orange-500 transition-colors duration-200">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-orange-500 transition-colors duration-200">
              Terms of Service
            </Link>
            <Link href="/cookies" className="hover:text-orange-500 transition-colors duration-200">
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}