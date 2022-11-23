import { useRef, useEffect } from "react";

import { BsFillArrowUpCircleFill } from "react-icons/bs";

const Top = () => {
  const scrollToTop = useRef();

  useEffect(() => {
    const btn = scrollToTop.current;

    btn.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }, []);
  return (
    <div
      className="bg-brand3 text-brand flex p-2 items-center justify-center fixed z-10 bottom-5 left-3 rounded-lg hover:cursor-pointer"
      ref={scrollToTop}
    >
      <BsFillArrowUpCircleFill size={20} className="mr-1" />
      <p className="font-mon font-[600] text-[12px]">Top</p>
    </div>
  );
};

export default Top;
