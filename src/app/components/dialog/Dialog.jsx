import { Fragment, useRef, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { ExclamationTriangleIcon } from "@heroicons/react/24/outline";

import { francois_one } from "@/fonts/francois_one";
import { quicksand } from "@/fonts/quicksand";
import { gilda_display } from "@/fonts/gilda_display";

import Form from "./Form";

export default function Example({
  showDialog,
  setOpenDialog,
  item,
  operation,
}) {
  //console.log(item);
  //   const [open, setOpen] = useState(true)

  //   const cancelButtonRef = useRef(null)

  //this funtion avoids the dialog close when user click out of it
  const closeFake = () => {

  }

  return (
    <div className="mt-16 ">
      <Transition.Root show={showDialog} as={Fragment}>
        <Dialog
          as="div"
          className="relative  z-30 "
          onClose={closeFake}
        >
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          <div className="fixed inset-0 z-10 overflow-y-auto">
            <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                enterTo="opacity-100 translate-y-0 sm:scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              >
                <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                  <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-8">
                    <div className="sm:flex sm:items-start">
                      <div className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                        <ExclamationTriangleIcon
                          className="h-6 w-6 text-red-600"
                          aria-hidden="true"
                        />
                      </div>
                      <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                        <Dialog.Title
                          as="h3"
                          className={`${francois_one.className} text-lg leading-6 font-medium text-gray-900`}
                        ></Dialog.Title>
                        <div className="mt-2">
                          <Form
                            setOpenDialog={setOpenDialog}
                            operation={operation}
                          />
                          ,
                          <p
                            className={`${quicksand.className} text-sm text-gray-500`}
                          ></p>
                          {/* <p
                            className={`${quicksand.className} text-sm text-gray-500`}
                          >
                            Aquí puedes editar información del item
                            seleccionado.
                          </p> */}
                        </div>
                      </div>
                    </div>
                    {/* <div className="mt-5 sm:mt-4 sm:flex sm:flex-row-reverse">
                      <button
                        type="button"
                        className={`${gilda_display.className} w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm`}
                        onClick={() => setOpenDialog(false)}
                      >
                        Cancelar
                      </button>
                      <button
                        type="submit"
                        className={`${quicksand.className} mt-3 w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-green-600 text-base font-medium text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm`}
                        // onClick={}
                      >
                        Guardar
                      </button>
                    </div> */}
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    </div>
  );
}
