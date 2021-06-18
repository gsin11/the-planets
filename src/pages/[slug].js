import React, { useState } from "react";
import Image from "next/image";
import Layout from "@/components/Layout";
import ActionItems from "@/components/ActionItems";
import { getMenuItems, getSingleMenuItem } from "@/lib/api";

const categories = [
  {
    id: "01",
    slug: "overview",
    primaryName: "overview",
  },
  {
    id: "02",
    slug: "internal",
    primaryName: "structure",
    secondaryName: "internal",
  },
  {
    id: "03",
    slug: "geology",
    primaryName: "geology",
    secondaryName: "surface",
  },
];

export default function Slug({ item }) {
  const [activeCategory, setActiveCategory] = useState(categories[0].slug);

  function changeCategory(slug) {
    setActiveCategory(slug);
  }

  return (
    <Layout>
      <main className="container md:w-11/12 lg:max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col justify-center items-center mt-6 lg:mt-12">
          <section className="w-full border-b border-gray-400 order-1 md:hidden">
            <ActionItems
              categories={categories}
              active={activeCategory}
              changeCategory={changeCategory}
            />
          </section>

          <div className="lg:grid lg:grid-flow-row lg:grid-cols-2 gap-24 order-2">
            <section className="mb-9 order-2 md:order-1">
              <div className="relative w-80 h-80 md:w-96 max-w-full md:h-96 mx-auto lg:top-16">
                <Image
                  src={`/static/images/${item.slug}-planet.png`}
                  layout="fill"
                  objectFit="cover"
                  quality="100"
                />
              </div>
            </section>

            <section className="mb-9 md:flex order-3 md:flex-row gap-10 lg:flex-col">
              <div className="md:w-1/2 text-center md:text-left lg:w-full lg:max-w-lg">
                <h2 className="uppercase text-3xl mb-4 md:text-left lg:text-6xl">
                  {item.name}
                </h2>
                <p className="px-6 md:px-0 text-gray-400 text-sm mb-4 md:mb-8">
                  {item[activeCategory]}
                </p>
                <p className="text-gray-400">
                  Source:{" "}
                  <a href={item.wiki_link} className="font-bold underline">
                    Wikipedia
                  </a>
                </p>
              </div>
              <div className="hidden md:flex md:w-1/2 justify-around lg:w-full lg:max-w-lg">
                <ActionItems
                  categories={categories}
                  active={activeCategory}
                  changeCategory={changeCategory}
                />
              </div>
            </section>
          </div>
          <section className="w-full px-6 md:px-0 order-4 md:order-4">
            <ul className="w-full md:grid md:grid-flow-row md:grid-cols-4 md:gap-3">
              <li className="mb-2 md:mb-0">
                <p className="uppercase p-4 border w-full flex justify-between md:block">
                  <span className="text-gray-500 md:text-xs md:pb-4 md:block md:font-semibold">
                    rotation time
                  </span>
                  <span>{`${item.rotation_time} days`}</span>
                </p>
              </li>
              <li className="mb-2 md:mb-0">
                <p className="uppercase p-4 border w-full flex justify-between md:block">
                  <span className="text-gray-500 md:text-xs md:pb-4 md:block md:font-semibold">
                    revolution time
                  </span>
                  <span>{`${item.revolution_time} days`}</span>
                </p>
              </li>
              <li className="mb-2 md:mb-0">
                <p className="uppercase p-4 border w-full flex justify-between md:block">
                  <span className="text-gray-500 md:text-xs md:pb-4 md:block md:font-semibold">
                    radius
                  </span>
                  <span>{`${item.radius} km`}</span>
                </p>
              </li>
              <li>
                <p className="uppercase p-4 border w-full flex justify-between md:block">
                  <span className="text-gray-500 md:text-xs md:pb-4 md:block md:font-semibold">
                    average temp.
                  </span>
                  <span>{item.average_temperature}&deg;c</span>
                </p>
              </li>
            </ul>
          </section>
        </div>
      </main>
    </Layout>
  );
}

// This function gets called at build time
export async function getStaticPaths() {
  // Call an external API endpoint to get posts
  const promise = getMenuItems();
  return promise.then((response) => {
    const allItems = response.planets;
    const paths = allItems.map((item) => ({
      params: { slug: item.slug },
    }));

    // We'll pre-render only these paths at build time.
    // { fallback: false } means other routes should 404.
    return { paths, fallback: false };
  });
}

export async function getStaticProps({ params }) {
  const promise = getSingleMenuItem(params.slug);
  return promise.then((response) => {
    return { props: { item: response.planets[0] } };
  });
}
