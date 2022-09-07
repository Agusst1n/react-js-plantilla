import React, { useContext, useState,useEffect } from 'react';

import icon from '../../assets/punk.jpg';
import AgendaContext from '../../context/AgendaContext';
import {
  Box,
  Stack,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
  Avatar,
  Button
} from '@chakra-ui/react';

const Navbar = () => {
  const {
    closeSesion,
    handleClose,
    modal,
    getSesion,
    handleModal,
    username,
    handleSubmitLogin
  } = useContext(AgendaContext);
  

  useEffect(() => {
    getSesion();
  }, [closeSesion, username]);

  return (
    <>
      <Stack
        h="60px"
        w="100%"
        bg="#702459"
        justify={'center'}
        align={'flex-end'}
        pr={'10px'}
      >
        <Box display={closeSesion ? 'none' : 'block'}>
          <Menu>
            <MenuButton>
              <Avatar name='Dan Abrahmov' src={icon} />
            </MenuButton>
            <MenuList>
              <MenuGroup title="Profile">
                <MenuItem>{username}</MenuItem>
                <MenuItem>Payments </MenuItem>
              </MenuGroup>
              <MenuDivider />
              <MenuGroup title="Help">
                <MenuItem>Docs</MenuItem>
                <MenuItem onClick={handleClose}>
                    Close sesion
                </MenuItem>
              </MenuGroup>
            </MenuList>
          </Menu>
        </Box>
      </Stack>
    </>
  );
};

export default Navbar;
