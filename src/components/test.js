
import { Box } from '@chakra-ui/react'
import React from 'react'

const Test = (props) => {
    return (
        <Box bg='#eee' color= 'purple.400'>
          Hey , i'm {props.name}
          Hey , I'm {props.age}
          Hey , Im {props.gender}
        </Box>
    )
}

export default Test