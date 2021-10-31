import React from "react"
import { Box } from "native-base"
const Home = () => {
  return (
    <>
      <Box
        bg="primary.500"
        _text={{
          fontSize: "md",
          fontWeight: "medium",
          color: "warmGray.50",
          letterSpacing: "lg",
        }}
      >
        This is a Box
      </Box>
    </>
  )
}

export default Home;