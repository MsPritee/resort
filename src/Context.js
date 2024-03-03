import React, { Component } from "react";
import items from "./data";

const RoomContext = React.createContext();
//<RoomContext.Provider value{'hello'} />

export default class RoomProvider extends Component {
  state = {
    rooms: [],
    sortedRooms: [],
    featuredRooms: [],
    loading: true,
  };

  //getData

  componentDidMount() {
    //this.getData
    let rooms = this.formatData(items);
    let featuredRooms = rooms.filter((room) => room.featured === true);
    console.log(rooms);
    this.setState({
      rooms,
      featuredRooms,
      sortedRooms: rooms,
      loading: false,
    });
  }

  formatData(items) {
    let tempItem = items.map((item) => {
      let id = item.sys.id;
      let images = item.fields.images.map((img) => img.fields.file.url);
      let room = { ...item.fields, images, id };
      return room;
    });
    return tempItem;
  }

  getRoom = (slug) => {
    let tempRooms = [...this.state.rooms];
    const room = tempRooms.find((room) => room.slug === slug);
    return room;
  };

  render() {
    return (
      <RoomContext.Provider value={{ ...this.state, getRoom: this.getRoom }}>
        {this.props.children}
      </RoomContext.Provider>
    );
  }
}

const RoomConsumer = RoomContext.Consumer;

export { RoomProvider, RoomConsumer, RoomContext };
