import styled from "@emotion/styled";

export const FList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin: 0;
  padding: 0;
  list-style: none;
`
export const FItem = styled.li`
  display: flex;
  align-items: center;
  padding: 20px;
  border: 1px solid rgb(220, 220, 220);
  border-radius: 5px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
`
export const FName = styled.p`
  margin: 0;
  margin-left: 20px;
  font-size: 20px;
  font-weight: bold;
`
export const FStatus = styled.span`
  display: block;
  width: 20px;
  height: 20px;
  margin-right: 20px;
  border-radius: 50%;
`