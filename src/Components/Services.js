import React, { Component } from "react";
import { FaBeer, FaCocktail, FaHiking, FaShuttleVan } from "react-icons/fa";
import Title from "./Title";

export default class Services extends Component {
  state = {
    services: [
      {
        icon: <FaCocktail />,
        title: "free cocktails",
        info: "Lorem ipsum dolor sit amet consectur adipisicining elit. Mangi, corporis!",
      },

      {
        icon: <FaHiking />,
        title: "free hiking",
        info: "Lorem ipsum dolor sit amet consectur adipisicining elit. Mangi, corporis!",
      },

      {
        icon: <FaShuttleVan />,
        title: "free shuttle van",
        info: "Lorem ipsum dolor sit amet consectur adipisicining elit. Mangi, corporis!",
      },

      {
        icon: <FaBeer />,
        title: "free beer",
        info: "Lorem ipsum dolor sit amet consectur adipisicining elit. Mangi, corporis!",
      },
    ],
  };

  render() {
    return (
      <section className="services">
        <Title title="services" />
        <div className="services-center">
          {this.state.services.map((item, index) => {
            return (
              <article key={index} className="service">
                <span>{item.icon}</span>
                <h6>{item.title}</h6>
                <p>{item.info}</p>
              </article>
            );
          })}
        </div>
      </section>
    );
  }
}
