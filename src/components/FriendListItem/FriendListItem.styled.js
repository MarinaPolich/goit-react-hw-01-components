import styled from "styled-components";

export const FriendItem = styled.li`
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  width: 340px;
  padding: 5px 20px;
  margin-bottom: 10px;
  box-shadow: 0px 0px 10px -1px rgba(0, 0, 0, 0.75);
  border-radius: 2px;
  background-color: #fff;
  color: #000;
`;

export const FriendStatus = styled.span`
  display: block;
  width: 10px;
  height: 10px;
  margin-right: 20px;
  border-radius: 50%;
  ${(props) =>
    props.isOnline ? "background-color: red;" : "background-color: green;"};
`;

export const FriendImg = styled.img`
  width: 48px;
  height: 48px;
  margin-right: 20px;
  border-radius: 2px;
  border: 1px solid #d9d7d7;
`;

export const FriendName = styled.p`
  font-size: 20px;
`;
