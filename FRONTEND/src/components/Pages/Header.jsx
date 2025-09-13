import React, { useEffect, useState } from "react";
import { IoIosSearch } from "react-icons/io";
import { FaRegUser } from "react-icons/fa6";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoCartOutline } from "react-icons/io5";
import { Dialog } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";

const Header = () => {
  const [cartOpen, setCartOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  // lock body scroll when drawer/menu is open
  useEffect(() => {
    const isOpen = cartOpen || mobileOpen;
    if (isOpen) {
      document.body.style.overflow = "hidden";
      document.body.style.position = "fixed";
      document.body.style.width = "100%";
    } else {
      document.body.style.overflow = "";
      document.body.style.position = "";
      document.body.style.width = "";
    }
    return () => {
      document.body.style.overflow = "";
      document.body.style.position = "";
      document.body.style.width = "";
    };
  }, [cartOpen, mobileOpen]);

  const products = [
    {
      id: 1,
      name: "boAt Energyshroom PB400",
      href: "#",
      // color: "Salmon",
      price: "₹1,699",
      quantity: 1,
      imageSrc:
        "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/PB400.png?v=1756381019",
      imageAlt:
        "Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt.",
    },
    {
      id: 2,
      name: "60 Hours Playback",
      href: "#",
      color: "Blue",
      price: "₹1,399",
      quantity: 1,
      imageSrc:
        "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Airdopes_138.jpg?v=1698402384",
      imageAlt:
        "Front of satchel with blue canvas body, black straps and handle, drawstring top, and front zipper pouch.",
    },
    {
      id: 3,
      name: "Zip Tote Basket",
      href: "#",
      color: "White and black",
      price: "1,799",
      quantity: 1,
      imageSrc:
        "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Nirvana_Ion.jpg?v=1697621745",
      imageAlt:
        "Front of zip tote bag with white canvas, black canvas straps and handle, and black zipper pulls.",
    },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white border-b">
      <div className="max-w-screen-xl mx-auto flex items-center justify-between px-4 py-3 lg:px-10">
        {/* Logo */}
        <a href="https://www.boat-lifestyle.com/" className="shrink-0">
          <img
            className="h-8 w-auto lg:h-10"
            src="https://www.boat-lifestyle.com/cdn/shop/files/boAt_logo_black_24889e30-925c-4185-a028-9fef497a8e44.svg?v=1732879339"
            alt="boAt logo"
          />
        </a>

        {/* Nav - visible from md (tablet) and above */}
        <nav className="hidden md:flex items-center gap-6">
          <Link to="/categories">
            <button className="hover:border-b border-red-500 hover:font-bold">
              Categories
            </button>
          </Link>
          <Link to="/boat-personalisation">
            <button className="hover:border-b border-red-500 hover:font-bold">
              boAt Personalisation
            </button>
          </Link>
          <Link to="/corporate-orders">
            <button className="hover:border-b border-red-500 hover:font-bold">
              Corporate Orders
            </button>
          </Link>
          <Link to="/gift-store">
            <button className="hover:border-b border-red-500 hover:font-bold">
              Gifting Store
            </button>
          </Link>
          <Link to="/more">
            <button className="hover:border-b border-red-500 hover:font-bold">
              More
            </button>
          </Link>
        </nav>

        {/* Tools - visible from md (tablet) and above */}
        <div className="hidden md:flex items-center gap-4">
          <div className="flex items-center gap-2 bg-gray-100 px-3 py-2 rounded-full">
            <IoIosSearch />
            <input
              type="text"
              placeholder="Search"
              className="outline-none bg-transparent text-sm w-36 md:w-40 lg:w-52"
            />
          </div>

          {/* User */}
          <Link to="/login">
            <button className="flex items-center gap-2">
              <FaRegUser size={22} />
            </button>
          </Link>

          {/* Cart */}
          <div>
            <button
              onClick={() => setCartOpen(true)}
              className="rounded-md bg-gray-950/5 px-2.5 py-1.5 text-sm font-semibold text-gray-900 hover:bg-gray-950/10"
            >
              <IoCartOutline size={22} />
            </button>

            {/* Cart Drawer */}
            <Dialog
              open={cartOpen}
              onClose={setCartOpen}
              className="relative z-10"
            >
              <div
                className="fixed inset-0 bg-gray-500/50"
                aria-hidden="true"
                onClick={() => setCartOpen(false)}
              />

              <div className="fixed inset-0 overflow-hidden">
                <div className="absolute inset-0 overflow-hidden">
                  <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
                    <Dialog.Panel className="pointer-events-auto w-screen max-w-md transform transition duration-500 ease-in-out">
                      <div className="flex h-full flex-col overflow-y-auto bg-white shadow-xl">
                        <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
                          <div className="flex items-start justify-between">
                            <Dialog.Title className="text-lg font-medium text-gray-900">
                              Shopping cart
                            </Dialog.Title>
                            <div className="ml-3 flex h-7 items-center">
                              <button
                                type="button"
                                onClick={() => setCartOpen(false)}
                                className="relative -m-2 p-2 text-gray-400 hover:text-gray-500"
                              >
                                <span className="sr-only">Close panel</span>
                                <XMarkIcon
                                  aria-hidden="true"
                                  className="h-6 w-6"
                                />
                              </button>
                            </div>
                          </div>

                          <div className="mt-8">
                            <div className="flow-root">
                              <ul
                                role="list"
                                className="-my-6 divide-y divide-gray-200"
                              >
                                {products.map((product) => (
                                  <li key={product.id} className="flex py-6">
                                    <div className="w-24 h-24 shrink-0 overflow-hidden rounded-md border border-gray-200">
                                      <img
                                        alt={product.imageAlt}
                                        src={product.imageSrc}
                                        className="w-full h-full object-cover"
                                      />
                                    </div>
                                    <div className="ml-4 flex flex-1 flex-col">
                                      <div>
                                        <div className="flex justify-between text-base font-medium text-gray-900">
                                          <h3>
                                            <a href={product.href}>
                                              {product.name}
                                            </a>
                                          </h3>
                                          <p className="ml-4">
                                            {product.price}
                                          </p>
                                        </div>
                                        <p className="mt-1 text-sm text-gray-500">
                                          {product.color}
                                        </p>
                                      </div>
                                      <div className="flex flex-1 items-end justify-between text-sm">
                                        <p className="text-gray-500">
                                          Qty {product.quantity}
                                        </p>
                                        <div className="flex">
                                          <button
                                            type="button"
                                            className="font-medium text-indigo-600 hover:text-indigo-500"
                                          >
                                            Remove
                                          </button>
                                        </div>
                                      </div>
                                    </div>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        </div>

                        <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
                          <div className="flex justify-between text-base font-medium text-gray-900">
                            <p>Subtotal</p>
                            <p>₹4897.00</p>
                          </div>
                          <p className="mt-0.5 text-sm text-gray-500">
                            Shipping and taxes calculated at checkout.
                          </p>
                          <div className="mt-6">
                            <a
                              href="#"
                              className="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-xs hover:bg-indigo-700"
                            >
                              Checkout
                            </a>
                          </div>
                          <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
                            <p>
                              or{" "}
                              <button
                                type="button"
                                onClick={() => setCartOpen(false)}
                                className="font-medium text-indigo-600 hover:text-indigo-500"
                              >
                                Continue Shopping →
                              </button>
                            </p>
                          </div>
                        </div>
                      </div>
                    </Dialog.Panel>
                  </div>
                </div>
              </div>
            </Dialog>
          </div>
        </div>

        {/* Hamburger - visible only on mobile */}
        <button
          className="md:hidden inline-flex items-center justify-center p-2 rounded-md hover:bg-gray-100"
          aria-label="Toggle menu"
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((s) => !s)}
        >
          <GiHamburgerMenu size={22} />
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden fixed inset-0 z-40 bg-white transition-transform duration-200 origin-top ${
          mobileOpen ? "translate-y-0" : "-translate-y-full"
        }`}
        role="dialog"
        aria-modal="true"
      >
        <div
          className="absolute inset-0 bg-black/40"
          onClick={() => setMobileOpen(false)}
        />
        <div className="max-w-screen-sm mx-auto relative px-4 pt-4 pb-8">
          <div className="flex items-center justify-between mb-4">
            <a href="https://www.boat-lifestyle.com/" className="shrink-0">
              <img
                className="h-8 w-auto"
                src="https://www.boat-lifestyle.com/cdn/shop/files/boAt_logo_black_24889e30-925c-4185-a028-9fef497a8e44.svg?v=1732879339"
                alt="boAt logo"
              />
            </a>
            <button
              className="p-2 rounded-md hover:bg-gray-100 z-50"
              onClick={() => setMobileOpen(false)}
              aria-label="Close menu"
            >
              <XMarkIcon className="h-6 w-6 text-gray-700" />
            </button>
          </div>

          <div className="flex items-center gap-2 bg-gray-100 px-3 py-2 rounded-full mb-4">
            <IoIosSearch />
            <input
              type="text"
              placeholder="Search"
              className="outline-none bg-transparent text-sm w-full"
            />
          </div>

          {/* Mobile links */}
          <ul className="space-y-3">
            <li>
              <Link
                to="/categories"
                onClick={() => setMobileOpen(false)}
                className="block w-full text-left py-2"
              >
                Categories
              </Link>
            </li>
            <li>
              <Link
                to="/boat-personalisation"
                onClick={() => setMobileOpen(false)}
                className="block w-full text-left py-2"
              >
                boAt Personalisation
              </Link>
            </li>
            <li>
              <Link
                to="/corporate-orders"
                onClick={() => setMobileOpen(false)}
                className="block w-full text-left py-2"
              >
                Corporate Orders
              </Link>
            </li>
            <li>
              <Link
                to="/gift-store"
                onClick={() => setMobileOpen(false)}
                className="block w-full text-left py-2"
              >
                Gifting Store
              </Link>
            </li>
            <li>
              <Link
                to="/more"
                onClick={() => setMobileOpen(false)}
                className="block w-full text-left py-2"
              >
                More
              </Link>
            </li>
            <li>
              <Link
                to="/login"
                onClick={() => setMobileOpen(false)}
                className="inline-flex items-center gap-2 py-2"
              >
                <FaRegUser size={20} />
                <span>Account</span>
              </Link>
            </li>
            <li>
              <Link
                to="/my-cart"
                onClick={() => setMobileOpen(false)}
                className="inline-flex items-center gap-2 py-2"
              >
                <IoCartOutline size={20} />
                <span>Cart</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
