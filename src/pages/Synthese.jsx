import React, { useState } from "react";

const Synthese = () => {
    return (
      <div className="p-6">
      <h1 className="text-2xl font-bold">État de l'art</h1>
      <br />
      <br />
      <h2 className="text-xl font-semibold">Contexte</h2>
      <p className="mt-4">
        La blockchain est une technologie de stockage et de transmission d’informations, fonctionnant sans organe central de contrôle. Il s'agit d'un registre distribué et sécurisé qui permet d'enregistrer des transactions de manière <strong>décentralisée, transparente et infalsifiable</strong>. Chaque bloc contient un ensemble de transactions validées, reliées entre elles par des liens cryptographiques. Ces blocs sont ajoutés à la chaîne de manière chronologique, garantissant ainsi l’intégrité et la traçabilité des données.
      </p>
      <p className="mt-4">
        Le concept de blockchain a été introduit en 2008 par une personne ou un groupe sous le pseudonyme de <strong>Satoshi Nakamoto</strong>. Il a été conçu comme le socle technologique du <strong>Bitcoin</strong>, la première cryptomonnaie fonctionnant sans autorité centrale, permettant ainsi des échanges de valeur en <em>peer-to-peer</em> (P2P). Dans ce modèle, la confiance repose sur des <strong>protocoles cryptographiques et la validation collective des transactions</strong> par un réseau d’ordinateurs appelés <strong>mineurs</strong>. Ces derniers utilisent un algorithme de consensus – comme la <strong>preuve de travail (Proof of Work, PoW)</strong> – pour sécuriser les transactions et éviter la fraude.
      </p>
      <p className="mt-4">
        Cependant, la blockchain ne se limite pas aux cryptomonnaies. D'abord, les transactions peuvent être de différentes natures : transfert de biens, transfert de données, enregistrements de propriétés, etc. Ensuite, sa capacité à <strong>enregistrer, sécuriser et automatiser des transactions</strong> ouvre la voie à de nombreux cas d’usage dans des domaines variés, allant de la finance à la gestion des données médicales, en passant par l’assurance ou encore la logistique.
      </p>
      <p className="mt-4">
        En 2015, avec la création de la <strong>blockchain Ethereum</strong> par <strong>Vitalik Buterin</strong>, une nouvelle avancée majeure voit le jour : les <strong>smart contracts</strong>. Ce sont des programmes autonomes qui s’exécutent automatiquement lorsqu’un ensemble de conditions prédéfinies est rempli. Par exemple, un smart contract dans le domaine de l’assurance voyage peut <strong>rembourser automatiquement un passager</strong> en cas de retard de vol, sans nécessiter d’intervention humaine. Grâce à ces contrats, il devient possible d’automatiser de nombreuses transactions et d’éliminer la nécessité d’un tiers de confiance ou d'une intervention humaine, ce qui réduit considérablement les délais et les coûts administratifs.
      </p>
      <p className="mt-4">
        L’apparition des smart contracts a permis le développement d’une <strong>nouvelle génération de blockchains</strong> (souvent appelées <strong>blockchains 2.0</strong>), comme <strong>Solana, Avalanche ou Polkadot</strong>, offrant des capacités améliorées en matière de <strong>vitesse, de scalabilité et de réduction des coûts énergétiques</strong>.
      </p>
      <p className="mt-4">
        Cette évolution a conduit à l’émergence des <strong>applications décentralisées (DApps)</strong>, qui fonctionnent de manière autonome, sans contrôle central. On retrouve ces applications dans plusieurs secteurs :
      </p>
      <ul className="list-disc ml-8">
        <li>Cryptomonnaie : <a href="https://aave.com" target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">Aave</a> est un protocole de prêt et d’emprunt de cryptomonnaies</li>
        <li>Assurance : <a href="https://etherisc.com/" target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">Etherisc</a> est une plateforme d'assurances décentralisée qui utilise des contrats intelligents pour automatiser les indemnisations</li>
        <li>Jeux : <a href="https://decentraland.org" target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">Decentraland</a> est une plateforme de réalité virtuelle décentralisée</li>
        <li>Réseaux sociaux : <a href="https://steemit.com/" target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">Steemit</a> est une plateforme sociale décentralisée qui récompense les utilisateurs avec des cryptomonnaies pour la publication et la curation de contenu</li>
        <li>Arts : <a href="https://opensea.io" target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">OpenSea</a> est un marché d’échange de tokens non fongibles (NFT)</li>
      </ul>
      <p className="mt-4">
        Grâce à ces innovations, la blockchain devient <strong>bien plus qu’un simple support aux cryptomonnaies</strong>. Elle s’impose comme un <strong>outil puissant de transformation numérique</strong>, offrant de nouvelles perspectives dans la gestion des actifs, la certification des données et la transparence des transactions à l’échelle mondiale.
      </p>

      <div className="flex justify-center my-6">
        <img 
          src="https://github.com/OmarMousteau/veille_techno_blockchain_react_app/blob/main/public/FonctionnementBC.png?raw=true" 
          alt="Fonctionnement de la blockchain" 
          className="w-full max-w-4xl"
        />
      </div>
      <br />


      <h2 className="text-xl font-semibold">Structure d'une blockchain</h2>
      <div>
        <p className="mt-4">Dans une blockchain, voici la structure d'un bloc :</p>
        <br />
        <h3 className="text-base font-semibold">1. L’en-tête du bloc (Block Header)</h3>
        <p className="mt-4">L’en-tête contient des métadonnées cruciales qui permettent de lier le bloc au reste de la chaîne. Il comprend généralement :</p>
        <ul className="list-disc ml-8">
          <li><strong>Le hachage du bloc précédent</strong> : un identifiant unique généré par une fonction cryptographique (SHA-256 dans le cas du Bitcoin). Ce hachage assure l'intégrité de la chaîne en garantissant que toute modification d’un ancien bloc invaliderait les suivants.</li>
          <li><strong>Le hachage du bloc actuel (Merkle Root)</strong> : un condensé cryptographique qui représente l’ensemble des transactions contenues dans le bloc.</li>
          <li><strong>Le timestamp</strong> : l'horodatage indiquant la date et l’heure de création du bloc.</li>
          <li><strong>La difficulté (Difficulty Target)</strong> : un paramètre qui définit le niveau de difficulté du minage, ajusté périodiquement pour garantir une création de blocs régulière.</li>
          <li><strong>Le nonce</strong> : un nombre arbitraire modifié lors du processus de minage pour trouver un hachage valide respectant la difficulté.</li>
        </ul>
        <br />
        <h3 className="text-base font-semibold">2. Le corps du bloc (Block Body)</h3><br />
        <ul className="list-disc ml-8">
          <li><strong>Les transactions validées</strong> : chaque bloc enregistre une liste de transactions confirmées. Par exemple, dans Bitcoin, un bloc peut contenir plusieurs milliers de transactions.</li>
          <li><strong>La transaction de récompense (Coinbase transaction)</strong> : c’est la première transaction du bloc, qui récompense le mineur ayant validé le bloc avec de nouvelles unités de la cryptomonnaie et les frais de transaction.</li>
        </ul>
        <br />
        <h3 className="text-base font-semibold">3. Le lien entre les blocs</h3>
        <p className="mt-4">Chaque bloc contient le <strong>hachage du bloc précédent</strong>, formant une chaîne inaltérable. Si un seul bloc est modifié, son hachage change, ce qui invalide tous les blocs suivants. Ce mécanisme assure l’immuabilité des données enregistrées.</p>
        <br />
        <h3 className="text-base font-semibold">Fonctionnement de la validation d’un bloc</h3>
        <br />
        <ul className="list-disc ml-8">
          <li>1. <strong>Sélection des transactions</strong> : les transactions en attente sont regroupées dans un "mempool". Les mineurs sélectionnent celles qui offrent les frais les plus élevés.</li>
          <li>2. <strong>Création du bloc</strong> : le mineur assemble un ensemble de transactions valides et construit un nouveau bloc.</li>
          <li>3. <strong>Calcul du hachage (Preuve de Travail - PoW)</strong> : dans Bitcoin, le mineur doit résoudre un problème cryptographique en trouvant un hachage valide inférieur à une certaine cible. Cela nécessite des essais successifs du nonce.</li>
          <li>4. <strong>Ajout du bloc à la chaîne</strong> : une fois trouvé, le bloc est diffusé dans le réseau. Les autres nœuds le valident et l’ajoutent à leur copie de la blockchain.</li>
        </ul>
        </div>
        <p className="mt-4">D’autres blockchains utilisent des mécanismes alternatifs comme le Proof-of-Stake (PoS), qui remplace le minage par un processus de validation basé sur la possession de tokens.</p>

        <p className="mt-4">
        Voici par exemple les derniers blocs de la blockchain bitcoin (disponibles sur ce <a 
          href="https://www.blockchain.com/fr/explorer" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-blue-500 underline">
          site</a>
        ):
      </p>

        <div className="flex justify-center my-6">
        <img 
          src="https://github.com/OmarMousteau/veille_techno_blockchain_react_app/blob/main/public/LatestBlocks.png?raw=true"
          alt="Derniers blocs de la blockchain bitcoin" 
          className="w-full max-w-4xl"
        />
      </div>
      <br />

      
      <h2 className="text-xl font-semibold">Applications concrètes</h2>
      <p className="mt-4">
        Avec ces avancées, la blockchain trouve des applications concrètes dans de nombreux secteurs. Cette veille technologique a permis de découvrir ces cas d'usage. Voici les principaux domaines concernés :
      </p>
      <br />
      <h3 className="text-lg font-semibold">Immobilier</h3>
      <p className="mt-4">L'immobilier est un des domaines dans lesquels la blockchain apporte le plus de solutions innovantes. Pour rappel, l'immobilier est souvent décrit comme un secteur en retard en termes de transformation numérique. Depuis plusieurs années, certains acteurs utilisent les avantages de la blockchain pour simplifier les processus immobiliers, ouvrir le marché à de nouveaux investisseurs, mais aussi permettre une meilleure traçabilité des biens et des transactions. Voici quelques cas d'applications intéressants : </p>
      <br />
      <ul className="list-disc ml-8">
        <li><strong>Tokenisation des actifs immobiliers</strong> : La tokenisation des biens immobiliers est un processus innovant qui utilise la technologie blockchain pour convertir des droits de propriété en jetons numériques, appelés tokens. Ce processus permet de diviser un bien immobilier en plusieurs tokens, offrant ainsi aux investisseurs la possibilité d'acquérir une fraction de la propriété. On peut citer les sociétés <a href="https://realt.co/"  target="_blank"  rel="noopener noreferrer"  className="text-blue-500 underline"> RealT</a> et <a href="https://letztoken.com/"  target="_blank"  rel="noopener noreferrer"  className="text-blue-500 underline"> LetzToken</a> qui proposent des propriétés tokenisées accessibles via des cryptomonnaies ou des devises traditionnelles. Ce concept ouvre le marché à de nouveaux investisseurs, y compris ceux disposant de budgets plus modestes, sans nécessiter l'achat d'un bien dans son intégralité. On observe également des campagnes de financement participatif pour des projets immobiliers basés sur cette technologie.</li>
        <li><strong>Accès aux flux de trésorerie locatifs</strong> : L'entreprise <a href="https://realnoi.io/"  target="_blank"  rel="noopener noreferrer"  className="text-blue-500 underline"> RealNOI</a>, en collaboration avec <a href="https://chintai.io/"  target="_blank"  rel="noopener noreferrer"  className="text-blue-500 underline"> Chintai</a>, a lancé une plateforme permettant aux investisseurs d'accéder aux flux de trésorerie locatifs tokenisés. Cela offre une nouvelle opportunité d'investissement tout en aidant les propriétaires à refinancer leurs biens, notamment dans un contexte de taux hypothécaires élevés.</li>
        <li><strong>Sécurisation et transparence des transactions</strong> : La blockchain assure une traçabilité et une transparence accrues dans les transactions immobilières. Chaque étape, de la signature des contrats à l'enregistrement des titres de propriété, est enregistrée de manière immuable, réduisant ainsi les risques de fraude et les erreurs.</li>
        <li><strong>Automatisation des processus avec les smart contracts</strong> : Les contrats intelligents automatisent l'exécution des accords lorsque les conditions prédéfinies sont remplies. Ils simplifient des processus tels que les paiements de loyers, les transferts de propriété ou la gestion des baux, réduisant ainsi les coûts administratifs et les délais.</li>
        <li><strong>Gestion immobilière</strong> : La blockchain peut être utilisée pour gérer les relations entre les propriétaires, les locataires et les prestataires de services, en assurant la transparence et la sécurité des informations.</li>
        <li><strong>Création d'un Métaverse Terrestre</strong> : Des projets comme <a href="https://www.lelieuinternational.com/fieldcoin-la-revolution-du-marche-immobilier-grace-a-la-blockchain"  target="_blank"  rel="noopener noreferrer"  className="text-blue-500 underline"> FieldCoin</a> visent à créer une version numérisée du monde sur la blockchain, où chaque propriété foncière est tokénisée et accessible dans un Métaverse.</li>
      </ul>
      <br />
      <br />
      <h3 className="text-lg font-semibold">Santé</h3>
      <p className="mt-4"> Dans le domaine de la santé, la blockchain offre des solutions pour sécuriser les données médicales, faciliter le partage d'informations entre les acteurs de la santé et garantir la confidentialité des patients. Voici quelques applications concrètes :</p>
      <br />
      <ul className="list-disc ml-8">
        <li><strong>Gestion sécurisée des données médicales</strong> : Il est possible d'inscrire sur la blockchain les dossiers médicaux électroniques (DME) des patients. Cette pratique permet aux médecins prenant en charge le patient d'avoir accès à ses informations et de les transmettre à ses pairs bien plus facilement. De plus, le chiffrement des blocs permet de protéger les données sensibles des patients contre les piratages et les accès non autorisés. Cela permet de garantir la confidentialité et l'intégrité des informations médicales.
        <br /> Les patients peuvent avoir un contrôle total sur leurs données via les clés cryptographiques, ce qui respecte les exigences du Règlement Général sur la Protection des Données (RGPD) en Europe. Cela signifie que les patients peuvent décider qui peut accéder à leurs données et quand.</li>
        
        <li><strong>Interopérabilité des systèmes de santé</strong> : Avec l'inscription des DME dans la blockchain, on simplifie le partage transparent et sécurisé de données entre différents acteurs du système de santé, tels que les hôpitaux, les laboratoires et les assureurs. À noter qu'aujourd'hui, il est parfois difficile même pour les médecins de partager les DME avec le nombre de logiciels et de formats différents.
        <br /> Des projets comme <a href="https://www.doc.com/"  target="_blank"  rel="noopener noreferrer"  className="text-blue-500 underline"> Doc.com</a> ou <a href="https://www.thebigwhale.io/cours/medibloc"  target="_blank"  rel="noopener noreferrer"  className="text-blue-500 underline"> Medibloc</a> proposent des solutions de stockage et de partage sécurisé des données médicales sur la blockchain. Grâce à des historiques médicaux complets et accessibles, les erreurs de diagnostic peuvent être réduites. Les professionnels de santé ont accès à des informations précises et à jour, ce qui améliore la qualité des soins.</li>

        <li><strong>Optimisation des processus administratifs</strong> : Les smart contracts peuvent automatiser divers processus administratifs comme les remboursements d'assurance, la vérification des qualifications médicales, et la gestion des consentements éclairés. Cela réduit les coûts et accélère les démarches bureaucratiques, ce qui permet aux professionnels de santé de se concentrer pleinement sur les soins aux patients.
        </li>

        <li><strong>Traçabilité des produits pharmaceutiques</strong> : La blockchain peut être utilisée pour suivre de manière transparente la chaîne d'approvisionnement des médicaments, ce qui aide à lutter contre les contrefaçons. Chaque étape, depuis la production jusqu'à la distribution, est enregistrée et vérifiable en temps réél.</li>
      
        <li><strong>Recherche médicale et essais cliniques</strong> : Les données des études et des essais cliniques peuvent être stockées de manière inviolable sur la blockchain, garantissant leur intégrité scientifique et évitant toute falsification. Après anonymisation, les données peuvent être partagées entre chercheurs, ce qui facilite la collaboration et accélère les progrès médicaux tout en respectant la confidentialité des participants.</li>
      </ul>
      <br />
      <br />
      <h3 className="text-lg font-semibold">Finance</h3>
      <br />
      <ul className="list-disc ml-8">
        <li><strong>Finance décentralisée (DeFi)</strong> :  La finance décentralisée est un système financier basé sur la blockchain qui opère sans intermédiaires traditionnels comme les banques. Elle utilise des contrats intelligents pour permettre des transactions peer-to-peer, notamment le prêt, le trading et la gestion d'actifs. En 2025, la DeFi est attendue pour atteindre de nouveaux sommets grâce à des innovations techniques et une meilleure intégration avec l'intelligence artificielle et la finance traditionnelle.</li>
        <li><strong>Monnaies numériques de banque centrale (MNBC)</strong> :  Les MNBC, ou Central Bank Digital Currencies (CBDC), sont des versions numériques des monnaies traditionnelles émises par les banques centrales. Elles visent à améliorer l'inclusion financière et la rapidité des transactions. Des pays comme la Chine (Digital Yuan), la Suède (e-krona) et l'Union européenne (Digital Euro) expérimentent ces monnaies. Elles permettent un accès aux services financiers pour les populations non bancarisées, et un contrôle accru des transactions financières.</li>
        <li><strong>Enchères numériques</strong> :  La blockchain révolutionne les enchères en offrant une transparence et une sécurité accrues. Les enchères sont gérées via des contrats intelligents qui enregistrent chaque transaction, garantissant l'immutabilité des résultats. Des plateformes comme <a href="https://www.artory.com/"  target="_blank"  rel="noopener noreferrer"  className="text-blue-500 underline"> Artory</a> et <a href="https://www.maecenas.co/"  target="_blank"  rel="noopener noreferrer"  className="text-blue-500 underline"> Maecenas</a> utilisent la blockchain pour la vérification de la provenance et de la propriété fractionnelle des œuvres d'art.</li>
        </ul>
      <br />
      <br />
      <h3 className="text-lg font-semibold">Supply Chain</h3>
      <br />
      <ul className="list-disc ml-8">
        <li><strong>Traçabilité et Transparence</strong> :  La blockchain permet un suivi précis des produits tout au long de la chaîne d'approvisionnement. Elle garantit l’authenticité des biens et leur conformité aux réglementations, notamment dans les secteurs alimentaire et pharmaceutique. Par exemple, des initiatives comme OriginTrail utilisent la blockchain pour établir un environnement de partage de données sécurisé et fiable, garantissant l'intégrité des informations tout au long du processus.</li>
        <li><strong>Sécurisation des transactions et lutte contre la fraude</strong> :  Grâce à son registre distribué et infalsifiable, la blockchain empêche la falsification des documents et la contrefaçon des produits. Dans l'industrie diamantaire, par exemple, <a href="https://everledger.io/"  target="_blank"  rel="noopener noreferrer"  className="text-blue-500 underline"> Everledger</a> utilise la blockchain pour tracer les diamants et s’assurer qu’ils proviennent de sources éthiques </li>
        <li><strong>Intégration avec l'IoT et les nouvelles technologies</strong> :  La combinaison de la blockchain avec l’Internet des objets (IoT) permet d’automatiser la collecte de données et d'améliorer la réactivité des entreprises en cas d’incident. Par exemple, certaines plateformes permettent de suivre en temps réel les conditions de transport (température, humidité, localisation) pour les produits sensibles. </li>
      </ul>
      <br />
      <br />
      <h3 className="text-lg font-semibold">IoT (exemple du projet HNT)</h3>
      <br />
      <a href="https://www.helium.com/"  target="_blank"  rel="noopener noreferrer"  className="text-blue-500 underline"> Helium</a> (HNT) est un exemple concret de l'utilisation de la blockchain pour révolutionner l'Internet des Objets (IoT). Voici comment :
      <br />
      <br />
      <ul className="list-disc ml-8">
        <li><strong>Connectivité Décentralisée pour l'IoT</strong> : Helium vise à fournir une couverture mondiale pour l'IoT en s'affranchissant des infrastructures centralisées coûteuses. Pour cela, il utilise le protocole de communication LoRaWAN, qui est idéal pour les appareils IoT en raison de sa longue portée et de sa basse consommation d'énergie. De plus, Helium intègre la technologie 5G pour offrir une connectivité plus performante, adaptée aux appareils mobiles et aux applications gourmandes en bande passante. Cette approche permet une expansion rapide et efficace du réseau, tout en garantissant une qualité de service élevée.</li>
        <li><strong>Réseau Décentralisé avec Récompenses</strong> : Le réseau Helium repose sur une architecture décentralisée où les utilisateurs installent des hotspots qui servent à la fois de points d'accès sans fil et de mineurs de cryptomonnaie HNT. Les participants sont récompensés en HNT pour leur contribution à l'expansion et à la maintenance du réseau. Le mécanisme de consensus utilisé est appelé Proof of Coverage (PoC), qui vérifie la couverture réseau fournie par les hotspots, assurant ainsi la stabilité et la fiabilité du réseau. Ce système encourage l'adoption et la croissance du réseau en récompensant les contributeurs.</li>
        <li><strong>Usage du Token HNT</strong> : Le token HNT est au cœur d'une économie numérique qui récompense les contributions au réseau. Il est utilisé pour les transactions et l'achat de services de connectivité via les Data Credits. De plus, HNT est échangé contre d'autres tokens spécifiques pour les réseaux IoT et mobiles d'Helium. En tant que monnaie d'échange, HNT facilite la participation active des utilisateurs dans l'écosystème Helium, créant ainsi un cycle économique dynamique et inclusif.</li>
      </ul>
      </div>
    );
  };

export default Synthese;