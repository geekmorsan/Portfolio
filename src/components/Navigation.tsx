import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import ThemeToggle from './ThemeToggle'

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
      <div className="mx-auto p-4 sm:px-6 xl:px-16 py-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 right-0 flex items-center md:hidden">
            {/* Mobile menu button */}
            <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-type-2 hover:bg-button ">
              <span className="absolute -inset-0.5" />
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="block h-6 w-6 group-data-[open]:hidden" />
              <XMarkIcon aria-hidden="true" className="hidden h-6 w-6 group-data-[open]:block" />
            </DisclosureButton>
          </div>

          {/* Flex container for logo and menu */}
          <div className="flex flex-1 items-center justify-between">
            {/* Logo with name */}
            <div className="flex items-center pr-2 mr-2 space-x-2 flex-shrink-0">
              <a
                href="/"
                className="flex items-center justify-between text-type-1 dark:text-outline gap-1 sm:gap-2 -m-1.5 p-1.5"
              >
                <img
                  alt="Your Company"
                  src="/Images/logocn.png"
                  className="h-12 w-auto shadow-button-hue sm:h-16 flex-shrink-0"
                />
                {/* Name next to logo, responsive size */}
                <span className='' >
                  <p className="md:flex text-2xl w-1/2 md:max-lg:text[1.4rem] max-md:w-full lg:w-full font-semibold lg:text-3xl mr-2 text-wrap white-space-normal">Claudia Nohlgård</p>
                </span>
              </a>
            </div>

            {/* Navigation links */}
            <div className="hidden md:flex absolute mx-2 left-1/2 transform -translate-x-1/2">
              <div className="bg-button p-2 dark:ring-1 ring-gray-800 flex items-center shadow shadow-button-hue dark:shadow-md dark:shadow-bgbase space-x-1.5 rounded-full">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    aria-current={item.current ? 'page' : undefined}
                    className={classNames(
                      item.href === url.pathname
                        ? 'bg-accent-1 font-medium text-lg text-outline shadow shadow-button-hue bg-gradient-to-t from-accent-1-dark via-transparent to-accent-1-light'
                        : 'text-type-2 text-base font-medium hover:bg-accent-1-hover hover:text-type-2 hover:shadow-sm hover:shadow-button-hue hover:bg-gradient-to- from-accent-1 via-transparent to-transparent',
                      'rounded-full px-4 py-3',
                    )}
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </div>

            {/* Theme toggle */}
            <div className="hidden md:flex items-center space-x-4">
              <ThemeToggle />
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <DisclosurePanel className="absolute w-72 -translate-y-4 right-4 md:hidden rounded-[1.75rem] bg-button dark:ring-1 ring-gray-800 shadow shadow-button-hue dark:shadow-md dark:shadow-bgbase">
        <div className="space-y-2 p-3">
          {navigation.map((item) => (
            <DisclosureButton
              key={item.name}
              as="a"
              href={item.href}
              aria-current={item.current ? 'page' : undefined}
              className={classNames(
                item.href === url.pathname
                  ? 'bg-accent-1 font-medium text-lg text-outline shadow shadow-button-hue bg-gradient-to-t from-accent-1-dark via-transparent to-accent-1-light'
                  : 'text-type-2 text-base font-medium hover:bg-accent-1-hover hover:text-type-2 hover:shadow-sm hover:shadow-button-hue hover:bg-gradient-to- from-accent-1 via-transparent to-transparent',
                'block rounded-3xl px-3 py-2 text-center text-base font-medium',
              )}
            >
              {item.name}
            </DisclosureButton>
          ))}
        </div>
        <div className="flex border-t border-button-hue justify-end py-3 mx-4  md:hidden">
          <ThemeToggle />
        </div>
      </DisclosurePanel>
    </Disclosure>
  );
}
