import React, { Component, useContext } from "react";
import defaultBcg from "../images/room-10.jpeg";
import { RoomContext } from "../Context";
import Hero from "../Components/Hero";
import Banner from "../Components/Banner";
import { Link, useParams } from "react-router-dom";
import StyledHero from "../Components/StyledHero";

export default function SingleRoom() {
  const { slug } = useParams();
  const { getRoom } = useContext(RoomContext);
  const room = getRoom(slug);

  if (!room) {
    return (
      <div className="error">
        <h3>no such room could be found</h3>
        <Link to="/rooms" className="btn-primary">
          back to rooms
        </Link>
      </div>
    );
  }

  const {
    name,
    description,
    capacity,
    size,
    price,
    extras,
    breakfast,
    pets,
    images,
  } = room;

  const [mainImg, ...defaultImg] = images;
  console.log(defaultImg);

  return (
    <>
      <StyledHero img={mainImg || this.state.defaultBcg}>
        {/* images[0] || this.state.defaultBcg*/}
        <Banner title={`${name} room`}>
          <Link to="/rooms" className="btn-primary">
            back to rooms
          </Link>
        </Banner>
      </StyledHero>
      <section className="single-room">
        <div className="single-room-images">
          {defaultImg.map((item, index) => {
            return <img key={index} src={item} alt={name} />;
          })}
        </div>
        <div className="single-room-info">
          <article className="desc">
            <h3> details</h3>
            <p>{description}</p>
          </article>
          <article className="info">
            <h3> info</h3>
            <h6>price : ${price}</h6>
            <h6>size : ${size} SQFT</h6>
            <h6>
              Max Capacity :{" "}
              {capacity > 1 ? `${capacity} people` : `${capacity} person`}
            </h6>
            <h6>{pets ? "pets allowed" : "no pets allowed"}</h6>
            <h6>{breakfast && "free breakfast included"}</h6>
          </article>
        </div>
      </section>
      <section className="room-extras">
        <h6>extras</h6>
        <ul className="extras">
          {extras.map((item, index) => {
            return <li key={index}>- {item}</li>;
          })}
        </ul>
      </section>
    </>
  );
}

// export default class SingleRoom extends Component {
//   constructor(props) {
//     super(props);
//     console.log(this.props);

//     // this.state = {
//     //   slug: this.props.match.params.slug,
//     //   defaultBcg,
//     // };

//     this.state = {
//       slug: this.props.match?.params?.slug, // Safely access nested properties
//       defaultBcg,
//     };
//   }

//   static contextType = RoomContext;
//   componentDidMount() { }

//   render() {
//     const { getRoom } = this.context;
//     const room = getRoom(this.state.slug);
//     // console.log(room);
//     if (!room) {
//       return (
//         <div className="error">
//           <h3>no such room could be found</h3>
//           <Link to="/rooms" className="btn-primary">
//             back to rooms
//           </Link>
//         </div>
//       );
//     }
//     const {
//       name,
//       description,
//       capacity,
//       size,
//       price,
//       extras,
//       breakfast,
//       pets,
//       images,
//     } = room;
//     return (
//       <Hero hero="roomsHero">
//         <Banner title={`${name} room`}>
//           <Link to="/rooms" className="btn-btn-primary">
//             back to rooms
//           </Link>
//         </Banner>
//       </Hero>
//     );
//   }
// }
