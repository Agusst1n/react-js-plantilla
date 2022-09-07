import React from 'react'

import { Box, Stack, Text, Image, Button} from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const CardWorkTeam = (data) => {
  console.log(data)
  const {workImage,workName, id} = data.data

  const getWorkTeam = () =>{
    console.log(id);
  }
  return (

    <Box w={'240px'} bg={'#702459'} h={'270px'}>
      <Stack justify="flex-start" align="center" w={'100%'} h={'100%'} spacing={7}>
        {workImage && <Image w={'100%'} h={'50%'}objectFit='cover' src={workImage} alt='Dan Abramov'/>}
        {workName && <Text fontSize='lg' color={'white'}>{workName}</Text>}
        <Link to={'/team/' + id}>Go your team</Link>
      </Stack>
    </Box>
  )
}

export default CardWorkTeam