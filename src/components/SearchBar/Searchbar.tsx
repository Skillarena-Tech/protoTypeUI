import { useAppContext } from '@/hooks/useAppContext';
import { IconButton, InputAdornment, TextField, Tooltip } from '@mui/material';
import React, { Fragment } from 'react';
import { IoSearchOutline } from "react-icons/io5";


const Searchbar = () => {
    const { searchQuery, setSearchQuery, setOpenLoaderModal, getUserLocation } = useAppContext()


    const handleSubmit = (e: React.SyntheticEvent<HTMLFormElement>) => {
        const data = new FormData(e.currentTarget)
        e.preventDefault()
        if (data.get('searchString')) {
            setOpenLoaderModal(true)
            getUserLocation()
        }
        // navigate('/search')
    }



    return (
        <Fragment>
            <form onSubmit={handleSubmit}>
                <TextField
                    className='w-100'
                    placeholder="Dream Jobs Near Me ..."
                    sx={{
                        '& .MuiOutlinedInput-root': {
                            '& fieldset': {
                                borderColor: '#05e189',
                                borderRadius: '22px',
                                borderWidth: 2
                            },
                            '&:hover fieldset': {
                                borderColor: 'rgba(4, 186, 113, 1)',
                                borderWidth: 2
                            },
                            '&.Mui-focused fieldset': {
                                borderColor: 'rgba(4, 186, 113, 1)',
                            },
                        },
                    }}
                    value={searchQuery}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                        const { value } = e.target;
                        setSearchQuery(value as string)
                    }}
                    autoFocus={true}
                    InputProps={{
                        endAdornment: (
                            <InputAdornment position="end">
                                <Tooltip title="Search">
                                    <IconButton type="submit">
                                        <IoSearchOutline />
                                    </IconButton>
                                </Tooltip>
                            </InputAdornment>
                        )
                    }}
                    name='searchString'
                />
            </form>
        </Fragment>
    )
}

export default Searchbar