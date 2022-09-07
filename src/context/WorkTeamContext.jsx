import { useDisclosure } from "@chakra-ui/react";
import { useState, useRef, createContext } from "react"

import { v4 as uuidv4 } from 'uuid';

const WorkTeamContext = createContext()

const WorkTeamProvider = ({ children }) => {

  const [createTeam, setCreateTeam] = useState(false)
  const [worksTeams, setWorksTeams] = useState([])

  const { isOpen, onOpen, onClose } = useDisclosure()

  const initialRef = useRef(null)
  const finalRef = useRef(null)

  const createWorkTeam = () => {
    setCreateTeam(!createTeam)
    console.log('open');
  }

  const saveWorkTeam = (e) => {

    e.preventDefault()
    console.log('ready')
    let workName = e.target[0].value
    let workImage = e.target[1].value

    if(workName === '' || workImage === ''){
      console.log('vacio');
    }else{

      setWorksTeams([...worksTeams,{
          id: uuidv4(),
          workName,
          workImage
      }])
      setCreateTeam(!createTeam)

      onClose()
    }

    // console.log(workName, 'name', workImage, 'Img');
  }

  return (
    <WorkTeamContext.Provider
      value={{
        createTeam,
        setCreateTeam,
        createWorkTeam,
        worksTeams,
        setWorksTeams,
        saveWorkTeam,
        isOpen,
        onOpen,
        onClose,
        initialRef,
        finalRef
    }}
    >
      {children}
    </WorkTeamContext.Provider>
  )
}

export { WorkTeamProvider }

export default WorkTeamContext