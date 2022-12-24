import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";

const navigation = [
  { name: "Posts", href: "#", current: true },
  { name: "About US", href: "#", current: false },
  { name: "Contact us", href: "#", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  return (
    <Disclosure as="nav" className="bg-gray-800">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 items-center">
                  <img
                    className="block h-8 w-auto lg:hidden"
                    src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                    alt="Your Company"
                  />
                  <img
                    className="hidden h-8 w-auto lg:block"
                    src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                    alt="Your Company"
                  />
                </div>
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                    <Link class="text-white px-3 py-2 rounded-md text-sm font-medium  no-underline hover:bg-red-500">
                      Posts
                    </Link>

                    <Link class=" text-white px-3 py-2 rounded-md text-sm font-medium  no-underline hover:bg-red-500">
                      About
                    </Link>

                    <Link class="text-white px-3 py-2 rounded-md text-sm font-medium no-underline hover:bg-red-500">
                      Contact Us
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pt-2 pb-3">
              <Disclosure.Button>
                <Link
                  href="#"
                  class="text-white px-3 py-2 rounded-md text-sm font-medium  no-underline hover:bg-transparent"
                >
                  Posts
                </Link>

                <a
                  href="#"
                  class="text-white px-3 py-2 rounded-md text-sm font-medium  no-underline hover:bg-transparent"
                >
                  About
                </a>

                <a
                  href="#"
                  class="text-white px-3 py-2 rounded-md text-sm font-medium  no-underline hover:bg-transparent"
                >
                  Contact us
                </a>
              </Disclosure.Button>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
