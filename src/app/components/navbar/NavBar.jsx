"use client";
import { Fragment,  useState } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import {
  Bars3Icon,
  BellIcon,
  MagnifyingGlassIcon,
  UserCircleIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";

import Image from "next/image";
import Link from "next/link";

import gato_negro_logo from "../../../../public/gato_negro_logo.png";
import { UserCircleOutline } from "heroicons-react";
import AdminPage from "../adminPage/AdminPage";
import { AdminRoute } from "../routes/AdminRoute";
import { PrivateRoute } from "../routes/PrivateRoute";
import { PubliceRoute } from "../routes/PublicRoute";
import { useDispatch } from "react-redux";
import { logout } from "@/actions/auth";
import { useForm } from "@/hooks/useForm";
import 'animate.css';
import { useRouter, useSearchParams } from "next/navigation";

const navigation = [
  { name: "Inicio", href: "/", current: false },
  { name: "Menu", href: "/menu", current: false },
  // { name: 'Nosotros', href: 'about', current: false },
  // { name: 'Contáctanos', href: '#', current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function NavBar() {
  const dispatch = useDispatch();
  const router = useRouter();
  //const user = useSelector((state) => state.auth);


  const searchParams = useSearchParams()
 
  const searchParam = searchParams.get('search')
  

  const [searching, setSearching] = useState(false);

  const [formValues, handdleInputChange, reset] = useForm({
    search: searchParam,
  });

  const { search } = formValues;

  const handleSearch = (e) => {
    e.preventDefault();

    router.push(`/menu/?search=${search}`);
    

    
  };

  const handleLogOut = () => {
    dispatch(logout());
  };

  return (
    <nav className="fixed top-0 w-full bg-slate-50  z-20">
      <Disclosure as="nav" className="">
        {({ open }) => (
          <>
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
              <div className="relative flex h-16 items-center justify-between">
                <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                  {/* Mobile menu button*/}
                  <Disclosure.Button className="inline-flex items-center justify-center  rounded-md p-2 text-slate-950 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XMarkIcon
                        className="block h-6 w-6 border-slate-950"
                        aria-hidden="true"
                      />
                    ) : (
                      <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
                <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                   {!searching && ( 
                  <div className={`flex flex-shrink-0 items-center animate__animated ${searching ? 'animate__fadeOut' : 'animate__fadeIn'} `}>
                    <Link href={"/"}>
                      <Image
                        src={gato_negro_logo}
                        width={50}
                        height={50}
                        alt="Gato Negro Logo"
                      />
                    </Link>
                  </div>
                   )} 

                  <div className="w-full  hidden sm:ml-6 sm:block w-100">
                    <div className="flex justify-end space-x-4 ">
                      {navigation.map((item) => (
                        <Link
                          key={item.name}
                          href={item.href}
                          className={classNames(
                            item.current
                              ? "bg-slate-950 text-slate-50"
                              : "text-slate-950 hover:bg-slate-950 hover:text-slate-50",
                            "rounded-md px-3 py-2 text-sm font-medium"
                          )}
                          aria-current={item.current ? "page" : undefined}
                        >
                          {item.name}
                        </Link>

                        //   <a
                        //     key={item.name}
                        //     href={item.href}
                        //     className={classNames(
                        //       item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                        //       'rounded-md px-3 py-2 text-sm font-medium'
                        //     )}
                        //     aria-current={item.current ? 'page' : undefined}
                        //   >
                        //     {item.name}
                        //   </a>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                  <div className="flex flex-row">
                    {searching && (
                      <div className={`animate__animated ${searching ? 'animate__fadeInRight' : 'animate__fadeOutRight'}  `}>
                        <form onSubmit={handleSearch}>
                          <input
                          value={search}
                            id="search"
                            name="search"
                            type="text"
                            autoComplete="true"
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            onChange={handdleInputChange}
                          />
                        </form>
                      </div>
                    )}
                    <button
                      onClick={() => setSearching(!searching)}
                      type="button"
                      className="rounded-full  p-1 text-gray-950  focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                    >
                      <span className="sr-only">View notifications</span>
                      <MagnifyingGlassIcon
                        className="h-6 w-6"
                        aria-hidden="true"
                      />
                    </button>
                  </div>

                  {/* Profile dropdown  */}
                  <Menu as="div" className="relative ml-3">
                    <div>
                      <Menu.Button className="flex rounded-full  text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                        <span className="sr-only ">Open user menu</span>
                        <UserCircleOutline
                          id="plusCircleIcon"
                          className="block h-8 w-8  "
                          aria-hidden="true"
                        />
                        {/* <img
                        //  width={50}
                        //  height={50}
                        className="h-8 w-8 rounded-full"
                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                        alt=""
                      />  */}
                      </Menu.Button>
                    </div>
                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-100"
                      enterFrom="transform opacity-0 scale-95"
                      enterTo="transform opacity-100 scale-100"
                      leave="transition ease-in duration-75"
                      leaveFrom="transform opacity-100 scale-100"
                      leaveTo="transform opacity-0 scale-95"
                    >
                      <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                        <AdminRoute>
                          <Menu.Item>
                            {({ active }) => (
                              <Link
                                href="/dashboard"
                                className={classNames(
                                  active ? "bg-gray-100" : "",
                                  "block px-4 py-2 text-sm text-blue-600"
                                )}
                              >
                                Panel de control
                              </Link>
                            )}
                          </Menu.Item>
                        </AdminRoute>
                        <PubliceRoute>
                          <Menu.Item>
                            {({ active }) => (
                              <a
                                href="/login"
                                className={classNames(
                                  active ? "bg-gray-100" : "",
                                  "block px-4 py-2 text-sm text-gray-700"
                                )}
                              >
                                Auntenticarse
                              </a>
                            )}
                          </Menu.Item>
                        </PubliceRoute>
                        <PrivateRoute>
                          <Menu.Item>
                            {({ active }) => (
                              <button
                                onClick={handleLogOut}
                                className={classNames(
                                  active ? "bg-gray-100" : "",
                                  "block px-4 py-2 text-sm text-gray-700"
                                )}
                              >
                                Cerrar Sesión
                              </button>
                            )}
                          </Menu.Item>
                        </PrivateRoute>
                      </Menu.Items>
                    </Transition>
                  </Menu>
                </div>
              </div>
            </div>

            <Disclosure.Panel className="sm:hidden">
              <div className="space-y-1 px-2 pb-3 pt-2">
                {navigation.map((item) => (
                  <Disclosure.Button
                    key={item.name}
                    as="a"
                    href={item.href}
                    className={classNames(
                      item.current
                        ? "bg-gray-900 text-white"
                        : "text-slate-950 hover:bg-slate-950 hover:text-slate-50",
                      "block rounded-md px-3 py-2 text-base font-medium"
                    )}
                    aria-current={item.current ? "page" : undefined}
                  >
                    {item.name}
                  </Disclosure.Button>
                ))}
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </nav>
  );
}
