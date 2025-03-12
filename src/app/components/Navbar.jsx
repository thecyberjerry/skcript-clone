import Image from "next/image";
import React from "react";

/**
 * Navbar component renders a navigation bar with a logo, 
 * and buttons for authentication actions (Sign In and Sign Up) [Dummy].
 * It uses the Button component to render the authentication buttons.
 * 
 * @component
 * @example
 * return (
 *   <Navbar />
 * )
 * 
 * @returns {JSX.Element} The rendered Navbar component.
 */
export default function Navbar() {
  return (
    <div className="flex justify-between">
      <div className="flex items-center gap-1">
        <Image
          width={32}
          height={32}
          src={
            "https://vault.featureos.app/uploads/organization/avatar/2/thumb_c228cdf3e507e4c7c3ad86a10c80f14a.png"
          }
          alt="Logo"
        />
        <p className="font-bold">FeatureOS</p>
      </div>
      <div className="flex gap-2">
        <Button title={"Sign in"} />
        <Button
          title={"Sign Up"}
          bgColor={"hsl(241.379 100.000% 65.882%)"}
          isBorder={"White"}
        />
      </div>
    </div>
  );
}

/**
 * Button component renders a customizable button that can include a title, background color, 
 * border style, and an optional icon. It is used in the Navbar component to display authentication buttons.
 *
 * @param {Object} props - The properties to customize the button.
 * @param {string} props.title - The text to display on the button.
 * @param {string} [props.bgColor] - The background color of the button (default is transparent).
 * @param {string} [props.isBorder] - The color of the button's border (default is gray).
 * @param {JSX.Element} [props.icon] - The optional icon to display next to the button title.
 *
 * @example
 * return (
 *   <Button title="Sign In" />
 * )
 *
 * @returns {JSX.Element} The rendered Button component.
 */
export function Button({ title, bgColor, isBorder, icon }) {
  return (
    <button
      className={`px-3 gap-1 h-[29px] hover:cursor-pointer rounded-md text-xs flex items-center justify-center whitespace-nowrap ${
        !isBorder && "border-[0.1px] border-gray-300"
      }`}
      style={{ backgroundColor: bgColor, color: isBorder ? isBorder : "black" }}
    >
      {icon && icon}
      {title && title}
    </button>
  );
}
