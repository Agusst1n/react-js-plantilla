// import React from 'react';
import { useContext, useEffect,useRef } from 'react';
import CardWorkTeam from '../../components/CardWorkTeam/CardWorkTeam';
import AgendaContext from '../../context/AgendaContext';
import WorkTeamContext from '../../context/WorkTeamContext';

import { Box, Button, Stack, Text, Modal, ModalFooter, ModalOverlay, ModalContent , ModalBody, ModalHeader, ModalCloseButton, FormControl, FormLabel, useDisclosure, Input } from '@chakra-ui/react'

import { FaPlus } from 'react-icons/fa'


const Home = () => {

  const { username } = useContext(AgendaContext);
  const {
    createWorkTeam,
    createTeam,
    saveWorkTeam,
    worksTeams,
    isOpen,
    onOpen,
    onClose,
    initialRef,
    finalRef
  } = useContext(WorkTeamContext);

  console.log(worksTeams, 'teams');


  useEffect(() => {}, [worksTeams]);
  return (
    <Stack minHeight={'90vh'} minWidth={'100%'} align="center" justify={'center'} direction={'column'} spacing={10} position="relative" overflowX={'hidden'}>
      <Stack w={'100%'} h={'50px'} justify={'center'} align={'flex-start'} position="absolute" top={'10px'} left={'10px'}>
        <Text fontSize='2xl' color={'white'}>Hola {username}! Bienvenido :)</Text>
      </Stack>
      <Stack w={'100%'} h={'100%'} direction={'row'} align='center' justify={'flex-start'} pl={'10px'}>
        <Box w={'240px'} bg={'#702459'} h={'270px'}>
          <Stack align={'center'} justify={'center'} w={'100%'} h={'100%'} spacing={6}>
            <Text fontSize='2xl' color={'white'}>Create your team</Text>
            <Button colorScheme='#702459' variant='ghost' onClick={onOpen}>
              <FaPlus size={35} color={'white'}/>
            </Button>
          </Stack>
        </Box>

        {worksTeams?.map((team) => (
          <CardWorkTeam data={team} key={team.id} />
        ))}
      </Stack>

      {/* Modal */}


      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Create your account</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>

            <form onSubmit={saveWorkTeam} style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              gap:'20px'
            }}>
              <Input ref={initialRef} placeholder='First name' />
              <Input placeholder='Last name' />
              <Box>
                <Button colorScheme='blue' mr={3} type='submit'>Save</Button>
                <Button onClick={onClose}>Cancel</Button>
              </Box>
            </form>
          </ModalBody>
        </ModalContent>
      </Modal>
    </Stack>
  );
};

export default Home;
