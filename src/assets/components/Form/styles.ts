import { Flex, css } from "@chakra-ui/react";
import styled from "@emotion/styled";

export const CustomForm = styled(Flex)(() =>
  css({
    width: "100%",
    maxWidth: "450px",
    justifyContent: "center",
    flexDirection: "column",
    margin: "1rem 1rem",
  })
) as typeof Flex;
