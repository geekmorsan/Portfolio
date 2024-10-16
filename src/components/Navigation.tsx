import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import ThemeToggle from '../UI/ThemeToggle'

const navigation = [
  { name: 'Home', href: '/', current: true },
  { name: 'Projects', href: '/projects/', current: false },
  { name: 'About', href: '/about/', current: false },
  { name: 'Contact', href: '/contact/', current: false },
]

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

export declare interface NavigationProps{
  url:URL,
}

export default function Navigation({ url }: NavigationProps) {
  return (
    <Disclosure as="nav" className="">
      <div className="mx-auto p-4 sm:px-6 lg:px-12 py-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
            {/* Mobile menu button */}
            <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
              <span className="absolute -inset-0.5" />
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="block h-6 w-6 group-data-[open]:hidden" />
              <XMarkIcon aria-hidden="true" className="hidden h-6 w-6 group-data-[open]:block" />
            </DisclosureButton>
          </div>

          {/* Flex container for logo and menu */}
          <div className="flex flex-1 items-center sm:items-stretch justify-between">
            {/* Logo with name */}
            <div className="flex items-center pr-2 space-x-2 flex-shrink-0">
              <a
                href="/"
                className="flex items-center justify-between text-type-1 gap-1 sm:gap-2 -m-1.5 p-1.5"
              >
                <img
                  alt="Your Company"
                  src="/Images/logocn.png"
                  className="h-12 w-auto sm:h-16 flex-shrink-0"
                />
                {/* Name next to logo, responsive size */}
                <span className='' >
                  <p className="hidden md:flex text-lg w-1/2 lg:w-full lg:text-3xl text-wrap white-space-normal">Claudia Nohlgård</p>
                </span>
              </a>
            </div>

            {/* Navigation links */}
            <div className="hidden sm:flex absolute mx-2 left-1/2 transform -translate-x-1/2">
              <div className="bg-button p-2 flex items-center shadow-sm shadow-button-hue space-x-2 rounded-full">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    aria-current={item.current ? 'page' : undefined}
                    className={classNames(
                      item.href === url.pathname
                        ? 'bg-accent-1 font-medium text-lg text-outline shadow-md shadow-button-hue bg-gradient-to-t from-accent-1-dark via-transparent to-accent-1-light'
                        : 'text-button-hue text-base font-medium hover:bg-accent-1-light2 hover:bg-accent-1-hover hover:text-type-2 hover:shadow-sm hover:shadow-button-hue hover:bg-gradient-to- from-accent-1 via-transparent to-transparent',
                      'rounded-full px-4 py-3',
                    )}
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </div>

            {/* Theme toggle */}
            <div className="hidden sm:flex items-center space-x-4">
              <ThemeToggle />
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <DisclosurePanel className="sm:hidden bg-bgbase/75">
        <div className="space-y-1 px-2 pb-3 pt-2">
          {navigation.map((item) => (
            <DisclosureButton
              key={item.name}
              as="a"
              href={item.href}
              aria-current={item.current ? 'page' : undefined}
              className={classNames(
                item.href === url.pathname
                  ? 'bg-accent-1 text-white'
                  : 'text-type-1 hover:bg-accent-1-light hover:text-white',
                'block rounded-md px-3 py-2 text-base font-medium',
              )}
            >
              {item.name}
            </DisclosureButton>
          ))}
        </div>
        <div className="flex justify-end p-4 sm:hidden">
          <ThemeToggle />
        </div>
      </DisclosurePanel>
    </Disclosure>
  );
}
