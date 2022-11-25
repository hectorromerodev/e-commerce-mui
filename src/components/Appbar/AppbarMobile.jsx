import { IconButton } from '@mui/material';

// Icons
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
// Components
import { AppbarContainer, AppbarHeader, AppbarList, ActionIconsContainerMobile } from '../../styles/Appbar';

export default function AppbarMobile({matches}) {
  
  return (
    <>
      <AppbarContainer>
        <IconButton>
          <MenuIcon />
        </IconButton>
        <AppbarHeader textAlign={'center'} variant="h4">
          Dulcesa
        </AppbarHeader>
        <IconButton>
          <SearchIcon />
        </IconButton>
      </AppbarContainer>
    </>
  )

}