"use client";
import React from "react";

const board = (
  <svg
    aria-hidden="true"
    focusable="false"
    role="img"
    className="flex h-4 w-4 shrink-0 items-center opacity-60 group-hover:opacity-100 group-hover:fill-[#5C1BFF]"
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
    <path d="M16 10.75v2.5A1.75 1.75 0 0 1 14.25 15H1.75A1.75 1.75 0 0 1 0 13.25v-2.5C0 9.784.784 9 1.75 9h12.5c.966 0 1.75.784 1.75 1.75Zm0-8v2.5A1.75 1.75 0 0 1 14.25 7H1.75A1.75 1.75 0 0 1 0 5.25v-2.5C0 1.784.784 1 1.75 1h12.5c.966 0 1.75.784 1.75 1.75Zm-1.75-.25H1.75a.25.25 0 0 0-.25.25v2.5c0 .138.112.25.25.25h12.5a.25.25 0 0 0 .25-.25v-2.5a.25.25 0 0 0-.25-.25Zm0 8H1.75a.25.25 0 0 0-.25.25v2.5c0 .138.112.25.25.25h12.5a.25.25 0 0 0 .25-.25v-2.5a.25.25 0 0 0-.25-.25Z"></path>
  </svg>
);

export const dropArrow = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="currentColor"
    viewBox="0 0 256 256"
  >
    <path d="M213.66,101.66l-80,80a8,8,0,0,1-11.32,0l-80-80A8,8,0,0,1,53.66,90.34L128,164.69l74.34-74.35a8,8,0,0,1,11.32,11.32Z"></path>
  </svg>
);

const teleScope = (
  <svg
    aria-hidden="true"
    focusable="false"
    role="img"
    className="flex h-4 w-4 shrink-0 items-center opacity-60 group-hover:opacity-100 group-hover:fill-[#5C1BFF]"
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
    <path d="M14.184 1.143v-.001l1.422 2.464a1.75 1.75 0 0 1-.757 2.451L3.104 11.713a1.75 1.75 0 0 1-2.275-.702l-.447-.775a1.75 1.75 0 0 1 .53-2.32L11.682.573a1.748 1.748 0 0 1 2.502.57Zm-4.709 9.32h-.001l2.644 3.863a.75.75 0 1 1-1.238.848l-1.881-2.75v2.826a.75.75 0 0 1-1.5 0v-2.826l-1.881 2.75a.75.75 0 1 1-1.238-.848l2.049-2.992a.746.746 0 0 1 .293-.253l1.809-.87a.749.749 0 0 1 .944.252ZM9.436 3.92h-.001l-4.97 3.39.942 1.63 5.42-2.61Zm3.091-2.108h.001l-1.85 1.26 1.505 2.605 2.016-.97a.247.247 0 0 0 .13-.151.247.247 0 0 0-.022-.199l-1.422-2.464a.253.253 0 0 0-.161-.119.254.254 0 0 0-.197.038ZM1.756 9.157a.25.25 0 0 0-.075.33l.447.775a.25.25 0 0 0 .325.1l1.598-.769-.83-1.436-1.465 1Z"></path>
  </svg>
);

const changeLog = (
  <svg
    aria-hidden="true"
    focusable="false"
    role="img"
    className="flex h-4 w-4 shrink-0 items-center opacity-60 group-hover:opacity-100 group-hover:fill-[#5C1BFF]"
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
    <path d="M14.064 0h.186C15.216 0 16 .784 16 1.75v.186a8.752 8.752 0 0 1-2.564 6.186l-.458.459c-.314.314-.641.616-.979.904v3.207c0 .608-.315 1.172-.833 1.49l-2.774 1.707a.749.749 0 0 1-1.11-.418l-.954-3.102a1.214 1.214 0 0 1-.145-.125L3.754 9.816a1.218 1.218 0 0 1-.124-.145L.528 8.717a.749.749 0 0 1-.418-1.11l1.71-2.774A1.748 1.748 0 0 1 3.31 4h3.204c.288-.338.59-.665.904-.979l.459-.458A8.749 8.749 0 0 1 14.064 0ZM8.938 3.623h-.002l-.458.458c-.76.76-1.437 1.598-2.02 2.5l-1.5 2.317 2.143 2.143 2.317-1.5c.902-.583 1.74-1.26 2.499-2.02l.459-.458a7.25 7.25 0 0 0 2.123-5.127V1.75a.25.25 0 0 0-.25-.25h-.186a7.249 7.249 0 0 0-5.125 2.123ZM3.56 14.56c-.732.732-2.334 1.045-3.005 1.148a.234.234 0 0 1-.201-.064.234.234 0 0 1-.064-.201c.103-.671.416-2.273 1.15-3.003a1.502 1.502 0 1 1 2.12 2.12Zm6.94-3.935c-.088.06-.177.118-.266.175l-2.35 1.521.548 1.783 1.949-1.2a.25.25 0 0 0 .119-.213ZM3.678 8.116 5.2 5.766c.058-.09.117-.178.176-.266H3.309a.25.25 0 0 0-.213.119l-1.2 1.95ZM12 5a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"></path>
  </svg>
);

