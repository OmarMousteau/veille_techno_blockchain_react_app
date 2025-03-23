import React, { useState } from "react";

const Synthese = () => {
    return (
      <div className="p-6">
      <h1 className="text-2xl font-bold">Synthèse de la veille</h1>
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
        Cependant, la blockchain ne se limite pas aux cryptomonnaies. D'abord, les transactions peuvent être de différentes natures : transfert de biens, transfert de données, enregistrements de proprietés, etc. Ensuite, sa capacité à <strong>enregistrer, sécuriser et automatiser des transactions</strong> ouvre la voie à de nombreux cas d’usage dans des domaines variés, allant de la finance à la gestion des données médicales, en passant par l’assurance, ou encore la logistique.
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
        <li>Assurance : <a href="https://etherisc.com/" target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">Etherisc</a> est une plateforme d'assurances décentralisées qui utilise des contrats intelligents pour automatiser les indemnisations</li>
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
        Avec ces avancées, la blockchain trouve des applications concrètes dans de nombreux secteurs. Cette veille technologique a permis de découvrir ces cas d'usage, voici les principaux domaines concernés :
      </p>
      <br />
      <h3 className="text-base font-semibold">Immobilier</h3>
      <p className="mt-4">[Applications dans le domaine de l'immobilier]</p>
      <br />
      <h3 className="text-base font-semibold">Santé</h3>
      <p className="mt-4">[Applications dans le domaine de la santé]</p>
      <br />
      <h3 className="text-base font-semibold">Finance</h3>
      <p className="mt-4">[Applications dans le domaine de la finance]</p>
      <br />
      <h3 className="text-base font-semibold">Supply Chain</h3>
      <p className="mt-4">[Applications dans le domaine de la logistique]</p>
      <br />
      <h3 className="text-base font-semibold">IoT</h3>
      <p className="mt-4">[Applications dans le domaine des réseaux IoT]</p>
      </div>
    );
  };

export default Synthese;