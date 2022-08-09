import styled from "@emotion/styled";

export const FWrap = styled.div`
  display: flex;
  align-items: center;
`
export const FName = styled.p`
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
  background-color: ${p => (p.isOnline ? 'green' : 'red')};
`