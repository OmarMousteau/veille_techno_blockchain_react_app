import React, { useState } from "react";

const Home = () => {
    return (
        <div className="p-6">
        <h1 className="text-2xl font-bold">Les applications concrètes de la blockchain au-delà des cryptomonnaies : panorama des innovations sectorielles.</h1>
        <br />
        <br />
        <h2 className="text-xl font-semibold">👨🏽‍💻 Auteur : Omar Mousteau</h2>
        <br />
        <section className="mt-4">
            <h2 className="text-xl font-semibold">🔍 Présentation du projet</h2>
            <p className="mt-2 text-gray-700">
                La blockchain est souvent associée aux cryptomonnaies, mais son potentiel va bien au-delà. Ce projet de veille technologique explore les usages innovants de cette technologie dans divers secteurs économiques et sociétaux. De la finance à la logistique, en passant par la santé et l’identité numérique, découvrez comment la blockchain transforme les pratiques et ouvre de nouvelles perspectives.
            </p>
        </section>
        <br />
        <section className="mt-4">
            <h2 className="text-xl font-semibold">📌 Objectifs</h2>
            <ul className="mt-2 list-disc list-inside text-gray-700">
                <li>Identifier les cas d’usage concrets et innovants de la blockchain.</li>
                <li>Comprendre l’impact de cette technologie sur les modèles économiques existants.</li>
                <li>Explorer les tendances et les perspectives d’évolution.</li>
            </ul>
        </section>
        <br />
        <section className="mt-4">
            <h2 className="text-xl font-semibold">💡 Pourquoi cette étude ?</h2>
            <p className="mt-2 text-gray-700">
                À travers cette veille, l'idée est de mettre en lumière les avancées récentes et les transformations majeures apportées par la blockchain, afin d’aider à mieux appréhender son rôle dans la société de demain.
            </p>
        </section>
      </div>
    );
};

export default Home;
