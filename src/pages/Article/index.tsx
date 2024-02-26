import ArticleTags from "../../components/Article/Tags";
import ArticleBanner from "../../components/ArticleBanner";
import Container from "../../components/Container";
import TagsList from "../../components/Tags/TagsList";
import "./style.scss";
const ArticlePage = () => {
  return (
    <div>
      <ArticleBanner />
      <div className="article__desc">
        <Container>
          <div className="article__desc-container">
            <p className="article__desc-text">
              Nemo tempore dolor maiores blanditiis quia qui qui voluptatem
              non.\nNisi dolores animi laboriosam aliquam qui adipisci
              voluptates atque dignissimos.\nLibero sit quibusdam corporis aut
              inventore natus libero.\nPraesentium omnis dolorum temporibus
              repellendus qui.\nNon nostrum doloribus occaecati dolores sit ut.
              Similique et quos maiores commodi exercitationem laborum animi
              qui. Autem reiciendis provident iure possimus.\nOccaecati soluta
              quibusdam libero tenetur minus vel sit illo.\nCulpa optio dolorem
              eos similique voluptatem voluptatibus error accusantium. Et fuga
              repellendus magnam dignissimos eius aspernatur rerum. Non enim
              expedita maiores incidunt voluptatem rem.\nEt nam vel nihil non
              non.\nVoluptates accusantium aut nisi et error doloribus molestiae
              voluptas soluta. Voluptatem velit ut deserunt.\nQuibusdam eius
              repellat. Totam voluptas consequatur officiis.\nPlaceat sit nobis
              ut est quae dolore consequuntur vel.\nRepudiandae ut molestias
              rerum occaecati quod.\nRerum optio minus aliquid.\nIllum et
              voluptas iusto molestiae nulla praesentium deserunt est voluptas.
              Et sed dicta eveniet accusamus consequatur.\nUllam voluptas
              consequatur aut eos ducimus.\nId officia est ut dicta provident
              beatae ipsa. Deleniti explicabo assumenda ipsum cumque voluptatem
              blanditiis volup
            </p>

            <ArticleTags tags={["123", "sdf", "dfgdgf", "xcvx"]} />
          </div>
          <div>TEST!!!</div>
          <div>TEST!!!</div>
          <div>TEST!!!</div>
          <div>TEST!!!</div>
        </Container>
      </div>
    </div>
  );
};

export default ArticlePage;
