import React from "react";
import clsx from "clsx";
import {
  useCurrentSidebarCategory,
  filterDocCardListItems,
} from "@docusaurus/theme-common";
import DocCard from "@theme/DocCard";

const DocCardListForCurrentSidebarCategory = ({ className }) => {
  const category = useCurrentSidebarCategory();
  return <DocCardList items={category.items} className={className} />;
}

const DocCardList = (props) => {
  const { items, className } = props;
  if (!items) {
    return <DocCardListForCurrentSidebarCategory {...props} />;
  }
  const filteredItems = filterDocCardListItems(items);
  return (
    <section
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
      }}
      className={clsx("row", className)}>
      {filteredItems.map((item, index) => (
        <article
          key={index}
          style={{
            paddingLeft: 20,
          }}>
          <DocCard item={item} />
        </article>
      ))}
    </section>
  );
}

export default DocCardList
