import { ArticleItemType } from "../types";

const ArticleItem = ({ attributes }: ArticleItemType) => {
  const { title, url } = attributes;

  return (
    <div>
      <a href={url}>
        <img
          className="relative z-10 object-cover w-full rounded-md h-96"
          src={attributes.image.data.attributes.url}
          alt=""
        ></img>
        <div className="relative z-20 p-6 mx-auto -mt-20 bg-white rounded-md shadow dark:bg-gray-900">
          <h2 className="font-semibold text-gray-800 dark:text-white md:text-xl">
            {title}
          </h2>
        </div>
      </a>
    </div>
  );
};

export default ArticleItem;
