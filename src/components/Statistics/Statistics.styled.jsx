import styled from "@emotion/styled";

function getRandomColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
};

export const SWrap = styled.div`
  border: 1px solid rgb(220, 220, 220);
  border-radius: 5px;
  overflow: hidden;
  text-align: center;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
`
export const STitle = styled.h2`
  margin: 30px 0;
  font-size: 16px;
  color: #373737;
  text-transform: uppercase;
`
export const SList = styled.ul`
  display: flex;
`
export const SItem = styled.li`
  background-color: ${getRandomColor};
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 12px 0;
  width: 100%;
`
export const SLabel = styled.span`
  font-size: 14px;
  color: #ffffff;
`
export const SPercentage = styled.span`
  font-size: 16px;
  color: #ffffff;
`