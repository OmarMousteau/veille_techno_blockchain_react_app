import React, { useState } from "react";
import { Card, CardContent } from '@/components/Card.jsx';
import { Button } from '@/components/Button';

const articles = [
  {
    titre: "FieldCoin : La révolution du marché immobilier grâce à la blockchain",
    resume: "Fieldcoin est un projet innovant qui vise à transformer le secteur immobilier en combinant la blockchain, l'IPFS et la réalité augmentée. Il permet aux propriétaires de tokeniser leurs biens fonciers en NFT sur la blockchain Ethereum, créant ainsi une identité numérique unique et immuable pour chaque propriété. Initialement destiné aux terres agricoles, Fieldcoin s'étend désormais à toutes les propriétés foncières, connectant le monde numérique au monde réel.",
    lien: "https://www.lelieuinternational.com/fieldcoin-la-revolution-du-marche-immobilier-grace-a-la-blockchain",
    categorie: "Immobilier"
  },
  {
    titre: "Les avantages de la technologie blockchain dans l'immobilier",
    resume: "La technologie blockchain offre plusieurs avantages dans le secteur immobilier, notamment en assurant l'intégrité des données environnementales pour une comptabilité carbone fiable, en garantissant la traçabilité des matériaux de construction dans une économie circulaire, en facilitant la tokenisation des biens pour une meilleure liquidité, et en sécurisant le partage de documents entre les parties prenantes du secteur.",
    lien: "https://finance-innovation.org/les-avantages-de-la-technologie-blockchain-dans-limmobilier/",
    categorie: "Immobilier"
  },
  {
    titre: "La blockchain au service du secteur de l'immobilier",
    resume: "La blockchain révolutionne le secteur immobilier en offrant transparence, sécurité et efficacité. Elle assure la traçabilité des transactions, renforce la sécurité des données et dématérialise les processus tels que les actes de vente. Les contrats intelligents automatisent certaines étapes, réduisant coûts et délais. La tokenisation des actifs facilite la titrisation et la gestion des biens communs, tandis que le financement participatif devient plus transparent et sécurisé.",
    lien: "https://www.maformationimmo.fr/la-blockchain-au-service-du-secteur-de-limmobilier/",
    categorie: "Immobilier"
  },
  {
    titre: "Immobilier et blockchain : une révolution en marche",
    resume: "La blockchain révolutionne l'immobilier en permettant des transactions plus rapides, sécurisées et transparentes, en éliminant certains intermédiaires. Elle accroît la confiance des investisseurs grâce à un registre public des transactions et facilite l'exécution de contrats intelligents, automatisant ainsi le transfert de propriété et les paiements. Cependant, des freins subsistent, tels que le manque de connaissance du domaine et l'absence de réglementation spécifique.",
    lien: "https://blog.iadfrance.fr/conseil-immobilier/droit-legislation/immobilier-blockchain/",
    categorie: "Immobilier"
  },
  {
    titre: "Blockchain et immobilier : quels enjeux ?",
    resume: "La blockchain révolutionne le secteur immobilier en introduisant transparence, sécurité et accessibilité. Elle fluidifie les transactions, les rendant plus rapides et sûres. Des projets innovants émergent, combinant blockchain et immobilier pour proposer des solutions toujours plus efficientes. La gestion des données immobilières est également transformée, avec des informations stockées de manière sécurisée et accessible, facilitant les processus de vérification et de due diligence.",
    lien: "https://www.cotoit.fr/blog/blockchain-immobilier/",
    categorie: "Immobilier"
  },
  {
    titre: "Blockchain in real estate: A systematic review",
    resume: "Cette étude identifie quatre domaines clés où la blockchain peut transformer l'immobilier : l'administration foncière, les transactions immobilières, la tokenisation et la gestion immobilière. Une analyse thématique a révélé 26 applications empiriques, principalement liées à l'administration foncière, démontrant le potentiel de la blockchain pour améliorer l'efficacité et la transparence dans ces secteurs.",
    lien: "https://www.sciencedirect.com/science/article/pii/S0264837722003611",
    categorie: "Immobilier"
  },
  {
    titre: "Quand l'immobilier rencontre la blockchain : Reboost de l'Etztoken",
    resume: "LetzToken, une entreprise luxembourgeoise, a lancé Reboost, une initiative utilisant la technologie blockchain pour faciliter l'accès des investisseurs particuliers au marché immobilier. En tokenisant des parts de projets immobiliers, Reboost permet aux promoteurs d'atteindre plus rapidement les seuils de financement nécessaires, tout en offrant aux investisseurs des opportunités à partir de 1.000€, avec des rendements projetés entre 6% et 10%.",
    lien: "https://paperjam.lu/article/quand-limmobilier-rencontre-la-blockchain-reboost-de-letztoken",
    categorie: "Immobilier"
  },
  {
    titre: "Nouvelle plateforme de revenus locatifs tokenisé (RealNOI et Chintai)",
    resume: "RealNOI et Chintai lancent une plateforme tokenisant 570 M$ de revenus locatifs de 1 900 appartements, avec un rendement annuel prévu de plus de 5 %. Contrairement à la tokenisation immobilière classique, elle se focalise sur les flux de trésorerie sans transfert de titres. Les transactions sont enregistrées sur blockchain, offrant transparence et liquidité via les marchés secondaires.",
    lien: "https://www.coindesk.com/fr/business/2025/02/24/chintai-tokenizes-usd570m-real-estate-cash-flow-for-realnoi",
    categorie: "Immobilier"
  },

  {
    titre: "Blockchain en santé : un marché en pleine explosion",
    resume: "La blockchain révolutionne le secteur de la santé en renforçant la sécurité des données médicales, facilitant l'échange fluide d'informations entre patients et professionnels, et assurant la transparence des chaînes d'approvisionnement pharmaceutiques. Elle améliore également la gestion des dossiers médicaux, offrant aux patients un contrôle accru sur leurs informations personnelles.",
    lien: "https://www.lassuranceenmouvement.com/2024/02/12/blockchain-en-sante-un-marche-en-pleine-explosion/",
    categorie: "Santé"
  },
  {
    titre: "La blockchain appliquée aux données de santé",
    resume: "La blockchain, grâce à sa décentralisation et à ses mécanismes cryptographiques, pourrait révolutionner la gestion des données de santé en renforçant leur sécurité et confidentialité. Elle offre des applications prometteuses telles que la gestion des dossiers médicaux électroniques, le suivi à distance des patients, la sécurisation de la chaîne d'approvisionnement des médicaments et l'amélioration de la transparence dans la recherche biomédicale.",
    lien: "https://datalama.ca/la-blockchain-appliquee-aux-donnees-de-sante/",
    categorie: "Santé"
  },
  {
    titre: "Blockchain et santé : protection des données",
    resume: "La blockchain révolutionne le secteur de la santé en garantissant la sécurité et la transparence des données médicales. Grâce à son registre distribué et infalsifiable, elle assure l'intégrité et l'immutabilité des informations, renforçant ainsi la confiance entre patients et professionnels de santé. De plus, la traçabilité offerte par la blockchain permet de suivre l'historique des consultations et des partages de données, améliorant la responsabilisation et la lutte contre les abus.",
    lien: "https://www.healthcie.fr/blockchain-sante-protection-donnees-article/",
    categorie: "Santé"
  },
  {
    titre: "Smart Contracts in EHR Management",
    resume: "Cette étude explore l'utilisation des contrats intelligents basés sur la blockchain pour automatiser la gestion des dossiers de santé électroniques (DSE). Cette approche vise à améliorer l'efficacité des flux de travail médicaux, renforcer la sécurité des données et assurer une meilleure traçabilité des informations de santé. En automatisant les processus liés aux DSE, les contrats intelligents peuvent réduire les erreurs humaines et accroître la transparence dans le secteur de la santé.",
    lien: "https://www.researchgate.net/profile/Hannah-Adebayo/publication/388641456_Smart_Contracts_in_EHR_Management_Automating_Healthcare_Workflows_with_Blockchain/links/67a078424c479b26c9cae9bc/Smart-Contracts-in-EHR-Management-Automating-Healthcare-Workflows-with-Blockchain.pdf",
    categorie: "Santé"
  },
  {
    titre: "Blockchain et gestion de la chaîne d'approvisionnement en santé",
    resume: "La blockchain révolutionne la gestion des chaînes d'approvisionnement en santé en renforçant la traçabilité, la transparence et la sécurité des médicaments. Elle joue un rôle clé dans la prévention de la fraude et l’authentification des produits. Cependant, son adoption fait face à des obstacles, notamment des coûts d’implémentation élevés et une réglementation encore incertaine dans le secteur médical.",
    lien: "https://www.sciencedirect.com/science/article/pii/S1877050920318044",
    categorie: "Santé"
  },

  {
    titre: "Blockchain pour des enchères sécurisées avec chiffrement AES",
    resume: "Cet article scientifique propose un cadre basé sur la blockchain pour améliorer la transparence, réduire les coûts et renforcer la sécurité des enchères électroniques publiques et à offres scellées. En utilisant des contrats intelligents pour automatiser des paramètres clés et l'AES pour chiffrer les données sensibles, le système assure des transactions sécurisées et transparentes. Les résultats montrent une amélioration notable par rapport aux systèmes traditionnels, notamment une sécurité accrue, une transparence totale et une réduction significative des coûts opérationnels.",
    lien: "https://www.researchgate.net/profile/Ijist-Jr/publication/389138498_A_Blockchain-Based_Framework_for_Secure_Public_and_Sealed-Bid_Auctions_with_AES_Encryption/links/67b6a0d7645ef274a4899ea0/A-Blockchain-Based-Framework-for-Secure-Public-and-Sealed-Bid-Auctions-with-AES-Encryption.pdf",
    categorie: "Finance"
  },
  {
    titre: "Blockchain et transformation des services financiers",
    resume: "L'étude explore l'impact de la blockchain sur le secteur financier, notamment dans le commerce et la gestion des titres. Elle met en avant ses avantages en matière de sécurité, d'efficacité et de transparence, réduisant le besoin d'intermédiaires et améliorant la confiance. L'étude examine plusieurs plateformes blockchain appliquées à la finance et analyse les défis liés à la réglementation, à la scalabilité et aux risques de sécurité.",
    lien: "https://ietresearch.onlinelibrary.wiley.com/doi/full/10.1049/blc2.12067",
    categorie: "Finance"
  },
  {
    titre: "Blockchain et finance : opportunités et défis",
    resume: "Le rôle de la blockchain dans la finance est mis en avant avec notamment son potentiel pour améliorer la transparence, la sécurité et l'efficacité des transactions financières. L'article examine les applications possibles, telles que les paiements, la gestion des titres et les contrats intelligents. Cependant, l'adoption de cette technologie est freinée par des défis réglementaires, des questions de scalabilité et la résistance des acteurs traditionnels du secteur.",
    lien: "https://journals.sagepub.com/doi/full/10.1177/0256090919839897",
    categorie: "Finance"
  },
  {
    titre: "Smart Contracts et Finance Décentralisée (DeFi)",
    resume: "L'étude explore le rôle de la blockchain dans la finance, en mettant en avant son potentiel pour améliorer la transparence, la sécurité et l'efficacité des transactions financières. Il examine les applications possibles, telles que les paiements, la gestion des titres et les contrats intelligents. Cependant, l'adoption de cette technologie est freinée par des défis réglementaires, des questions de scalabilité et la résistance des acteurs traditionnels du secteur.",
    lien: "https://www.annualreviews.org/content/journals/10.1146/annurev-financial-110921-022806",
    categorie: "Finance"
  },

  {
    titre: "DeFi : Finance décentralisée et contrats intelligents",
    resume: "L'article explore la finance décentralisée (DeFi) et son infrastructure basée sur la blockchain et les smart contracts. Il met en avant les avantages de la transparence, de l'interopérabilité et de l'automatisation des services financiers sans intermédiaires. Il examine les applications comme les échanges décentralisés, les prêts et la gestion d'actifs, tout en soulignant les défis liés à la sécurité, à la régulation et à l'évolutivité du système.",
    lien: "https://edoc.unibas.ch/86500/",
    categorie: "Finance"
  },

  {
    titre: "Blockchain pour une Supply Chain Plus Fiable",
    resume: "L'étude analyse le rôle des smart contracts dans la finance décentralisée (DeFi), mettant en avant leurs avantages pour automatiser les transactions sans intermédiaires. Il explore les applications clés, notamment les échanges décentralisés (DEXs), les prêts basés sur la blockchain et l'émission de tokens. Cependant, des défis subsistent, tels que la sécurité, l’accès aux données externes et l'intégration avec le cadre juridique traditionnel.",
    lien: "https://www.sciencedirect.com/science/article/pii/S0360835219303729",
    categorie: "Supply Chain"
  },
  {
    titre: "Blockchain et Supply Chain : Un Levier de Confiance",
    resume: "L'article explore l'intégration de la blockchain dans la gestion des chaînes d'approvisionnement pour renforcer la confiance et l'intégrité des données. Une simulation avec une blockchain Ethereum-like montre que cette technologie améliore la transparence, optimise la gestion des stocks et réduit les risques de désinformation. Les entreprises partageant des données fiables bénéficient d'une meilleure performance, tandis que la blockchain agit comme un certificat de véracité, limitant la fraude et la falsification des informations.",
    lien: "https://www.sciencedirect.com/science/article/pii/S0360835219304139",
    categorie: "Supply Chain"
  },
  {
    titre: "Sécurité et défis des chaînes d'approvisionnement blockchain",
    resume: "L'étude analyse les opportunités et les défis liés à l'utilisation de la blockchain dans la gestion des chaînes d'approvisionnement. Bien qu'elle améliore la transparence et la traçabilité, la blockchain reste vulnérable aux cyberattaques et aux failles de conception des smart contracts. L'étude identifie les menaces potentielles et propose des solutions pour renforcer la sécurité des systèmes blockchain, notamment en améliorant la fiabilité des échanges et la protection des données sensibles.",
    lien: "https://www.mdpi.com/2076-3417/11/12/5585",
    categorie: "Supply Chain"
  },
  {
    titre: "Adoption de la blockchain pour la transparence logistique",
    resume: "L'étude examine l'adoption de la blockchain dans la gestion des chaînes d'approvisionnement pour améliorer la transparence et la traçabilité. En s'appuyant sur la théorie UTAUT, il identifie les facteurs influençant son adoption, tels que la confiance technologique et organisationnelle. Bien que prometteuse, la blockchain fait face à des défis d'implémentation et d'acceptation. L'étude met en avant son potentiel pour optimiser la visibilité des flux logistiques et réduire les fraudes.",
    lien: "https://www.mdpi.com/2305-6290/2/1/2",
    categorie: "Supply Chain"
  },
  {
    titre: "Blockchain et durabilité des chaînes d'approvisionnement",
    resume: "L'étude explore l'impact de la blockchain sur la durabilité des chaînes d'approvisionnement en se basant sur le cadre du triple bilan (économique, social et environnemental). Il met en avant son rôle dans la réduction des coûts, l'amélioration de la traçabilité, la confiance entre les partenaires et la transparence. La blockchain favorise également l’adoption de pratiques écologiques en réduisant les émissions carbone et en optimisant l’utilisation des ressources naturelles.",
    lien: "https://yadda.icm.edu.pl/baztech/element/bwmeta1.element.baztech-3e949e5f-8a67-4d5a-ad4f-342c28a6cb32",
    categorie: "Supply Chain"
  },

  {
    titre: "Helium (HNT) : Réinventer le réseau Internet des objets avec la blockchain",
    resume: "Helium est un réseau sans fil décentralisé qui utilise la technologie blockchain pour connecter les appareils de l'Internet des Objets (IoT). Les utilisateurs installent des hotspots, étendant ainsi la couverture du réseau et sont récompensés en HNT, la cryptomonnaie native. Cette approche innovante redéfinit la connectivité IoT en offrant une alternative aux infrastructures centralisées traditionnelles.",
    lien: "https://cryptoast.fr/helium-hnt-reinventer-connectivite-internet-objets-blockchain/",
    categorie: "IoT"
  },
  {
    titre: "Qu'est-ce que le Helium (HNT) ?",
    resume: "Helium est un réseau blockchain conçu pour connecter les appareils de l'Internet des objets (IoT). Il utilise des nœuds appelés Hotspots pour relier les dispositifs sans fil au réseau. Le token natif HNT alimente ce réseau et sert de récompense lorsque les Hotspots transmettent des données de connexion. Avec la croissance exponentielle de l'IoT, Helium gagne en pertinence.",
    lien: "https://kriptomat.io/fr/cours-crypto-monnaies/helium-hnt-valeur/quest-ce-que-le/",
    categorie: "IoT"
  },
  {
    titre: "Intégration de la blockchain et de l'IoT : enjeux et défis",
    resume: "L'article explore l'intégration de la blockchain dans l'Internet des objets (IoT) pour améliorer la sécurité et la transparence des échanges de données. Il met en avant les avantages de la blockchain, notamment son immuabilité et sa résilience, tout en identifiant les défis liés à son adoption, comme la scalabilité et la consommation énergétique. L'étude propose des solutions pour optimiser cette intégration, notamment via de nouveaux protocoles et architectures décentralisées.",
    lien: "https://www.mdpi.com/1424-8220/18/8/2575",
    categorie: "IoT"
  },

  {
    titre: "Applications et défis de la blockchain dans divers secteurs",
    resume: "Une revue systématique des applications de la blockchain dans des domaines comme la finance, l'éducation, la santé, l'IoT et la logistique révèle son rôle clé dans la transparence, la sécurité et la décentralisation. L’étude analyse 750 articles et met en avant les tendances émergentes. Malgré son adoption croissante, des défis persistent, notamment en matière de scalabilité, de réglementation et d'interopérabilité avec les systèmes existants.",
    lien: "https://ieeexplore.ieee.org/stamp/stamp.jsp?arnumber=9786734",
    categorie: "Autres"
  },
  {
    titre: "Blockchain et gestion sécurisée des identités numériques",
    resume: "L'article propose un cadre d'identité numérique sécurisé combinant la blockchain et les smart contracts pour protéger les données biométriques. Il utilise Ethereum pour garantir transparence et contrôle utilisateur sur les accès. En stockant uniquement des valeurs transformées, le système renforce la confidentialité et la souveraineté des données personnelles. L'étude met en avant son potentiel pour améliorer la gestion des identités tout en réduisant les risques de fraude et d’usurpation.",
    lien: "https://par.nsf.gov/servlets/purl/10136316",
    categorie: "Autres"
  },
  {
    titre: "Blockchain et jeux vidéo : tendances et perspectives",
    resume: "L'article examine l'utilisation croissante de la blockchain dans l'industrie du jeu vidéo, notamment à travers les NFT, les cryptomonnaies et les smart contracts. Il analyse 39 études académiques et met en évidence les tendances émergentes, les défis technologiques et les opportunités de recherche. Bien que l'industrie adopte rapidement ces innovations, la recherche académique peine à suivre le rythme et à explorer pleinement les implications sociales et économiques.",
    lien: "https://openaccess.uoc.edu/bitstream/10609/151197/1/arnedo_coins22_research.pdf",
    categorie: "Autres"
  },
  {
    titre: "Blockchain dans le secteur de l'énergie : usages et défis",
    resume: "L'utilisation de la blockchain dans le secteur de l'énergie transforme la gestion de l'approvisionnement, du commerce pair-à-pair et des véhicules électriques. En garantissant transparence et sécurité, elle facilite la traçabilité des transactions et la gestion des émissions carbone. Cependant, des défis persistent, notamment liés à l'évolutivité, à la protection de la vie privée et à l'intégration avec les infrastructures énergétiques existantes.",
    lien: "https://ieeexplore.ieee.org/ielaam/4267003/9523781/9131815-aam.pdf",
    categorie: "Autres"
  }
];

const Articles = () => {
  const [filter, setFilter] = useState("Tous");
  const categories = ["Tous", "Immobilier", "Santé", "Finance", "Supply Chain", "IoT", "Autres"];

  const filteredArticles = filter === "Tous" ? articles : articles.filter(a => a.categorie === filter);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Recueil d'articles</h1>
      <br />
      <div className="mb-4">
        {categories.map((cat) => (
          <Button
            key={cat}
            onClick={() => setFilter(cat)}
            isActive={filter === cat}
            className="mr-2"
          >
            {cat}
        </Button>
        ))}
      </div>
      <br />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredArticles.map((article, index) => (
          <Card key={index}>
            <CardContent className="p-4">
              <h2 className="text-base font-semibold mb-2">{article.titre}</h2>
              <p className="text-sm text-gray-600 mb-4 min-h-[8.5rem]">{article.resume}</p>
              <a
                href={article.lien}
                className="text-blue-500 hover:text-blue-700"
                target="_blank"
                rel="noopener noreferrer"
              >
                Lire l'article
              </a>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Articles;