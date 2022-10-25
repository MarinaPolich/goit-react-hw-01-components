import styled from "styled-components";

export const StatisticsBox = styled.section`
  display: block;
  width: 380px;
  background-color: #fff;
  text-align: center;
  padding-top: 20px;
  margin-bottom: 20px;
`;

export const StatList = styled.ul`
  display: flex;
  flex-wrap: nowrap;
  margin-top: 20px;
`;

export const StatItem = styled.li`
  width: calc(100% / 5);
  padding: 10px;
  text-align: center;
  color: #fff;
  /* background-color: ${getRandomColor()}; */
`;

export const StatPercentage = styled.span`
  display: block;
  margin-top: 5px;
  font-size: 20px;
`;

export function getRandomColor() {
  var letters = "0123456789ABCDEF";
  var color = "#";
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
