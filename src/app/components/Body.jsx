"use client";
import React, { createContext, useContext } from "react";
import { dropArrow, Sublist } from "./Subnav";
import { Bodydata } from "../page";
import { Minimodal, Modal } from "./Modal";
import { DndProvider, useDrag, useDrop } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
const tag = (
  <span className="">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      fill="currentColor"
      viewBox="0 0 256 256"
    >
      <path d="M243.31,136,144,36.69A15.86,15.86,0,0,0,132.69,32H40a8,8,0,0,0-8,8v92.69A15.86,15.86,0,0,0,36.69,144L136,243.31a16,16,0,0,0,22.63,0l84.68-84.68a16,16,0,0,0,0-22.63ZM84,96A12,12,0,1,1,96,84,12,12,0,0,1,84,96Z"></path>
    </svg>
  </span>
);
export const ItemTypes = {
  CARD: "card",
};

/**
 * Body component serves as the main container for rendering the modal and list of cards for different statuses
 * (planned, in-progress, and completed). It manages the modal's open/close state and provides data context to
 * the Modal component via `Modalcontext`.
 *
 * @returns {JSX.Element} The rendered Body component containing Modal, Title, and status cards.
 *
 * @example
 * return <Body />
 */
export const Modalcontext = createContext();
export default function Body() {
  const [isOpen, setIsOpen] = React.useState(false);
  const [modalData, setModalData] = React.useState("");
  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);
  const { planned, inProgress, completed, listData } = useContext(Bodydata);
  return (
    <React.Fragment>
      <Modalcontext.Provider
        value={{ openModal, setIsOpen, isOpen, closeModal, setModalData }}
      >
        <Modal modalData={modalData} />
        <Titleofbody list={listData} />
        <div className="flex justify-between gap-4 overflow-x-auto overflow-y-hidden">
          <DndProvider backend={HTML5Backend}>
            {planned && <Plancard data={planned} />}
            {inProgress && <Plancard data={inProgress} />}
            {completed && <Plancard data={completed} />}
          </DndProvider>
        </div>
      </Modalcontext.Provider>
    </React.Fragment>
  );
}

/**
 * Plancard component is used to display cards within a specific status section (planned, in-progress, or completed).
 * It also supports drag-and-drop functionality for adding new cards to the list.
 *
 * @param {Object} data - The data to render the card list, including status, logo, and list of cards.
 * @param {Array} data.dataList - The list of cards to be displayed inside the plan card.
 * @param {Object} data.status - The status object that includes title and color for the status section.
 * @param {Object} data.logo - Optional logo for the status section.
 *
 * @returns {JSX.Element} The rendered Plan Card component with a list of cards.
 *
 * @example
 * return <Plancard data={planned} />
 */

export function Plancard({ data }) {
  const [cardData, setCardData] = React.useState(data?.dataList);
  const [, drop] = useDrop(() => ({
    accept: ItemTypes.CARD,
    drop: (item) => setCardData((prev) => [...prev, item.card]),
  }));
  return (
    <div
      ref={drop}
      className="mt-10 max-h-[78vh] overflow-y-auto max-w-[330px] min-w-[330px] border border-gray-200 rounded-md bg-[#f8f8f8]"
    >
      <div
        className="flex items-center gap-1 text-sm font-bold border-b-gray-200 p-2 border-b-2"
        style={{ color: data?.status?.color }}
      >
        {data && data?.logo && <div style={data?.logo?.style}></div>}
        {data && data?.status?.title}
      </div>
      <div className="p-2">
        {cardData &&
          cardData.map((item, index) => <Singlecard card={item} key={index} />)}
      </div>
    </div>
  );
}
/**
 * Titleofbody component displays the title and description of the body section along with a tag and a dropdown
 * for showing a list. It serves as a header for the roadmap section.
 *
 * @param {Object} props - The properties for the Titleofbody component.
 * @param {Array} props.list - The list to be shown in the Dropdown component.
 *
 * @returns {JSX.Element} The rendered Titleofbody component.
 *
 * @example
 * return <Titleofbody list={listData} />
 */
export function Titleofbody({ list }) {
  return (
    <div className={`flex justify-between`}>
      <div className="flex flex-col gap-2">
        <h1 className={`text-xl font-bold`}>Roadmaps</h1>
        <p className={`text-sm`}>
          Stay connected with our development journey and get a sneak peek at
          upcoming features! 😉
        </p>
      </div>
      <div className={`flex gap-4 items-center`}>
        <div className={`border-2 border-gray-200 py-2 px-3 rounded-xl`}>
          {tag}
        </div>
        <Dropdown title={"Show all"} list={list} />
        <div></div>
      </div>
    </div>
  );
}

/**
 * Dropdown component provides a button that displays a list of items when clicked.
 * It can show the list as a modal (on small screens) or inline (on large screens).
 *
 * @param {Object} props - The properties for the Dropdown component.
 * @param {string} props.title - The title of the dropdown button.
 * @param {Array} props.list - The list of items to be displayed in the dropdown.
 *
 * @returns {JSX.Element} The rendered Dropdown component.
 *
 * @example
 * return <Dropdown title="Show all" list={listData} />
 */
export function Dropdown({ title, list }) {
  const [isClicked, setIsClicked] = React.useState(false);
  return (
    <div
      onClick={() => setIsClicked(!isClicked)}
      className="border-2 select-none border-gray-200 rounded-2xl p-2 whitespace-nowrap w-fit flex text-xs gap-2 items-center cursor-pointer relative"
    >
      <p>{title}</p>
      {dropArrow}
      <section className="md:hidden block">
        <Minimodal isOpen={isClicked} setIsClicked={setIsClicked}>
          <Sublist list={list} />
        </Minimodal>
      </section>
      <section className="hidden md:flex">
        {isClicked && list && (
          <Sublist
            list={list}
            additonalClasses={"absolute top-8 -left-5 z-40"}
          />
        )}
      </section>
    </div>
  );
}

/**
 * Singlecard component renders an individual card within the plan card. It includes the card's title and type
 * and supports the drag-and-drop functionality.
 *
 * @param {Object} props - The properties for the Singlecard component.
 * @param {Object} props.card - The card object containing data to be displayed in the card.
 * @param {string} props.card.sno - The serial number of the card.
 * @param {string} props.card.title - The title of the card.
 * @param {string} props.card.type - The type content of the card.
 *
 * @returns {JSX.Element} The rendered Singlecard component.
 *
 * @example
 * return <Singlecard card={cardData} />
 */
export function Singlecard({ card }) {
  const { openModal, setModalData } = useContext(Modalcontext);
  const [, drag] = useDrag(() => ({
    type: ItemTypes.CARD,
    item: { card },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));
  return (
    <div
      ref={drag}
      className="flex gap-2 border-2 bg-white p-2 rounded-md border-gray-200 mt-2"
    >
      <div>
        <div
          onClick={() => {
            openModal();
            setModalData(card);
          }}
          className="text-xs border-2 h-[60%] justify-center w-10 items-center flex flex-col border-gray-200 rounded-md cursor-pointer"
        >
          <div style={{ transform: "rotate(180deg)" }}>{dropArrow}</div>
          <h1>{card?.sno}</h1>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <p className="text-xs font-semibold ">{card?.title}</p>
        <div
          onClick={() => {
            openModal();
            setModalData(card);
          }}
          className="cursor-pointer border-2 border-gray-200 text-gray-500 rounded-md px-2 py-[1px] text-[10px] w-fit"
        >
          {card?.type}
        </div>
      </div>
    </div>
  );
}
