import React from "react";

const Footer = () => {
  return (
    <div className="sm:px-10 mt-5">
      {/* Main Footer Section */}
      <div className="bg-[#e7f0f5] flex flex-col sm:flex-row sm:justify-between gap-10 mb-10 p-6 sm:p-10 text-center sm:text-left">
        {/* Subscribe Section */}
        <div>
          <img
            src="https://www.boat-lifestyle.com/cdn/shop/files/boAt_logo_black_24889e30-925c-4185-a028-9fef497a8e44.svg?v=1732879339"
            alt="boat-logo"
            className="h-20 w-20 mx-auto sm:mx-0"
          />
          <h1 className="font-bold mt-4">Subscribe to our email alerts!</h1>
          <input
            className="bg-white rounded-sm mt-3 p-2 w-full sm:w-64 outline-none placeholder:px-2"
            type="email"
            placeholder="Enter Your Email"
          />
        </div>

        {/* Shop Section */}
        <div className="font-light">
          <h1 className="font-bold mb-2">Shop</h1>
          <p>Wired Headphones</p>
          <p>Home Audio</p>
          <a href="">
            <p>Smart Watch</p>
          </a>
          <a href="/#">
            <p>Misfit Trimmers</p>
          </a>
          <a href="/#">
            <p>Wireless Headphones</p>
          </a>
        </div>

        {/* Help Section */}
        <div className="font-light">
          <h1 className="font-bold mb-2">Help</h1>
          <p>Track Your Order</p>
          <a href="">
            <p>Warranty & Support</p>
          </a>
          <a href="/#">
            <p>Return Policy</p>
          </a>
          <a href="/#">
            <p>Service Centers</p>
          </a>
          <a href="/#">
            <p>Bulk Orders</p>
          </a>
          <a href="/#">
            <p>Why Buy Direct</p>
          </a>
        </div>

        {/* Company Section */}
        <div className="font-light">
          <h1 className="font-bold mb-2">Company</h1>
          <p>About BoAt</p>
          <a href="">
            <p>News</p>
          </a>
          <a href="/#">
            <p>Read Our Blog</p>
          </a>
          <a href="/#">
            <p>Careers</p>
          </a>
          <a href="/#">
            <p>Security</p>
          </a>
          <a href="/#">
            <p>Investor Relations</p>
          </a>
          <a href="/#">
            <p>Social Responsibility</p>
          </a>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="bg-[#e7f0f5] py-4 border-t border-gray-300 text-center">
        <h1 className="font-semibold text-lg mb-2">Let's get Social</h1>
        <div className="flex justify-center gap-5">
          {/* Example Social Icons (you can replace with react-icons) */}
          <a href="instgram.com">
            <img
              src="https://cdn-icons-png.flaticon.com/512/2111/2111463.png"
              className="h-4 w-4"
              alt="Instagram"
            />
          </a>
          <a href="fb.com">
            <img
              src="https://cdn-icons-png.flaticon.com/512/733/733547.png"
              className="h-4 w-4"
              alt="Facebook"
            />
          </a>
          <a href="xcom">
            <img
              src="https://cdn-icons-png.flaticon.com/512/733/733579.png"
              className="h-4 w-4"
              alt="Twitter"
            />
          </a>
          <a href="www.instagram.com">
            <img
              src="https://cdn-icons-png.flaticon.com/512/733/733614.png"
              className="h-4 w-4"
              alt="LinkedIn"
            />
          </a>
        </div>
        <div className="flex justify-center gap-5 text-sm sm:text-[10px] p-2">
          <ul className="">
            <li>Privacy Policy</li>
          </ul>
          <ul className="list-disc">
            <li>Terms of Use</li>
          </ul>
          <ul className="list-disc">
            <li>Warranty Policy</li>
          </ul>
        </div>
        <p className="font-light p-5">
          © 2025 Imagine Marketing Limited. All Rights Reserved.
        </p>
        <p className="font-light text-wrap">
          For queries contact us: Manager, Imagine Marketing Limited Unit no.
          204 & 205, 2nd floor, D-wing & E-wing, Corporate Avenue, Andheri
          Ghatkopar Link Road, Mumbai, Maharashtra-400093, India
        </p>
      </div>
    </div>
  );
};

export default Footer;
