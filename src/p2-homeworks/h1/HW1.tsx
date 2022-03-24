import React from "react";
import Message from "./Message";

const messageData = {
  avatar:
    "https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg",
  name: "Some Name",
  message:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel eligendi itaque ipsum cupiditate nisi amet laboriosam recusandae laborum officiis tempora atque iure at provident perferendis, harum accusantium? Iure, fugiat repudiandae?",
  time: "22:00"
};

function HW1() {
  return (
    <div>
      <hr />
      homeworks 1{/*should work (должно работать)*/}
      <Message
        avatar={messageData.avatar}
        name={messageData.name}
        message={messageData.message}
        time={messageData.time}
      />
      <hr />
      {/*для личного творчества, могу проверить*/}
      {/*<AlternativeMessage/>*/}
      <hr />
    </div>
  );
}

export default HW1;
