import React, { useContext } from "react";
import { Modalcontext } from "./Body";
import { dropArrow } from "./Subnav";
import { Button } from "./Navbar";

const leftArrow = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="currentColor"
    viewBox="0 0 256 256"
  >
    <path d="M228,128a12,12,0,0,1-12,12H69l51.52,51.51a12,12,0,0,1-17,17l-72-72a12,12,0,0,1,0-17l72-72a12,12,0,0,1,17,17L69,116H216A12,12,0,0,1,228,128Z"></path>
  </svg>
);

const copy = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="currentColor"
    viewBox="0 0 256 256"
    className="h-3.5 w-3.5 text-gray11 group-hover:text-gray12"
  >
    <path d="M216,32H88a8,8,0,0,0-8,8V80H40a8,8,0,0,0-8,8V216a8,8,0,0,0,8,8H168a8,8,0,0,0,8-8V176h40a8,8,0,0,0,8-8V40A8,8,0,0,0,216,32Zm-8,128H176V88a8,8,0,0,0-8-8H96V48H208Z"></path>
  </svg>
);
const redirect = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="currentColor"
    viewBox="0 0 256 256"
    className="h-3.5 w-3.5 text-gray11 group-hover:text-gray12 md:h-4 md:w-4"
  >
    <path d="M192,136v72a16,16,0,0,1-16,16H48a16,16,0,0,1-16-16V80A16,16,0,0,1,48,64h72a8,8,0,0,1,0,16H48V208H176V136a8,8,0,0,1,16,0Zm32-96a8,8,0,0,0-8-8H152a8,8,0,0,0-5.66,13.66L172.69,72l-42.35,42.34a8,8,0,0,0,11.32,11.32L184,83.31l26.34,26.35A8,8,0,0,0,224,104Z"></path>
  </svg>
);
const info = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="currentColor"
    viewBox="0 0 256 256"
    className="h-4 w-4"
  >
    <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm16-40a8,8,0,0,1-8,8,16,16,0,0,1-16-16V128a8,8,0,0,1,0-16,16,16,0,0,1,16,16v40A8,8,0,0,1,144,176ZM112,84a12,12,0,1,1,12,12A12,12,0,0,1,112,84Z"></path>
  </svg>
);

const notificationIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="currentColor"
    viewBox="0 0 256 256"
  >
    <path d="M221.8,175.94C216.25,166.38,208,139.33,208,104a80,80,0,1,0-160,0c0,35.34-8.26,62.38-13.81,71.94A16,16,0,0,0,48,200H88.81a40,40,0,0,0,78.38,0H208a16,16,0,0,0,13.8-24.06ZM128,216a24,24,0,0,1-22.62-16h45.24A24,24,0,0,1,128,216ZM48,184c7.7-13.24,16-43.92,16-80a64,64,0,1,1,128,0c0,36.05,8.28,66.73,16,80Z"></path>
  </svg>
);

const postDetail = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="currentColor"
    viewBox="0 0 256 256"
    className="h-4 w-4"
  >
    <path d="M176,56H80a72,72,0,0,0,0,144h96a72,72,0,0,0,0-144Zm0,128H80A56,56,0,0,1,80,72h96a56,56,0,0,1,0,112ZM80,88a40,40,0,1,0,40,40A40,40,0,0,0,80,88Zm0,64a24,24,0,1,1,24-24A24,24,0,0,1,80,152Z"></path>
  </svg>
);

