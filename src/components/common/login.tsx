import { useState } from "react";
import PenIcon from "../icons/pen";
import { FiSearch } from "react-icons/fi";
import { useRouter } from "next/router";

export default function Login() {
  const [isFocused, setIsFocused] = useState(false);
  const [value, setValue] = useState("");
  const router = useRouter();

  return (
    <div className="z-20 flex h-[48px] items-center justify-between gap-2 border-t border-t-black-secondary bg-black-primary px-[14px] py-[10px]">
      <button
        className="text-white flex h-[10px] w-[94px] items-center justify-center gap-2 rounded-xl bg-transparent"
        style={{ color: "white" }}
        onClick={() => router.push("/login")}
      >
        Log In
      </button>
    </div>
  );
}
