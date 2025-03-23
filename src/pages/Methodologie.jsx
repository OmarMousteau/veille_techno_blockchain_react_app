import React from "react";

const Methodologie = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">Méthodologie de veille</h1>
      <br />
      <br />
      <h2 className="text-xl font-semibold">1. Recherches préliminaires</h2>
      <br />
      <p className="mt-4"> Tout d'abord, il était important de bien comprendre les concepts clés de la blockchain et des smart contracts, puis de comprendre les secteurs les plus impactés par ces technologies. Pour cela, j'ai effectué des recherches en utilisant l'outil Perplexity, un modèle de langage naturel qui à partir d'un prompt, répond à des questions en citant et analysant des sources sur le Web. J'ai également utilisé les outils de recherche de ChatGPT et DeepSeek, mais aussi des outils de recherche classiques comme Google Scholar, ResearchGate, etc.</p>
      <div className="flex justify-center space-x-4 mt-6">
        <img
          src="public/Perplexity.png"
          alt="Image 1"
          className="w-1/20 object-cover"
        />
        <img
          src="public/ChatGPT.png"
          alt="Image 2"
          className="w-1/20 object-cover"
        />
        <img
          src="public/DeepSeek.png"
          alt="Image 3"
          className="w-1/20 object-cover"
        />
        <img
          src="public/GoogleScholarr.png"
          alt="Image 4"
          className="w-1/20 object-cover"
        />
        <img
          src="public/ResearchGate.png"
          alt="Image 5"
          className="w-1/20 object-cover"
        />
      </div>
      <p className="mt-4"> J'ai également pu trouver des informations sur certaines plateforme d'articles qui traite de sujets tech ou spécifiquement de blockchain : Medium, The Block, Journal du Coin, etc. </p>
      <p className="mt-4"> Enfin, j'ai pu mieux comprendre certains concepts de la blockchain grâce aux vidéos des chaines Youtube suivantes : </p>
      <ul className="list-disc ml-8 mt-4">
        <li>
          <a
            href="https://www.youtube.com/c/hasheur"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 underline"
          >
            Hasheur
          </a>
        </li>
        <li>
          <a
            href="https://www.youtube.com/@yrile"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 underline"
          >
            YRILE
          </a>
        </li>
        <li>
          <a
            href="https://www.youtube.com/channel/UCaoBf--cwOoZ4aZlkPWsG2A"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 underline"
          >
            CoinAcademy
          </a>
        </li>
        <li>
          <a
            href="https://www.youtube.com/@Cryptoast"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 underline"
          >
            Cryptoast
          </a>
        </li>
      </ul>
      <br />
      <br />

      <h2 className="text-xl font-semibold">2. Création d'alertes</h2>
      <p className="mt-4"> Pour rester informé des dernières actualités sur la blockchain dans les secteurs que j'avais ciblés, j'ai créé des alertes sur les plateformes <strong>Google Alerts</strong> et <strong>Google Scholar Alerts</strong>. Voici les requêtes que j'ai rentrées pour mes alertes :</p>
      <ul className="list-disc ml-8 mt-4">
        <li>
          <strong>Blockchain AND (Finance OR Real Estate OR Health OR Supply Chain OR IoT)</strong>
        </li>
        <li>
          <strong>Smart contracts AND (Finance OR Real Estate OR Health OR Supply Chain OR IoT)</strong>
        </li>
        <li>
          <strong>Decentralized AND (Finance OR Real Estate OR Health OR Supply Chain OR IoT)</strong>
        </li>
        <li>
          <strong>Applications AND Blockchain</strong>
        </li>
      </ul>
      <p className="mt-4">Je recevais ainsi régulièrement des articles qui alimentaient ma veille : </p>
      <div className="flex justify-center space-x-4 mt-6">
        <img
          src="public/Alertes.png"
          alt="Image 1"
          className="w-2/3 object-cover"
        />
      </div> 
      <p className="mt-4">Souvent, lorsqu'un article me semblait interressant, je demandais à un LLM de le résumer puis si ses élementss me semblait pertinents, je le lisais en partie ou intégralement. </p>
      <br />
      
      
      <br />
      <h2 className="text-xl font-semibold">3. Agrégation des articles</h2>
      <p className="mt-4">
        Les articles que j'ai recueilli ont été agrégés via l'outil{" "}
        <a
          href="https://www.zotero.org/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 underline"
        >
          Zotero
        </a>
        , puis je les ai classés par secteur d'activité. J'ai donc pu construire la page "Articles" de ce site, qui regroupe les articles les plus pertinents que j'ai trouvé et en donne un résumé généré par un LLM.
      </p>
    </div>
  );
};

export default Methodologie;