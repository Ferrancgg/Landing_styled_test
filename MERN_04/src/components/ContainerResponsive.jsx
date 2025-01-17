import styled from "styled-components"

const ContainerResponsive=styled.div`

/* width: 100%; */
  /* max-width: 1200px; */
  /* margin: 0 auto; */
  padding: ${(props) => props.theme.spacing.sm};

  @media (max-width: ${(props) => props.theme.breakpoints.md}) {
    padding: ${(props) => props.theme.spacing.sm};
  }

  @media (max-width: ${(props) => props.theme.breakpoints.sm}) {
    padding: ${(props) => props.theme.spacing.xs};
  }


`

export default ContainerResponsive