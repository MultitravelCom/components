export const StyledPrice = styled.div`
  overflow: hidden;
  margin-bottom: 4rem;
  margin-top: 1rem;
  display: flex;
  position: absolute;
  width: initial;
  height: 94px;
  bottom: 2px;
  right: 28px;
  flex-direction: column;
  justify-content: space-between;
  @media (max-width: 768px) {
    height: 86px;
    bottom: -9px;
    right: 26px;
  }
`;