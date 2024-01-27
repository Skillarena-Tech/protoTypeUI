import logo from "@/assets/images/dark-theme-logo.png"
import Searchbar from '@/components/SearchBar/Searchbar'
import { useAppContext } from '@/hooks/useAppContext'
import { themeColor } from '@/utils/theme'
import { Avatar, Button, IconButton, Menu, MenuItem, Tooltip } from '@mui/material'
import React from "react"
import { Fragment, useEffect } from 'react'

type HeaderProps = {
    showLogo: boolean,
    showSearchBar: boolean
}

const Header = ({ showLogo = false, showSearchBar = false }: HeaderProps) => {
    const { user, isMobile, setUser, navigate, setSearchQuery } = useAppContext()
    useEffect(() => {
        const token = localStorage.getItem('token')
        if (token) {
            setUser('authenticated')
        }
    }, [])

    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleLogout = () => {
        localStorage.removeItem('token')
        setUser('')
        navigate("/")
    }
    return (
        <Fragment>
            <div className="d-flex justify-content-between  align-items-center ">
                {showLogo && (<div className={`${(!showSearchBar || isMobile) ? 'h-50 w-50' : 'h-25 w-25'}`} style={{ cursor: 'pointer' }} onClick={() => {
                    navigate('/')
                    setSearchQuery('')
                }}>
                    <img src={logo} alt="" className='h-100 w-100' />
                </div>)}
                {(!isMobile && showSearchBar) && (
                    <div className='w-50 me-5'>
                        <Searchbar />
                    </div>
                )}
                <div className={` me-4 ${!(showLogo) && 'mt-4 ms-auto'}`}>
                    {user ?
                        <Fragment>

                            <Tooltip title="Profile">
                                <Fragment>
                                    <IconButton onClick={handleClick}>
                                        <Avatar src="https://avatar.iran.liara.run/public/30" sx={{ height: "50px", width: "50px" }} />
                                    </IconButton>
                                    <Menu
                                        id="basic-menu"
                                        anchorEl={anchorEl}
                                        open={open}
                                        onClose={handleClose}
                                        MenuListProps={{
                                            'aria-labelledby': 'basic-button',
                                        }}
                                    >
                                        <MenuItem onClick={handleLogout}>Logout</MenuItem>
                                    </Menu>
                                </Fragment>
                            </Tooltip>

                        </Fragment>
                        :
                        <Button sx={{
                            backgroundColor: themeColor
                        }}
                            color="success" variant="contained" onClick={() => {
                                navigate('/login')
                            }}>Login</Button>
                    }
                </div>
            </div>
        </Fragment>
    )
}

export default Header