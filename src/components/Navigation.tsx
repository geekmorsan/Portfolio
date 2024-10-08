import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'

import { Switch } from '@headlessui/react'
import { useState } from 'react'

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

export default function Navigation({url}:NavigationProps) {
  return (
    <Disclosure as="nav" className="">
      <div className="mx-auto p-4 sm:px-6 lg:px-12 py-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
            {/* Mobile menu button*/}
            <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
              <span className="absolute -inset-0.5" />
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="block h-6 w-6 group-data-[open]:hidden" />
              <XMarkIcon aria-hidden="true" className="hidden h-6 w-6 group-data-[open]:block" />
            </DisclosureButton>
          </div>
          <div className="flex flex-1 items-center mr-10 sm:items-stretch sm:justify-between">
            <div className="flex items-center">
              <a href='/' className='flex items-center justify-between text-type-1 text-2xl gap-1 sm:gap-2 -m-1.5 p-1.5'>
              <img
                alt="Your Company"
                src="/Images/logocn.png"
                className="h-16 w-auto"
              />Claudia Nohlgård</a>
            </div>
            <div className="hidden sm:ml-6 sm:flex">
              <div className="bg-button border border-outline/75 p-3 flex items-center shadow-md space-x-2 rounded-full">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    aria-current={item.current ? 'page' : undefined}
                    className={classNames(
                      item.href === url.pathname ? 'bg-accent-1 text-white shadow-lg' : 'text-type-2 hover:bg-accent-1-light hover:shadow-md hover:text-white',
                      'rounded-full px-4 py-2 text-sm font-medium',
                    )}
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <DisclosurePanel className="sm:hidden bg-bgbase/75">
        <div className="space-y-1 px-2 pb-3 pt-2">
          {navigation.map((item) => (
            <DisclosureButton
              key={item.name}
              as="a"
              href={item.href}
              aria-current={item.current ? 'page' : undefined}
              className={classNames(
                item.href === url.pathname ? 'bg-accent-1 text-white' : 'text-type-1 hover:bg-accent-1-light hover:text-white',
                'block rounded-md px-3 py-2 text-base font-medium',
              )}
            >
              {item.name}
            </DisclosureButton>
          ))}
        </div>
      </DisclosurePanel>
    </Disclosure>
  )
}
