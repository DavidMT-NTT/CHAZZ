import React, { useEffect, useState } from "react";
import ReactDOMServer from "react-dom/server";

import { IPolicy, IPolicyArticle } from "../../../../interfaces/cms";
import { Accordion } from "../../../shared/index";
import { BodyContent } from "./BodyContent/BodyContent";

import "./Articles.styles.scss";

type Props = { policy: IPolicy; resetArticle: number };

export const Articles = ({ policy, resetArticle }: Props) => {
  // Creamos un estado con el valor del ancho de la pantalla (windowWidth):
  const [windowWidth, setWindowWidth] = useState<number>(window.innerWidth);

  // Creamos una función que nos re calcula el ancho de la pantalla:
  window.onresize = () => setWindowWidth(window.innerWidth);

  const [articleIndex, setArticleIndex] = useState<number>(0);

  function setArticleScroll(index: number) {
    setArticleIndex(index);
    const article = document.getElementById(`article${index}`);
    const global = document.getElementById("global");
    if (global && article) {
      global.scrollTop = article.offsetTop - 30;
      article?.scrollIntoView();
    }
  }

  // If tab changed to another policy, set selected article to 0
  useEffect(() => {
    if (resetArticle) setArticleIndex(0);
  }, [resetArticle]);

  return (
    <>
      {windowWidth >= 720 ? (
        // Desktop format
        <div className="policy-container">
          {/* Sidebar */}
          <div className="sidebar">
            {policy.articles.map((article: IPolicyArticle, index: number) => {
              const setSelected: string = articleIndex === index ? "selected" : "";
              return (
                <a
                  href={`#article${index}`}
                  className={`article-title ${setSelected}`}
                  key={index}
                  onClick={() => setArticleScroll(index)}
                >
                  {article.title}
                </a>
              );
            })}
          </div>
          {/* Articles content */}
          <div className="global-content" id="global">
            <div className="content">
              {policy.articles.map((article: IPolicyArticle, index: number) => (
                <div className="article" key={index}>
                  <div className="article-title" id={`article${index}`}>
                    {article.title}
                  </div>
                  <div className="article-body">
                    <BodyContent body={article.body} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      ) : (
        // Mobile format
        <div className="policy-container">
          <div className="content-mobile">
            {policy.articles.map((article: IPolicyArticle, index: number) => {
              const html = ReactDOMServer.renderToString(<BodyContent body={article.body} />);
              return (
                <div key={index}>
                  <Accordion title={article.title} ourWork={false} html={html} />
                </div>
              );
            })}
          </div>
        </div>
      )}
    </>
  );
};
