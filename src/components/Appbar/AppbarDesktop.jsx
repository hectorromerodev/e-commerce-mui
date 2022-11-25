import { ListItemButton, ListItemIcon, ListItemText } from '@mui/material';

// Icons
import SearchIcon from '@mui/icons-material/Search';

// Styles
import {
  AppbarContainer, AppbarHeader, AppbarList,
} from '../../styles/Appbar';

// Components
import Actions from './Actions';

export default function AppbarDesktop({matches}) {
  
  return ( 
    <AppbarContainer>
      <AppbarHeader>Dulcesa</AppbarHeader>
      <AppbarList type="row">
        <ListItemText primary='Home' />
        <ListItemText primary='Categories' />
        <ListItemText primary='Products' />
        <ListItemText primary='Contact Us' />
        <ListItemButton sx={{
          justifyContent: 'center',
        }}>
          <ListItemIcon sx={{
            display: 'flex',
            justifyContent: 'center',
          }}>
            <SearchIcon />
          </ListItemIcon>
        </ListItemButton>
      </AppbarList>
      <Actions matches={matches} />
    </AppbarContainer>
  )

}