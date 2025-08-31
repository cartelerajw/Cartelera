import React from "react";
import CardLink from "./components/CardLink";

// Importa imágenes
import scheduleIcon from "./assets/images/noun_schedule_1776600.svg";
import mapIcon from "./assets/images/noun_map_10799.svg";
import teachIcon from "./assets/images/noun_teach_1614348.svg";
import conferenceIcon from "./assets/images/noun_conference_704693.svg";
import cleanIcon from "./assets/images/noun_clean_1683608.svg";
import peopleIcon from "./assets/images/noun_people_199910.svg";
import pioneersIcon from "./assets/images/pioneers.svg";
import orgIcon from "./assets/images/noun_organization_421912.svg";

const predicacionCards = [
  { href: "/predicacion", imgSrc: scheduleIcon, label: "Grupos de predicación" },
  { href: "/territorios/mapa", imgSrc: mapIcon, label: "Mapa de territorios" },
];

const reunionesCards = [
  { href: "/vida-y-ministerio", imgSrc: teachIcon, label: "Reunión Vida y Ministerio" },
  { href: "/reunion-publica", imgSrc: conferenceIcon, label: "Reunión Pública" },
  { href: "/limpieza", imgSrc: cleanIcon, label: "Programa de Limpieza" },
];

const congregacionCards = [
  { href: "/publicadores", imgSrc: peopleIcon, label: "Grupos de publicadores" },
  { href: "/precursores", imgSrc: pioneersIcon, label: "Precursores regulares" },
  { href: "/responsabilidades", imgSrc: orgIcon, label: "Responsabilidades" },
];

export default function Home() {
  const renderCards = (cards) => (
    <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
      {cards.map((c, i) => (
        <CardLink key={i} {...c} />
      ))}
    </div>
  );

  return (
    <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "40px" }}>
      <h1 style={{ textAlign: "center", marginBottom: "40px", fontSize: "2.5rem" }}>Congregación Punta Gorda</h1>

      <section style={{ marginBottom: "60px" }}>
        <h2 style={{ textAlign: "center", marginBottom: "20px" }}>Predicación</h2>
        {renderCards(predicacionCards)}
      </section>

      <section style={{ marginBottom: "60px" }}>
        <h2 style={{ textAlign: "center", marginBottom: "20px" }}>Reuniones</h2>
        {renderCards(reunionesCards)}
      </section>

      <section style={{ marginBottom: "60px" }}>
        <h2 style={{ textAlign: "center", marginBottom: "20px" }}>Congregación</h2>
        {renderCards(congregacionCards)}
      </section>
    </div>
  );
}
