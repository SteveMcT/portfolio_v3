// import { PageObjectResponse } from "@notionhq/client/build/src/api-endpoints";
import { useEffect, useState } from "react";
import { NotionRenderer } from "react-notion-x";
import { container } from "tsyringe";
import { EPages, PageService } from "./pageService";

function NotionPageRenderer(props: { pageId: string }) {
  const [pageData, setPageData] = useState<any | null>(null);
  const [isLoading, setIsLoading] = useState<any>(true);
  const [error, setError] = useState<any>(null);

  const _pageService = container.resolve(PageService);

  useEffect(() => {
    setIsLoading(true);
    const fetchData = async () => {
      try {
        console.log(_pageService.currentPage.value);

        let page = "";
        switch (_pageService.currentPage.value) {
          case "df413ff0-fbd6-4509-8fbb-247eee008f00": {
            page = EPages.bigCountry;
            break;
          }
          case "93f73112-361d-429e-a725-f67f7d6f235f": {
            page = EPages.cae;
            break;
          }
          case "535c0de4-3070-464a-9e61-9001fa701936": {
            page = EPages.introduction;
            break;
          }
          case "530fa9cf-0792-4d05-86e5-b9291c98c122": {
            page = EPages.finalAct;
            break;
          }
          case "453dd449-1597-45cd-9206-ea98e349499a": {
            page = EPages.feedback;
            break;
          }
          case "87b8bb4e-d4ce-42ec-8b56-19a424e2b35a": {
            page = EPages.usa;
            break;
          }
        }

        await fetch(`/api/hello?pageId=${page}`).then((res) => res.json().then((res) => setPageData(res)));
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [props.pageId]);

  if (isLoading) return <p>Loading Notion page...</p>;
  if (error) return <p>Error: {error.message}</p>;
  if (!pageData) return <p>No page found with ID: {props.pageId}</p>;
  return <NotionRenderer recordMap={pageData} fullPage={true} darkMode={false} />;
}

export default NotionPageRenderer;
