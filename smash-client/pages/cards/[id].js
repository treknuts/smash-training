import { useRouter } from "next/router";
import Layout from "../../components/layout";

const CardDetail = () => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <Layout>
      <h2>Card {id}</h2>
    </Layout>
  );
};

export default CardDetail;
