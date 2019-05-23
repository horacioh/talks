import React from 'react'
import { Box, Flex, Text } from 'rebass'

export const Footer = props => (
  <Box as="footer" style={{
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0

  }} {...props}>
    <Text textAlign="right" as="p" m={0} p={4} fontSize={3} color="gray">Horacio Herrera - @hhg2288</Text>
  </Box>
)


export const Layout = ({ center, children, ...rest }) => (
  <Box p={5} {...rest}>
    <Flex flex={1} flexDirection="column" alignItems={center ? "center" : "flex-start"}>
      {children}
    </Flex>
    <Footer flex="none" />
  </Box>
)
