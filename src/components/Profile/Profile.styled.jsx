import styled from "@emotion/styled";

export const PWrap = styled.div`
  border: 1px solid #dcdcdc;
  border-radius: 5px;
  overflow: hidden;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
`
export const PDescription = styled.div`
  text-align: center;
  padding: 28px 0;
`
export const PAvatar = styled.img`
  display: inline-block;
  width: 200px;
  height: 200px;
`
export const PName = styled.p`
  margin-top: 20px;
  font-size: 18px;
`
export const PInfo = styled.p`
  margin-top: 8px;
  font-size: 16px;
  color: #7f8792;
`

export const PStats = styled.ul`
  display: flex;
  align-items: center;
  background-color: #f4f9fe;
  border-top: 1px solid #dcdcdc;
`
export const PStatsItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  width: 100%;
  padding: 20px 0;
  :not(:last-of-type) {border-right: 1px solid rgb(220, 220, 220);}
`
export const PLabel = styled.span` {
  color: #7f8792;
  margin-bottom: 5px;
`