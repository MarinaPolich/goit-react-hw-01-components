import styled from "styled-components";

export const ProfileBox = styled.div`
  width: 380px;
  text-align: center;
  color: grey;
  border-radius: 10px;
  box-shadow: 0px 0px 10px -1px rgba(0, 0, 0, 0.75);
  margin-bottom: 20px;
`;

export const Description = styled.div`
  padding: 40px 20px;
  background-color: #fff;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  border-top: 1px solid grey;
  border-left: 1px solid grey;
  border-right: 1px solid grey;
`;

export const Avatar = styled.img`
  display: block;
  width: 200px;
  height: 200px;
  border: 1px solid #d9d7d7;
  border-radius: 50%;
  margin-left: auto;
  margin-right: auto;
`;

export const AvatarName = styled.h1`
  color: #000;
  margin-top: 20px;
  font-size: 16px;
`;

export const Text = styled.p`
  margin-top: 10px;
`;

export const StatsList = styled.ul`
  display: flex;
  flex-wrap: nowrap;
  background-color: #d9d6d6;
`;

export const StatsItem = styled.li`
  width: calc(100% / 3 + 2px);
  padding: 20px;
  border: 1px solid gray;
  text-align: center;
`;

export const StatsLabel = styled.span`
  display: block;
`;

export const StatsQuantity = styled.span`
  display: block;
  color: #000;
  margin-top: 5px;
  font-size: 16px;
`;
