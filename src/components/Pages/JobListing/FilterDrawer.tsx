/* eslint-disable @typescript-eslint/no-explicit-any */
import { Accordion, AccordionDetails, AccordionSummary, Box, Button, Drawer, IconButton, List, ListItemText, TextField, Tooltip } from '@mui/material'
import { Fragment, useState } from 'react'
import { MdOutlineExpandMore } from "react-icons/md";
import { IoMdClose } from "react-icons/io";
import { useAppContext } from '@/hooks/useAppContext';
import { themeColor } from '@/utils/theme';

export const FilterDrawer = () => {
    const [jobTitle, setJobTitle] = useState('')
    const [pinCode, setPinCode] = useState('')
    const [sector, setSector] = useState('')
    const [city, setCity] = useState('')
    const { openFilterDrawer, setOpenFilterDrawer, setOpenLoaderModal, searchQuery, searchJobs } = useAppContext();

    const handleApply = async () => {
        setOpenLoaderModal(true)
        if (jobTitle === '' && pinCode == '' && sector == '' && city === '') {
            searchJobs(searchQuery, false)
            setOpenFilterDrawer(false)
            return
        }
        else {
            const additionalQuery = searchQuery + " " + jobTitle + " " + pinCode + " " + sector + " " + city
            console.log(additionalQuery)
            setOpenFilterDrawer(false)
            searchJobs(additionalQuery, true)

        }
    }
    const clearFilters = () => {
        setJobTitle('')
        setPinCode('')
        setSector('')
        setCity('')
    }
    return (
        <Fragment>
            <Drawer open={openFilterDrawer} anchor={'right'}>
                <Box sx={{ width: 250 }} className="p-2">
                    <div className="d-flex justify-content-between align-items-center py-3 pe-2 ">
                        <div><Tooltip title="Close">
                            <IconButton onClick={() => { setOpenFilterDrawer(false) }}>
                                <IoMdClose />
                            </IconButton>
                        </Tooltip></div>
                        <div className="text-success"><Button color="success" onClick={clearFilters} >Clear Filter</Button>
                        </div>
                    </div>
                    <List>
                        <Accordion>
                            <AccordionSummary expandIcon={<MdOutlineExpandMore />}>
                                <ListItemText primary="Job Title" />
                            </AccordionSummary>
                            <AccordionDetails>
                                <TextField value={jobTitle} placeholder="Search Job Title" onChange={(e: any) => { setJobTitle(e.target.value) }} name="jobTitle" />
                            </AccordionDetails>
                        </Accordion>
                        <Accordion>
                            <AccordionSummary expandIcon={<MdOutlineExpandMore />}>
                                <ListItemText primary="Pin Code" />
                            </AccordionSummary>
                            <AccordionDetails>
                                <TextField value={pinCode} placeholder="Enter Pin Code" onChange={(e: any) => { setPinCode(e.target.value) }} name="pinCode" />
                            </AccordionDetails>
                        </Accordion>
                        <Accordion>
                            <AccordionSummary expandIcon={<MdOutlineExpandMore />}>
                                <ListItemText primary="Sector" />
                            </AccordionSummary>
                            <AccordionDetails>
                                <TextField value={sector} placeholder="Search for Sector" onChange={(e: any) => { setSector(e.target.value) }} name="sector" />
                            </AccordionDetails>
                        </Accordion>
                        <Accordion>
                            <AccordionSummary expandIcon={<MdOutlineExpandMore />}>
                                <ListItemText primary="City" />
                            </AccordionSummary>
                            <AccordionDetails>
                                <TextField value={city} placeholder="Search for City" onChange={(e: any) => { setCity(e.target.value) }} name="city" />
                            </AccordionDetails>
                        </Accordion>
                    </List>
                    <div className=" w-100 mt-3">
                        <div className="text-center">
                            <Button color="success" variant="contained" onClick={handleApply} sx={{ backgroundColor: themeColor }}>Apply Filters</Button>
                        </div>
                    </div>
                </Box>
            </Drawer>
        </Fragment >
    )
}
