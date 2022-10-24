import HomeComponent from "../src/components/common/Home/Home";
import Layout from "../src/components/shared/Layout/Layout";

import { useSelector } from "react-redux";
export default function Home() {
  const movil = useSelector((state) => state.movil.value);
  console.log("movil", movil);
  return (
    <div>
      <Layout>
        <HomeComponent />
      </Layout>
    </div>
  );
}
