import { useEffect, useReducer, useState, useRef } from 'react'
import styles from './styles'
import { Select, MenuItem, ClickAwayListener, MenuList, Button, Popper, Grow, Paper } from '@mui/material'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown'

const FilterSort = ({ filter, handleChangeSort }) => {
  const [open, setOpen] = useState(false)
  const anchorRef = useRef(null)
  const sortItemList = [
    {
      label: 'Default',
      value: null,
    },
    {
      label: 'Low to high',
      value: 'asc',
    },
    {
      label: 'High to low',
      value: 'desc',
    },
  ]

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen)
  }

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return
    }

    setOpen(false)
  }

  const handleListKeyDown = (event) => {
    if (event.key === 'Tab') {
      event.preventDefault()
      setOpen(false)
    } else if (event.key === 'Escape') {
      setOpen(false)
    }
  }

  const prevOpen = useRef(open)
  useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus()
    }

    prevOpen.current = open
  }, [open])

  return (
    <div>
      <Button
        ref={anchorRef}
        id="composition-button"
        aria-controls={open ? 'composition-menu' : undefined}
        aria-expanded={open ? 'true' : undefined}
        aria-haspopup="true"
        onClick={handleToggle}
        variant="contained"
        sx={{ display: 'flex', justifyContent: 'space-between', minWidth: 140 }}
        endIcon={<ArrowDropDownIcon />}
      >
        {filter.sort.label}
      </Button>
      <Popper
        open={open}
        anchorEl={anchorRef.current}
        role={undefined}
        placement="bottom-start"
        transition
        disablePortal
      >
        {({ TransitionProps, placement }) => (
          <Grow
            {...TransitionProps}
            style={{
              transformOrigin: placement === 'bottom-start' ? 'left top' : 'left bottom',
            }}
          >
            <Paper>
              <ClickAwayListener onClickAway={handleClose}>
                <MenuList
                  autoFocusItem={open}
                  id="composition-menu"
                  aria-labelledby="composition-button"
                  onKeyDown={handleListKeyDown}
                >
                  {sortItemList.map((item) => (
                    <MenuItem
                      onClick={(event) => {
                        handleChangeSort({}, item)
                        handleClose(event)
                      }}
                      key={item.value}
                    >
                      {item.label}
                    </MenuItem>
                  ))}
                  {/* <MenuItem onClick={handleClose}>Profile</MenuItem>
                  <MenuItem onClick={handleClose}>My account</MenuItem>
                  <MenuItem onClick={handleClose}>Logout</MenuItem> */}
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
    </div>
  )
}

export default FilterSort
