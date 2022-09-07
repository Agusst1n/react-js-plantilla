import { Stack, Text } from '@chakra-ui/react'
import React from 'react'
import { useParams } from 'react-router-dom'

const Team = () => {

  const {id} = useParams()
  return (
    <>
    <Stack w={'90%'} h={'90vh'} justify={'center'} align={'center'} bg={'#702459'} direction={'row'}>
      {/* <Text fontSize={'2xl'} color={'white'}>Esta es mi id {id}</Text> */}
      {/* Tasks section*/}
      <Stack w={'40%'} h={'100%'} bg={'gray'}>

        {/* Weather Day */}
        <Stack w={'100%'} h={'40%'} bg={'red'}>

        </Stack>

        {/* Task */}
        <Stack w={'100%'} h={'60%'} bg={'green'}>

        </Stack>

      </Stack>

      {/* Dates */}
      <Stack w={'60%'} h={'100%'} bg={'white'}>

      </Stack>
    </Stack>
    </>
  )
}

export default Team