const idea = (
  <svg
    aria-hidden="true"
    focusable="false"
    role="img"
    className="text-yellow8"
    viewBox="0 0 16 16"
    width="16"
    height="16"
    fill="currentColor"
    style={{
      display: "inline-block",
      userSelect: "none",
      verticalAlign: "text-bottom",
      overflow: "visible",
    }}
  >
    <path d="M8 1.5c-2.363 0-4 1.69-4 3.75 0 .984.424 1.625.984 2.304l.214.253c.223.264.47.556.673.848.284.411.537.896.621 1.49a.75.75 0 0 1-1.484.211c-.04-.282-.163-.547-.37-.847a8.456 8.456 0 0 0-.542-.68c-.084-.1-.173-.205-.268-.32C3.201 7.75 2.5 6.766 2.5 5.25 2.5 2.31 4.863 0 8 0s5.5 2.31 5.5 5.25c0 1.516-.701 2.5-1.328 3.259-.095.115-.184.22-.268.319-.207.245-.383.453-.541.681-.208.3-.33.565-.37.847a.751.751 0 0 1-1.485-.212c.084-.593.337-1.078.621-1.489.203-.292.45-.584.673-.848.075-.088.147-.173.213-.253.561-.679.985-1.32.985-2.304 0-2.06-1.637-3.75-4-3.75ZM5.75 12h4.5a.75.75 0 0 1 0 1.5h-4.5a.75.75 0 0 1 0-1.5ZM6 15.25a.75.75 0 0 1 .75-.75h2.5a.75.75 0 0 1 0 1.5h-2.5a.75.75 0 0 1-.75-.75Z"></path>
  </svg>
);

const copyLink = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="currentColor"
    viewBox="0 0 256 256"
  >
    <path d="M216,32H88a8,8,0,0,0-8,8V80H40a8,8,0,0,0-8,8V216a8,8,0,0,0,8,8H168a8,8,0,0,0,8-8V176h40a8,8,0,0,0,8-8V40A8,8,0,0,0,216,32ZM160,208H48V96H160Zm48-48H176V88a8,8,0,0,0-8-8H96V48H208Z"></path>
  </svg>
);

const accordionData = [
  { title: "Rename posts statuses on featureOS", url: "https://google.com" },
  { title: "Rename modules on featureOS", url: "" },
  { title: "Implementing changelog as a widget - v2", url: "" },
];
/**
 * Modal component renders a modal window with dynamic content such as status, board information, comments,
 * and an accordion for related articles. It also allows users to subscribe to post notifications.
 *
 * @param {Object} props - The properties to customize the modal.
 * @param {Object} props.modalData - The data to display within the modal, such as status, comments, board info, etc.
 *
 * @example
 * return (
 *   <Modal modalData={modalData} />
 * )
 *
 * @returns {JSX.Element} The rendered Modal component.
 */
