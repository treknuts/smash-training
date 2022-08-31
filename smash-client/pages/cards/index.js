import Card from "../../components/card";
import Layout from "../../components/layout";
import { getCardData } from "../../lib/rest";

export async function getStaticProps() {
  const cardData = getCardData();
  return {
    props: {
      cardData,
    },
  };
}

export default function Cards({ cardData }) {
  return (
    <Layout>
      <div className='grid grid-cols-2 gap-8'>
        {cardData.cards.map((card) => {
          return <Card key={card.name} card={card} />;
        })}
      </div>
    </Layout>
  );
}
