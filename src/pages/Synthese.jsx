import React, { useState } from "react";

const Synthese = () => {
    return (
      <div className="p-6">
      <h1 className="text-2xl font-bold">Synthèse de la veille</h1>
      <br />
      <br />
      <h2 className="text-xl font-semibold">Contexte</h2>
      <p className="mt-4">La blockchain est un registre distribué et sécurisé permettant d'enregistrer des transactions de manière décentralisée et immuable. Chaque bloc contient un ensemble de transactions validées, reliées entre elles par des liens cryptographiques. Ces blocs sont ajoutés à la chaîne de blocs de manière chronologique, formant ainsi une base de données transparente et infalsifiable.
      Le concept a été popularisé en 2008 avec la création du Bitcoin par une personne ou un groupe sous le pseudonyme de Satoshi Nakamoto. Le Bitcoin est la première application de la blockchain, il illustre bien le fonctionnement de cette technologie : les transactions sont vérifiées par un réseau d'ordinateurs appelés 'mineurs' et elles y sont inscrites dans des blocs successifs.
      La première idée lors de sa création était de pouvoir échanger de la valeur entre des personnes éloignées géographiquement, sans avoir à passer par le système centralisé des banques. On appelle ce système le peer-to-peer, et dans ce dernier, la garantie de confiance est assuréee par une série de protocoles, de programmes informatiques lancés sur les mineurs qui vont vérifier la transaction et la valider.
      Grâce à son fonctionnement basé sur la cryptographie et la validation collective des transactions par un réseau d’ordinateurs, la blockchain garantit la transparence et l’intégrité des données.</p>
      <p className="mt-4">Cependant, on s'est rendu compte que la blockchain pouvait être plus que le simple support des cryptomonnaies. D'abord, les transactions peuvent être de différentes nature : transfert de biens, transfert de données, enregistrements de proprietés, etc. 
        En 2015, avec la création de la blockchain Ethereum par Vitalik Buterin, émerge le concept de smart contract, ou contrats intelligents : Ce sont des programmes autonomes qui exécutent automatiquement des actions lorsque certaines conditions prédéfinies sont remplies. Par exemple, dans le domaine de l’assurance voyage, un contrat intelligent peut être utilisé pour rembourser automatiquement un passager si son vol est retardé de plus d’un certain nombre d’heures. 
        Grâce à ces contrats, il devient possible d’automatiser de nombreuses transactions et d’éliminer la nécessité d’un tiers de confiance, ce qui réduit considérablement les délais et les coûts administratifs.
        D’autres blockchains, dites 2.0, ont vu le jour : Solana, Avalanche, XRP, etc.</p>      
      <p className="mt-4">Les smart contracts ont permis la création d'application décentralisées (DApps) : il s'agit de services numériques qui fonctionnent de manière autonome et résiliente – que ce soit dans la finance décentralisée (DeFi), les jeux, la logistique ou d’autres secteurs – en offrant aux utilisateurs un contrôle total sur leurs données et leurs actifs. Cette nouvelle approche favorise l’émergence de modèles économiques innovants et des interactions directes, de pair à pair, sans la centralisation d’un tiers de confiance. Voici un exemple de DApps dans différents domaines :</p>
      <ul className="list-disc ml-8">
        <li>Cryptomonnaie : <a href="https://aave.com" target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">Aave</a> est un protocole de prêt et d’emprunt de cryptomonnaies</li>
        <li>Assurance : <a href="https://etherisc.com/" target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">Etherisc</a> est une plateforme d'assurances décentralisées qui utilise des contrats intelligents pour automatiser les indemnisations</li>
        <li>Jeux : <a href="https://decentraland.org" target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">Decentraland</a> est une plateforme de réalité virtuelle décentralisée</li>
        <li>Réseaux sociaux : <a href="https://steemit.com/" target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">Steemit</a> est une plateforme sociale décentralisée qui récompense les utilisateurs avec des cryptomonnaies pour la publication et la curation de contenu</li>
        <li>Arts : <a href="https://opensea.io" target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">OpenSea</a> est un marché d’échange de tokens non fongibles (NFT)</li>
      </ul>
      <p className="mt-4">À partir de là, on peut imaginer de nombreux cas d'application concrèts de la blockchain dans les secteurs du quotidien, avec ses avantages en termes de décentralisation, de sécurité via la cryptographie appliquée à l'inscription des transactions et des blocs, et de l'immuabilité de la chaine de blocs qui assure la transparence des données.</p>
      <br />

      <div className="flex justify-center my-6">
        <img 
          src="https://github.com/OmarMousteau/veille_techno_blockchain_react_app/blob/main/public/FonctionnementBC.png?raw=true" 
          alt="Fonctionnement de la blockchain" 
          className="w-full max-w-4xl"
        />
      </div>


      <h2 className="text-xl font-semibold">Structure d'une blockchain</h2>
      <div>
        <p className="mt-4">Dans une blockchain, voici la structure d'un bloc :</p>
        <br />
        <h3 className="text-base font-semibold">1. L’en-tête du bloc (Block Header)</h3>
        <p className="mt-4">L’en-tête contient des métadonnées cruciales qui permettent de lier le bloc au reste de la chaîne. Il comprend généralement :</p>
        <ul className="list-disc ml-8">
          <li>Le hachage du bloc précédent : un identifiant unique généré par une fonction cryptographique (SHA-256 dans le cas du Bitcoin). Ce hachage assure l'intégrité de la chaîne en garantissant que toute modification d’un ancien bloc invaliderait les suivants.</li>
          <li>Le hachage du bloc actuel (Merkle Root) : un condensé cryptographique qui représente l’ensemble des transactions contenues dans le bloc.</li>
          <li>Le timestamp : l'horodatage indiquant la date et l’heure de création du bloc.</li>
          <li>La difficulté (Difficulty Target) : un paramètre qui définit le niveau de difficulté du minage, ajusté périodiquement pour garantir une création de blocs régulière.</li>
          <li>Le nonce : un nombre arbitraire modifié lors du processus de minage pour trouver un hachage valide respectant la difficulté.</li>
        </ul>
        <br />
        <h3 className="text-base font-semibold">2. Le corps du bloc (Block Body)</h3><br />
        <ul className="list-disc ml-8">
          <li>Les transactions validées : chaque bloc enregistre une liste de transactions confirmées. Par exemple, dans Bitcoin, un bloc peut contenir plusieurs milliers de transactions.</li>
          <li>La transaction de récompense (Coinbase transaction) : c’est la première transaction du bloc, qui récompense le mineur ayant validé le bloc avec de nouvelles unités de la cryptomonnaie et les frais de transaction.</li>
        </ul>
        <br />
        <h3 className="text-base font-semibold">3. Le lien entre les blocs</h3>
        <p className="mt-4">Chaque bloc contient le hachage du bloc précédent, formant une chaîne inaltérable. Si un seul bloc est modifié, son hachage change, ce qui invalide tous les blocs suivants. Ce mécanisme assure l’immuabilité des données enregistrées.</p>
        <br />
        <h3 className="text-base font-semibold">Fonctionnement de la validation d’un bloc</h3>
        <br />
        <ul className="list-disc ml-8">
          <li>1. Sélection des transactions : les transactions en attente sont regroupées dans un "mempool". Les mineurs sélectionnent celles qui offrent les frais les plus élevés.</li>
          <li>2. Création du bloc : le mineur assemble un ensemble de transactions valides et construit un nouveau bloc.</li>
          <li>3. Calcul du hachage (Preuve de Travail - PoW) : dans Bitcoin, le mineur doit résoudre un problème cryptographique en trouvant un hachage valide inférieur à une certaine cible. Cela nécessite des essais successifs du nonce.</li>
          <li>4. Ajout du bloc à la chaîne : une fois trouvé, le bloc est diffusé dans le réseau. Les autres nœuds le valident et l’ajoutent à leur copie de la blockchain.</li>
        </ul>
        </div>

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
      
      <h2 className="text-xl font-semibold">Applications concrètes</h2>
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