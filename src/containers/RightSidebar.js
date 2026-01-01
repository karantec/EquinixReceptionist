import XMarkIcon from "@heroicons/react/24/solid/XMarkIcon";
import { useDispatch, useSelector } from "react-redux";
import NotificationBodyRightDrawer from "../features/common/components/NotificationBodyRightDrawer";
import { closeRightDrawer } from "../features/common/rightDrawerSlice";
import { RIGHT_DRAWER_TYPES } from "../utils/globalConstantUtil";
import CalendarEventsBodyRightDrawer from "../features/calendar/CalendarEventsBodyRightDrawer";

function RightSidebar() {
  const { isOpen, bodyType, extraObject, header } = useSelector(
    (state) => state.rightDrawer
  );
  const dispatch = useDispatch();

  const close = () => {
    dispatch(closeRightDrawer());
  };

  return (
    <div
      className={
        "fixed inset-0 z-20 bg-black bg-opacity-40 transition-opacity duration-300 " +
        (isOpen ? "opacity-100" : "opacity-0 pointer-events-none")
      }
    >
      {/* Drawer */}
      <section
        className={
          "absolute right-0 top-0 h-full w-80 md:w-96 bg-white shadow-xl transform transition-transform duration-300 " +
          (isOpen ? "translate-x-0" : "translate-x-full")
        }
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center gap-2 px-4 py-3 border-b">
            <button
              className="btn btn-circle btn-outline btn-sm"
              onClick={close}
            >
              <XMarkIcon className="h-5 w-5" />
            </button>
            <span className="font-semibold text-lg">{header}</span>
          </div>

          {/* Content */}
          <div className="flex-1 overflow-y-auto p-4">
            {
              {
                [RIGHT_DRAWER_TYPES.NOTIFICATION]: (
                  <NotificationBodyRightDrawer
                    {...extraObject}
                    closeRightDrawer={close}
                  />
                ),
                [RIGHT_DRAWER_TYPES.CALENDAR_EVENTS]: (
                  <CalendarEventsBodyRightDrawer
                    {...extraObject}
                    closeRightDrawer={close}
                  />
                ),
                [RIGHT_DRAWER_TYPES.DEFAULT]: null,
              }[bodyType]
            }
          </div>
        </div>
      </section>

      {/* Click outside to close */}
      <div className="w-full h-full" onClick={close}></div>
    </div>
  );
}

export default RightSidebar;
