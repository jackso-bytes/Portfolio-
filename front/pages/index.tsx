import type { NextPage } from "next";
import Layout from "../layouts/Layout";
import PortfolioItem from "../components/Portfolioite";
import { PortfolioItemsResType, PortfolioItemType } from "../types";
import { GetStaticProps, InferGetStaticPropsType } from "next";

const URL = process.env.STRAPI_BASE_URL;

const fetchParams = {
  method: "GET",
  headers: {
    "content-type": "application/JSON",
  },
};

export const getStaticProps: GetStaticProps = async (context) => {
  const res = await fetch(`${URL}/api/portfolio-items`, fetchParams),
    portfolioItems: PortfolioItemsResType = await res.json();
  return {
    props: portfolioItems,
  };
};

const Home: NextPage<{ data: PortfolioItemType[] }> = ({ data }) => {
  return (
    <Layout>
      <section className="bg-white dark:bg-gray-900">
        <div className="container px-6 py-10 mx-auto">
          {data.map((portfolioItem, index: number) => {
            return <PortfolioItem portfolioItem={portfolioItem} key={index} />;
          })}
        </div>
      </section>
    </Layout>
  );
};

export default Home;
