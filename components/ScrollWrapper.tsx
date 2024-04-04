import NotionPageRenderer from "@/services/notionpagerenderer";
import { animated, useSpring } from "@react-spring/web";
import { useEffect, useState } from "react";
import { CloseOutline } from "react-ionicons";
import { container } from "tsyringe";
import { PageService } from "../services/pageService";

export function ScrollWrapper() {
  const [show, setShow] = useState<boolean>(false);
  const [page, setPage] = useState<string | null>(null);

  const _pageService = container.resolve(PageService);

  useEffect(() => {
    _pageService.currentPageOpen.subscribe(async (res) => setShow(res));
  }, [_pageService.currentPageOpen.getValue()]);

  useEffect(() => {
    _pageService.currentPage.subscribe(async (res) => setPage(res));
  }, [_pageService.currentPage.getValue()]);

  const springProps = useSpring({
    opacity: show ? 1 : 0,
    bottom: show ? "calc(100vh - 5rem)" : "0",
  });

  return (
    <animated.div style={springProps} id="scroll-container" className={show ? "pointer-events-auto" : "pointer-events-none"}>
      <div className="scroll-header">
        <button onClick={() => _pageService.currentPageOpen.next(false)}>
          <CloseOutline />
        </button>
      </div>

      <div className="scroll-content">{page && <NotionPageRenderer pageId={page} />}</div>
    </animated.div>
  );
}
