import React from "react";

import { categories } from "../../../../content/index";
import { ICategory, IHomeSection } from "../../../../interfaces/cms";
import { LineBreakerSelector } from "../../../shared/index";

import "./Categories.styles.scss";

export const Categories = (categoriesData: IHomeSection) => {
  return (
    <div className="background">
      <div className="categories" data-aos="fade-up">
        <div className="categories-title">
          <h1>
            <strong>{categoriesData.title}</strong> <br />
          </h1>
          <h2>
            <LineBreakerSelector typedLines={categoriesData.subtitle} />
          </h2>
        </div>

        <div className="categories-sections" data-aos="fade-up">
          {categories.map((category: ICategory, index: number) => (
            <div key={index}>
              {/* Category content properties */}
              {category.title && <h2>{category.title}</h2>}
              {category.section && <p>{category.section}</p>}
              {category.body && <p>{category.body}</p>}
              {/* Separator line */}
              {index < categories.length - 1 && <hr />}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
