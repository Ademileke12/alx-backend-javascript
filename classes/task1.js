import {ClassRoom} from "./0-classroom.js"
export default function initializeRooms(){
    const size = [19,20,34];
    const rooms = size.map(size => new ClassRoom(size));
    return rooms;
}