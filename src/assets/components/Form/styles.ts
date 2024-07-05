
import { Flex, css } from "@chakra-ui/react";
import styled from "@emotion/styled";

export const CusttomForm = styled(Flex)(() =>
  css({
    width: "100%",
    maxWidth: "500px",
    justifyContent: "center",
    flexDirection: "column",
    margin: "1rem 1rem",

    gap: "1rem"
  })
) as typeof Flex;


export const  ConntainerForm = styled.form({
  display: "flex",
  gap: '.5rem',
})