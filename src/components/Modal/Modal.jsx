/* This example requires Tailwind CSS v2.0+ */
import { Fragment, useRef, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import FormConfiguracion from "../Form/FormConfiguracion";

// import MapPreview from "../components/map_preview/MapPreview";

export default function Modal(props) {
  const [open, setOpen] = useState(props.show_modal);
  const cancelButtonRef = useRef(null);
  const [option, setOption] = useState("nada");

  const file_type = [
    {
      name: "ShapeFile",
      value:
        props.baseGeoUrl +
        "?service=WFS&version=1.0.0&request=GetFeature&typeName=" +
        props.name +
        "&outputformat=SHAPE-ZIP&SRSNAME=EPSG:4326",
    },
    {
      name: "Csv",
      value:
        props.baseGeoUrl +
        "?service=WFS&version=1.0.0&request=GetFeature&typeName=" +
        props.name +
        "&outputFormat=csv",
    },
  ];

  // console.log("AAA")
  // console.log(props);

  const handleChange = (e) => {
    console.log(e.target.value);
    setOption(e.target.value);
    if (e.target.value != "nada") {
      window.location.href = e.target.value;
    }
  };

  return (
    <Transition.Root show={props.show_modal} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-10"
        initialFocus={cancelButtonRef}
        onClose={setOpen}
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

        <div className="fixed z-10 inset-0 overflow-y-auto">
          <div className="flex items-end sm:items-center justify-center min-h-full p-1 text-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              {/* <Dialog.Panel className="relative bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:max-w-lg sm:w-full"> */}
              <Dialog.Panel className="relative bg-white rounded-lg text-right overflow-hidden shadow-xl dark:shadow-indigo-500/50 transform transition-all w-full sm:my-8 sm:w-5/6">
                <div className="bg:white dark:bg-slate-900 px-1 py-1 sm:px-1 sm:flex sm:flex-row-reverse mt-100">
                  <button
                    type="button"
                    className="mt-1 inline-flex justify-left rounded-md px-2 py-0 bg-white text-base font-medium text-gray-900 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                    onClick={() => props.setShow_modal(!props.show_modal)}
                    ref={cancelButtonRef}
                  >
                    X
                  </button>

                  <FormConfiguracion
                    id={props.id}
                    descripcion={props.descripcion}
                    activo={props.activo}
                  />
                </div>
                <div className="bg:white dark:bg-slate-900 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse"></div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
