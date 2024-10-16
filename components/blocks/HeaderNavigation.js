'use client'

import { useState, useEffect } from "react";
import { Dialog, DialogPanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { useSettings } from '@/components/context/Settings';
import dimensions from '@/utils/dimensions';
import Image from 'next/image';
import Link from 'next/link';

export default function HeaderNavigation({navigation, altNavigation}) {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [scrollPosition, setScrollPosition] = useState(0);

    const settings = useSettings();

    let logoSize = dimensions(settings.icon.filename);

    useEffect(() => {
      setScrollPosition(window.scrollY);
      const handleScroll = () => {
        setScrollPosition(window.scrollY);
      };
  
      // Add the event listener
      window.addEventListener("scroll", handleScroll);
  
      // Clean up the event listener when the component is unmounted
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }, []);

    return (
        <div className={`${scrollPosition > 20 ? "bg-base shadow-lg" : "bg-transparent"}`}>
          <nav aria-label="Global" className={`mx-auto flex max-w-7xl items-center justify-between lg:justify-normal gap-x-6 p-2 px-4 lg:px-8`}>
            <div className="flex">
              <Link href="/" title={`${settings.websiteName} homepage`} className="-m-1.5 p-1.5 mr-4 sm:mr-8">
                <span className="sr-only">{settings.websiteName}</span>
                <Image alt={settings.icon.alt} src={settings.icon.filename} width={logoSize.width} height={logoSize.height} className="h-16 w-auto" />
              </Link>
            </div>
            <div className="flex lg:hidden">
              <button
                type="button"
                onClick={() => setMobileMenuOpen(true)}
                className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
              >
                <span className="sr-only">Open main menu</span>
                <Bars3Icon aria-hidden="true" className="h-6 w-6" />
              </button>
            </div>
            <div className="hidden lg:flex lg:gap-x-6 lg:items-center">
              {navigation.map((item, index) => {
      
                  const slug = item?.link?.story?.full_slug == 'home' ? '/' : "/" + item?.link?.story?.full_slug;

                  if(slug != '/undefined') {
                    const navItem = {
                      url: slug,
                      anchor: item.link?.anchor ? `#${item.link.anchor}` : "",
                      label: item.label
                    }
                    
                    return (
                        <a key={index} href={navItem.url + navItem.anchor} className="text-md font-semibold leading-6 text-gray-900 font-glacialBold">
                            {navItem.label}
                        </a>
                    )
                  }
                  return null;
                  
              })}
            </div>
            {/* <div className="flex flex-1 items-center justify-end gap-x-6 font-glacialBold">
                {altNavigation.map((altNav, altIndex) => {
                    const altNavItem = {
                        url: "/" + altNav.link.story.full_slug,
                        label: altNav.label
                    }
                    return (
                        <a
                            key={altIndex}
                            href={altNavItem.url}
                            className="rounded-md bg-vi px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-violet focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 bg-emerald-green"
                        >
                            {altNavItem.label}
                        </a>
                    )
                })}
            </div> */}
          </nav>
          <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
            <div className="fixed inset-0 z-10" />
            <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-4 py-2 sm:ring-1 sm:ring-gray-900/10">
              <div className="flex items-center gap-x-6 justify-between">
                <Link href="/" title={`${settings.websiteName} homepage`} className="-m-1.5 p-1.5">
                  <span className="sr-only">{settings.websiteName}</span>
                  <Image alt={settings.icon.alt} src={settings.icon.filename} width={logoSize.width} height={logoSize.height} className="h-16 w-auto" />
                </Link>
                <button
                  type="button"
                  onClick={() => setMobileMenuOpen(false)}
                  className="-m-2.5 rounded-md p-2.5 text-gray-700"
                >
                  <span className="sr-only">Close menu</span>
                  <XMarkIcon aria-hidden="true" className="h-6 w-6" />
                </button>
              </div>
              <div className="mt-6 flow-root">
                <div className="-my-6 divide-y divide-gray-500/10">
                  <div className="space-y-2 py-6">
                    {navigation.map((item, index) => {
                        const slug = item.link.story.full_slug == 'home' ? '/' : "/" + item.link.story.full_slug;
                        const navItem = {
                            url: slug,
                            label: item.label
                        }
                        return (
                            <a
                                key={index}
                                href={navItem.href}
                                className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                            >
                                {navItem.label}
                            </a>
                        )
                    })}
                  </div>
                  {/* <div className="py-6">
                  {altNavigation.map((altNav, altIndex) => {
                    const altNavItem = {
                        url: "/" + altNav.link.story.full_slug,
                        label: altNav.label
                    }
                    return (
                    <a
                        key={altIndex}
                      href={altNavItem.url}
                      className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    >
                      {altNavItem.label}
                    </a>
                    )
                })}
                  </div> */}
                </div>
              </div>
            </DialogPanel>
          </Dialog>
        </div>
      )
}
