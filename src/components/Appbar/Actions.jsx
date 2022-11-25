import { Divider, ListItemButton, ListItemIcon, ListItemText } from "@mui/material"

// Styles
import { AppbarList, ActionIconsContainerDesktop, ActionIconsContainerMobile } from "../../styles/Appbar"

// Icons
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart"
import FavoriteIcon from "@mui/icons-material/Favorite"
import PersonIcon from "@mui/icons-material/Person"

export default function Action({matches}){

  const Component = matches
    ? ActionIconsContainerMobile
    : ActionIconsContainerDesktop;

  return (
    <>
      
      <Component>
        <AppbarList type="row">
          <ListItemButton sx={{
            justifyContent: 'center',
          }}>
            <ListItemIcon sx={{
              display: 'flex',
              justifyContent: 'center',
            }}>
              <ShoppingCartIcon />
            </ListItemIcon>
          </ListItemButton>
          <Divider orientation="vertical" flexItem />
          <ListItemButton sx={{
            justifyContent: 'center',
          }}>
            <ListItemIcon sx={{
              display: 'flex',
              justifyContent: 'center',
            }}>
              <FavoriteIcon />
            </ListItemIcon>
          </ListItemButton>
          <Divider orientation="vertical" flexItem />
          <ListItemButton sx={{
            justifyContent: 'center',
          }}>
            <ListItemIcon sx={{
              display: 'flex',
              justifyContent: 'center',
            }}>
              <PersonIcon />
            </ListItemIcon>
          </ListItemButton>
        </AppbarList>
      </Component>
    </>
  )
}