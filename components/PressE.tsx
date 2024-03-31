import { animated, useSpring } from "@react-spring/web";
import { useEffect, useState } from "react";
import { container } from "tsyringe";
import { PageService } from "../services/pageService";

export function PressE() {
  const [show, setShow] = useState<boolean>(false);
  const _pageService = container.resolve(PageService);

  useEffect(() => {
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  useEffect(() => {
    _pageService.currentPage.subscribe((res) => setShow(res != null));
  }, [_pageService.currentPage.getValue()]);

  const springProps = useSpring({
    opacity: show ? 1 : 0,
    bottom: show ? "8rem" : "7rem",
  });

  const onKeyDown = (e: KeyboardEvent) => {
    const key = e.key.toLowerCase();

    if ((key === "escape" || key === "e") && _pageService.currentPageOpen.value) {
      _pageService.currentPageOpen.next(false);
      return;
    }

    if (key === "e" && _pageService.currentPage.value != "") _pageService.currentPageOpen.next(true);
  };

  return (
    <animated.div style={springProps} id="pressE">
      Press E
    </animated.div>
  );
}
