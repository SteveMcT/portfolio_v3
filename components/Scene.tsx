import Spline from "@splinetool/react-spline";
import { container } from "tsyringe";
import { PageService } from "../services/pageService";

export default function Scene() {
  const _pageService = container.resolve(PageService);

  function onLoad(spline: any) {
    setInterval(() => {
      const variables = spline._scene?.invisibleObjects?.parent.sharedAssets.variables;
      if (!variables) return;

      const options: { value: boolean; key: string }[] = [];

      for (const key in variables) {
        const value = variables[key].value;
        options.push({ value, key });
      }

      const selection = options.filter((v) => v.value)[0];

      if (selection?.key == undefined && !!_pageService.currentPage.value) _pageService.currentPage.next(null);
      else if (selection && selection?.key && _pageService.currentPage.value == null) _pageService.currentPage.next(selection?.key);
    }, 50);
  }

  return <Spline style={{ width: "100%", height: "100vh" }} onLoad={onLoad} scene="https://prod.spline.design/24l6mU6nHn3KeM1c/scene.splinecode" />;
}
