import Layout from "../components/Layout";
import { getMenuItems } from "@/lib/api";

export default function Home({ items }) {
  return (
    <Layout menuItems={items}>
      <main className="container md:w-8/12 px-3 md:px-0 mx-auto relative z-10">
        <div className="flex flex-col justify-center items-center mt-8">
          Coming Soon...
        </div>
      </main>
    </Layout>
  );
}

export async function getStaticProps() {
  const promise = getMenuItems();
  return promise.then((response) => {
    return {
      props: {
        items: response.planets,
      },
    };
  });
}
