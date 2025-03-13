"use client";
import Image from "next/image";
import React from "react";
import { useSession, signIn, signOut } from "next-auth/react";
import { Minimodal } from "./Modal";
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
  const { data, status } = useSession();
  const [isMiniModal, setIsMiniModal] = React.useState(false);
  return (
    <div className="flex justify-between">
      <div className="flex items-center gap-1">
        <Minimodal isOpen={isMiniModal} setIsClicked={setIsMiniModal}>
          <div className="flex items-center justify-center bg-gray-100 text-xs">
            <div className="p-6 rounded-lg w-80">
              <div className="flex justify-between items-center mb-4">
                <h2 className=" font-semibold">Sign in / Sign up</h2>
                <button
                  onClick={() => setIsMiniModal(false)}
                  className="text-gray-500 hover:text-gray-700 cursor-pointer"
                >
                  X
                </button>
              </div>
              <button
                onClick={() => signIn("google")}
                className="cursor-pointer w-full py-2 mb-2 border border-gray-300 rounded-lg font-medium text-gray-700 hover:bg-gray-100 flex items-center justify-center"
              >
                <img
                  alt="Google logo"
                  className="mr-2"
                  height="20"
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/1200px-Google_%22G%22_logo.svg.png"
                  width="20"
                />
                Continue with Google
              </button>
              <button
                onClick={() => signIn("github")}
                className="cursor-pointer w-full py-2 mb-2 border border-gray-300 rounded-lg font-medium text-gray-700 hover:bg-gray-100 flex items-center justify-center"
              >
                <img
                  alt="Google logo"
                  className="mr-2"
                  height="20"
                  src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
                  width="20"
                />
                Continue with GitHub
              </button>
            </div>
          </div>
        </Minimodal>
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
      <div className="flex gap-2 items-center">
        {status === "authenticated" &&
        data &&
        data?.user &&
        data?.user?.email ? (
          data?.user?.name ? (
            <div className="flex items-center gap-2">
              {data?.user?.image && (
                <img
                  src={data?.user?.image}
                  width={30}
                  className="rounded-full"
                />
              )}
              <span className="cursor-pointer">{data?.user?.name}</span>
            </div>
          ) : (
            <div>
              <img src={data?.user?.image} />
              {data?.user?.email.split("@")[0]}
            </div>
          )
        ) : (
          <Button title={"Sign in"} callBackFunc={() => setIsMiniModal(true)} />
        )}
        {status === "authenticated" && data && data?.user && (
          <Button
            title={"Sign Out"}
            bgColor={"hsl(241.379 100.000% 65.882%)"}
            isBorder={"White"}
            callBackFunc={signOut}
          />
        )}
        {status === "unauthenticated" && (
          <Button
            title={"Sign Up"}
            bgColor={"hsl(241.379 100.000% 65.882%)"}
            isBorder={"White"}
            callBackFunc={() => setIsMiniModal(true)}
          />
        )}
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

export function Button({ title, bgColor, isBorder, icon, callBackFunc, args }) {
  return (
    <button
      onClick={() => callBackFunc(args)}
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
