import { useAppContext } from '@/hooks/useAppContext';
import { IconButton, InputAdornment, TextField, Tooltip } from '@mui/material';
import React, { Fragment } from 'react';
import { IoSearchOutline } from "react-icons/io5";


const Searchbar = () => {
    const { searchQuery, searchJobs, setOpenLoaderModal } = useAppContext()


    const handleSubmit = (e: React.SyntheticEvent<HTMLFormElement>) => {
        e.preventDefault()
        const data = new FormData(e.currentTarget)
        const query = data.get('searchString')
        if (query) {
            setOpenLoaderModal(true)
            searchJobs(query,false)
        }
    }


    return (
        <Fragment>
            <form onSubmit={handleSubmit}>
                <TextField
                    className='w-100'
                    placeholder="Dream Jobs Near Me ..."
                    autoComplete='off'
                    defaultValue={searchQuery}
                    sx={{
                        backgroundColor: "#fff",
                        '& MuiInputBase-input': {
                            backgroundColor: "#fff",
                            borderRadius: '22px',
                            color: "#fff"
                        },
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