const knowledgeBase = (
  <svg
    aria-hidden="true"
    focusable="false"
    role="img"
    className="flex h-4 w-4 shrink-0 items-center opacity-60 group-hover:opacity-100 group-hover:fill-[#5C1BFF]"
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
    <path d="M2 2.5A2.5 2.5 0 0 1 4.5 0h8.75a.75.75 0 0 1 .75.75v12.5a.75.75 0 0 1-.75.75h-2.5a.75.75 0 0 1 0-1.5h1.75v-2h-8a1 1 0 0 0-.714 1.7.75.75 0 1 1-1.072 1.05A2.495 2.495 0 0 1 2 11.5Zm10.5-1h-8a1 1 0 0 0-1 1v6.708A2.486 2.486 0 0 1 4.5 9h8ZM5 12.25a.25.25 0 0 1 .25-.25h3.5a.25.25 0 0 1 .25.25v3.25a.25.25 0 0 1-.4.2l-1.45-1.087a.249.249 0 0 0-.3 0L5.4 15.7a.25.25 0 0 1-.4-.2Z"></path>
  </svg>
);

const dropdownData = [
  {
    icon: board,
    title: "Boards",
    isSubmenu: true,
    subMenuContent: {
      icon: dropArrow,
      list: [
        { title: "All Boards", url: "" },
        { title: "Feature Request", url: "" },
        { title: "Integration", url: "" },
        { title: "Bug Fixes", url: "" },
        { title: "Support", url: "" },
      ],
    },
  },
  {
    icon: teleScope,
    title: "Roadmap",
    isSubmenu: false,
  },
  {
    icon: changeLog,
    title: "ChangeLog",
    isSubmenu: false,
  },
  {
    icon: knowledgeBase,
    title: "KnowledgeBase",
    isSubmenu: false,
  },
];
/**
 * Subnav Component that renders a navigation bar with dynamic dropdowns.
 * It uses React Context to pass data down the component tree and manages the state of each dropdown.
 *
 * @returns {JSX.Element} - The rendered Subnav component with dropdown navigation.
 */
export default function Subnav() {
  const [isClicked, setIsClicked] = React.useState(false);
  return (
    <div className="relative">
      <div
        className={`flex gap-4  ${
          isClicked ? "overflow-hidden" : "overflow-x-auto"
        } scrollbar-hide`}
      >
          {dropdownData.map((data, index) => (
            <Customdropdown
              key={index}
              icon={data.icon}
              title={data.title}
              isSubmenu={data.isSubmenu}
              subMenuContent={data.subMenuContent}
              isClicked={isClicked}
              setIsClicked={setIsClicked}
            />
          ))}
      </div>
    </div>
  );
}

/**
 * Customdropdown Component that represents a single dropdown item within the navigation bar.
 * It handles the rendering of the icon, title, and any submenus if applicable.
 *
 * @param {string} title - The title of the dropdown.
 * @param {JSX.Element} icon - The icon to be displayed next to the title.
 * @param {boolean} isSubmenu - Whether the dropdown has a submenu.
 * @param {Object} subMenuContent - Contains data for the submenu such as icon and list.
 * @param {boolean} isClicked - Whether the dropdown is clicked or not.
 * @param {Function} setIsClicked - Function to toggle the dropdown state.
 * @returns {JSX.Element} - The rendered Customdropdown component with its content.
 */
export function Customdropdown({
  title,
  icon,
  isSubmenu,
  subMenuContent,
  isClicked,
  setIsClicked,
}) {
  return (
    <div
      onClick={() => setIsClicked(!isClicked)}
      className="group flex items-center gap-2  cursor-pointer  select-none mt-5 "
    >
      <div className="group-hover:fill-[#5C1BFF]">{icon && icon}</div>
      <p className="font-medium text-[10px] uppercase group-hover:text-[#5C1BFF]">
        {title && title}
      </p>
      {isSubmenu && subMenuContent?.icon}
      {isClicked && isSubmenu && subMenuContent?.list && (
        <Sublist
          list={subMenuContent?.list}
          additonalClasses={"absolute top-8 -left-5 z-40"}
        />
      )}
    </div>
  );
}

/**
 * Sublist Component that renders the list of submenu items for a dropdown.
 * It displays the items in a scrollable list format.
 *
 * @param {Array} list - The list of submenu items to be displayed.
 * @param {string} additonalClasses - Additional CSS classes to be applied to the container.
 * @returns {JSX.Element} - The rendered Sublist component with the submenu items.
 */
export function Sublist({ list, additonalClasses }) {
  return (
    <div className={`p-4 text-sm ${additonalClasses} `}>
      <ul className="bg-white shadow-lg rounded-md p-1 w-[180px] border border-gray-200 ">
        {list?.map((node, index) => (
          <li
            key={index}
            className={`${
              node.disabled && "text-gray-500 hover:bg-white"
            } px-4 py-2 text-left text-black hover:bg-gray-100 rounded-md cursor-pointer transition duration-200 ease-in-out`}
          >
            {node?.title}
          </li>
        ))}
      </ul>
    </div>
  );
}