export function Modal({ modalData }) {
  const { closeModal, isOpen } = useContext(Modalcontext);
  return (
    <div>
      {isOpen && (
        <div
          className={`fixed inset-0 flex justify-center items-center z-50 transition duration-500`}
          onClick={closeModal}
          style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
        >
          <div
            className={`bg-white rounded-lg w-full max-w-fit mx-4 [&>*]:p-2 flex flex-col gap-2 max-h-[85vh] overflow-y-auto`}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between border-b border-gray-200">
              <Minibtniconwrapper icon={leftArrow} />
              <div className="flex gap-2">
                <Minibtniconwrapper icon={copy} />
                <Minibtniconwrapper icon={redirect} />
              </div>
            </div>
            <div className="flex gap-10">
              <div className="w-full sm:w-[70%] flex gap-10 flex-col">
                <Modaltitle title={modalData} />
                <Accordion data={accordionData} />
                {modalData?.comments &&
                  modalData?.comments?.map((item, index) => (
                    <Replybox key={index} comment={item} />
                  ))}
              </div>
              <div className="w-[30%] hidden sm:flex flex-col gap-4">
                <Informationcard icon={info} title={"Post Information"}>
                  <div className="flex flex-col gap-4">
                    <div>
                      <h1 className="font-bold ">Subscribe to post</h1>
                      <p className="text-xs text-gray-500">
                        Get notified by email when there are changes.
                      </p>
                    </div>
                    <div>
                      <Button
                        title={"Get Notified"}
                        bgColor={"hsl(241.379 100.000% 65.882%)"}
                        isBorder={"White"}
                        icon={notificationIcon}
                      />
                    </div>
                  </div>
                </Informationcard>
                <Informationcard icon={postDetail} title={"Post Detail"}>
                  <div className="[&>*]:mt-4 -mt-5">
                    {modalData.status.title && (
                      <div className="grid grid-cols-5 items-center gap-4 px-4">
                        <span className="text-sm col-span-2 font-medium">
                          Status
                        </span>
                        <span className="col-span-3">
                          <span
                            style={{ color: modalData.status.color }}
                            className="flex min-w-[12%] max-w-[100%] items-center justify-start space-x-0.5 whitespace-nowrap text-sm font-semibold text-green11"
                          >
                            <div
                              style={{
                                background: modalData.status.color,
                                mask: 'url("https://assets.production.skcript.com/featureos/app-assets/icons/bold/flag-checkered-bold.svg") center center / contain no-repeat',
                                height: "14px",
                                width: "14px",
                              }}
                            ></div>
                            <span className="truncate">
                              {modalData && modalData.status.title}
                            </span>
                          </span>
                        </span>
                      </div>
                    )}

                    {modalData.board.title && (
                      <div className="grid grid-cols-5 items-center gap-4 px-4">
                        <span className="text-sm col-span-2 font-medium">
                          Board
                        </span>
                        <span className="col-span-3">
                          <a
                            target="_self"
                            className="hn-animate-duration inline-flex items-center text-primary9 font-medium hover:text-primary focus:outline-none focus-visible:rounded focus-visible:ring focus-visible:ring-primary focus-visible:ring-offset-2"
                            href="/b/feature-requests"
                          >
                            <div className="flex items-center space-x-2 text-gray12">
                              <span className="text-sm font-medium !text-gray12">
                                {modalData && modalData.board.title}
                              </span>
                            </div>
                          </a>
                        </span>
                      </div>
                    )}

                    {modalData?.postedOn && (
                      <div className="grid grid-cols-5 items-center gap-4 px-4 empty:hidden">
                        <span className="text-sm col-span-2 font-medium">
                          Posted on
                        </span>
                        <span className="col-span-3">
                          <button data-state="closed" className="">
                            <div>
                              <span className="text-sm font-medium !text-gray12 dark:!text-gray-light">
                                {modalData && modalData.postedOn.date}
                              </span>
                            </div>
                          </button>
                        </span>
                      </div>
                    )}
                    {modalData?.postedBy?.name && (
                      <div className="grid grid-cols-5 items-center gap-4 px-4 empty:hidden">
                        <span className="text-sm col-span-2 font-medium">
                          Posted by
                        </span>
                        <span className="col-span-3 flex items-center space-x-2">
                          <div data-state="closed" className="">
                            <div className="flex items-center space-x-2">
                              <span className="Avatar_hnui-avatar__lX4qy Avatar_hnui-avatar-rounded__YplfT Avatar_hnui-avatar--xs__Iz7Gy">
                                <img
                                  className="Avatar_hnui-avatar-img__vUsxk rounded-full"
                                  alt="Swathy"
                                  height="24"
                                  width="24"
                                  src="https://vault.featureos.app/uploads/user/profile_picture/4428715/thumb_c42c2e57a3ee181bf3b719335025612f"
                                />
                              </span>
                            </div>
                          </div>
                          <div
                            data-state="closed"
                            className="truncate cursor-default"
                          >
                            <span className="text-sm truncate font-medium !text-gray12 dark:!text-gray-light">
                              {modalData && modalData.postedBy.name}
                            </span>
                          </div>
                        </span>
                      </div>
                    )}
                  </div>
                </Informationcard>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

/**
 * Accordion component renders a collapsible section that can toggle visibility of its content.
 * It displays a list of articles with titles, and each article has a button to copy its URL to the clipboard.
 *
 * @param {Object} props - The properties to customize the accordion.
 * @param {Array} props.data - The list of article data to be displayed in the accordion. Each article has a `title` and `url`.
 *
 * @example
 * return (
 *   <Accordion data={accordionData} />
 * )
 *
 * @returns {JSX.Element} The rendered Accordion component.
 */
export function Accordion({ data }) {
  const [toggle, setToggle] = React.useState(false);
  return (
    <div
      className={`border border-gray-200 rounded-lg transition-all duration-300 ${
        toggle ? "pb-3" : "pb-0"
      }`}
    >
      <div
        className={`p-3 text-sm justify-between flex gap-2 cursor-pointer transition-colors hover:bg-gray-50 ${
          toggle ? "border-b border-b-gray-200" : ""
        }`}
        onClick={() => setToggle(!toggle)}
      >
        <div className="flex gap-2">
          {idea}
          <h1 className="font-medium">Articles that might Help you</h1>
        </div>
        <span>{dropArrow}</span>
      </div>
      {data &&
        data?.map((node, index) => {
          return (
            <div
              key={index}
              className={`wrapper_of_accordionitems overflow-hidden transition-all duration-300 ease-in-out ${
                toggle
                  ? "max-h-[1000px] opacity-100 mt-3"
                  : "max-h-0 opacity-0 mt-0"
              }`}
              style={{
                transform: toggle ? "translateY(0)" : "translateY(-10px)",
                transitionProperty: "max-height, opacity, transform, margin",
                transitionDuration: "300ms, 200ms, 200ms, 200ms",
                transitionTimingFunction: "ease-in-out",
              }}
            >
              <div className="px-3">
                <div className="p-2 items-center border rounded-md border-gray-200 justify-between flex text-sm">
                  <div className="flex gap-2">
                    <h1 className="">{node?.title}</h1>
                  </div>
                  <button
                    onClick={() => {
                      navigator.clipboard.writeText(node.url);
                    }}
                    className="border flex items-center gap-1 cursor-pointer border-gray-200 rounded-md text-xs py-1 px-2 transition-colors hover:bg-gray-50"
                  >
                    {copyLink}Copy Link
                  </button>
                </div>
              </div>
            </div>
          );
        })}
    </div>
  );
}

/**
 * Modaltitle component renders a section displaying a title with a number and a description.
 * It includes an icon that rotates and a brief explanation about the context of the title.
 *
 * @param {Object} props - The properties to customize the modal title.
 * @param {Object} props.title - The title data to be displayed in the modal.
 * @param {number} props.title.sno - The serial number or ID associated with the title.
 * @param {string} props.title.title - The main title text to be displayed.
 *
 * @example
 * return (
 *   <Modaltitle title={{ sno: 1, title: 'Modal Title' }} />
 * )
 *
 * @returns {JSX.Element} The rendered Modaltitle component.
 */
export function Modaltitle({ title }) {
  return (
    <div className="flex gap-2 justify-center">
      <div className="text-xs border-2 h-[60%] justify-center w-10 items-center flex flex-col border-gray-200 rounded-md cursor-pointer">
        <div style={{ transform: "rotate(180deg)" }}>{dropArrow}</div>
        <h1>{title.sno}</h1>
      </div>
      <div className="flex flex-col gap-2">
        <h1 className="text-lg font-bold">{title.title}</h1>
        <p className="text-sm ">
          To provide better context for team members, translate the AI-generated
          summary into the default language set.
        </p>
      </div>
    </div>
  );
}
/**
 * Informationcard component renders a card-like section with a title, an optional icon,
 * and any children content passed to it. The component can be used to display various
 * information in a styled container.
 *
 * @param {Object} props - The properties to customize the information card.
 * @param {string} props.title - The title text to display in the card.
 * @param {JSX.Element} [props.icon] - The optional icon to display next to the title.
 * @param {JSX.Element} [props.children] - The children elements to be displayed inside the card.
 *
 * @example
 * return (
 *   <Informationcard title="Post Information" icon={infoIcon}>
 *     <div>Additional details can go here.</div>
 *   </Informationcard>
 * )
 *
 * @returns {JSX.Element} The rendered Informationcard component.
 */
export function Informationcard({ children, title, icon }) {
  return (
    <div>
      <div
        className="border-b border-b-gray-200 p-4 flex flex-col gap-8 rounded-lg"
        style={{ backgroundColor: "hsl(0 0% 97.3%/1)" }}
      >
        <div className="items-center flex gap-1">
          {icon && icon}
          <p className="text-sm">{title && title}</p>
        </div>
        {children && children}
      </div>
    </div>
  );
}

/**
 * Minibtniconwrapper component renders a button with an optional icon.
 * The button can trigger a callback function when clicked.
 *
 * @param {Object} props - The properties to customize the mini button.
 * @param {JSX.Element} props.icon - The icon to display inside the button.
 * @param {function} [props.callBackFunction] - The optional callback function to execute when the button is clicked.
 *
 * @example
 * return (
 *   <Minibtniconwrapper icon={someIcon} callBackFunction={handleClick} />
 * )
 *
 * @returns {JSX.Element} The rendered Minibtniconwrapper component.
 */
export function Minibtniconwrapper({ icon, callBackFunction }) {
  return (
    <button
      onClick={callBackFunction}
      className="border cursor-pointer border-gray-300 p-1 rounded-lg"
    >
      {icon && icon}
    </button>
  );
}
/**
 * Replybox component displays a comment with user information, message content,
 * and a text input for a reply. It is typically used to show a comment and allow
 * the user to reply to it.
 *
 * @param {Object} props - The properties to customize the reply box.
 * @param {Object} props.comment - The comment data to display in the reply box.
 * @param {string} props.comment.userName - The name of the user who posted the comment.
 * @param {string} props.comment.createdAt - The date when the comment was posted.
 * @param {Object} props.comment.replyMsg - The reply message object.
 * @param {string} props.comment.replyMsg.content - The content of the comment's reply message.
 *
 * =========More Props from API=========
 *
 * @example
 * return (
 *   <Replybox
 *     comment={{
 *       userName: "Alexa Adkins",
 *       createdAt: "2025-03-12",
 *       replyMsg: { content: "This is a reply." }
 *     }}
 *   />
 * )
 *
 * @returns {JSX.Element} The rendered Replybox component.
 */
export function Replybox({ comment }) {
  return (
    <div className=" text-sm">
      {comment && (
        <div className="max-w-2xl  bg-white border border-gray-200  rounded-lg ">
          <div className="p-4 flex items-start space-x-4 mb-4">
            <img
              alt="Profile picture of Alexa Adkins"
              className="w-12 h-12 rounded-full"
              height="50"
              src="https://placehold.co/50x50"
              width="50"
            />
            <div className="flex-1">
              <div className="flex items-center space-x-2">
                <h4 className="font-semibold">{comment?.userName}</h4>
                <span className="text-gray-500 text-xs">
                  {comment?.createdAt}
                </span>
              </div>
              <p className="mt-2 text-gray-700">{comment?.replyMsg?.content}</p>
            </div>
          </div>
          <div className="p-4 mt-4 border-t border-t-gray-200">
            <input
              className="w-full p-2 border border-gray-300 rounded-lg"
              placeholder="Write your reply"
              type="text"
            />
          </div>
        </div>
      )}
    </div>
  );
}

/**
 * Minimodal component renders a modal that can be opened or closed.
 * It is typically used to display additional content in a dialog-like interface.
 *
 * @param {Object} props - The properties to customize the modal.
 * @param {boolean} props.isOpen - A boolean to control if the modal is open or not.
 * @param {function} props.setIsClicked - A function to set the modal's open/close state.
 * @param {JSX.Element} props.children - The content to be displayed inside the modal.
 *
 * @example
 * return (
 *   <Minimodal isOpen={isOpen} setIsClicked={setIsOpen}>
 *     <div>Modal content goes here</div>
 *   </Minimodal>
 * )
 *
 * @returns {JSX.Element} The rendered Minimodal component.
 */
export function Minimodal({ isOpen, setIsClicked, children }) {
  return (
    <React.Fragment>
      {isOpen && (
        <div
          className={`fixed inset-0 flex justify-center items-center z-50 transition duration-500`}
          onClick={() => setIsClicked(false)}
          style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
        >
          <div
            className={` rounded-lg w-full max-w-fit mx-4 [&>*]:p-2 flex flex-col gap-2 max-h-[85vh] overflow-y-auto`}
            onClick={(e) => e.stopPropagation()}
          >
            {children}
          </div>
        </div>
      )}
    </React.Fragment>
  );
}
