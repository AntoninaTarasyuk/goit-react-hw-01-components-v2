import styled from "@emotion/styled";

export const Table = styled.table`
  text-align: center;
  border: 1px solid #dcdcdc;
  border-radius: 5px;
  overflow: hidden;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
`
export const THead = styled.thead`
  background-color: #00bcd5;
`
export const THeadItem = styled.th`
  padding: 15px;
  font-size: 14px;
  color: #ffffff;
  text-transform: uppercase;
`
export const TBody = styled.tbody`
  :nth-child(odd) {background-color: #f4f4f4;}
`
export const TBodyItem = styled.td`
  padding: 15px;
  color: #646464;
  text-transform: capitalize;
`