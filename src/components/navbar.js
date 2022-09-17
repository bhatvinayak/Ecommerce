import { Avatar, Button, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerHeader, DrawerOverlay, Text, useDisclosure, Box, Link } from "@chakra-ui/react"
import { useRef } from "react"
import { HiMenuAlt3 } from "react-icons/hi";
import { FiHeart, FiHome, FiShoppingCart } from "react-icons/fi";
import SearchBar from "./searchbar";
import SocialLinks from "./sociallinks";
import NavLink from "./navLink";
import { BiStore } from "react-icons/bi";
import { FaCog } from "react-icons/fa";

const Navbar = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const btnRef = useRef();

    return(
        <>
            <Button href="/"  me={[ "7px", "5px", 0 ]} fontSize="20px" bgColor="white" border="none" onClick={onOpen} minW="auto">
                <HiMenuAlt3 />
            </Button>

            <Drawer isOpen={isOpen} placement="right" onClose={onClose} finalFocusRef={btnRef}>
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerCloseButton py="4" px="3" m="3" border="1px" borderColor="gray.100" borderRadius="0" />
                    <DrawerHeader  my="2" display="flex" alignItems="center">
                        <Avatar size="sm" me="2" /> 
                        <Box>
                            <Link href="/dashboard" fontSize="14px">Daniel Marshal</Link>
                            <Text fontSize="12px">Personal balance: $0</Text>
                        </Box>
                    </DrawerHeader>
                    <DrawerBody fontSize="14px">

                        <SearchBar />

                        <Box fontSize="15px" my="4" mx="1">
                            <Box fontWeight='600' my="2">
                                <NavLink navLocation={"Home"}>
                                    <FiHome />
                                </NavLink> 
                            </Box>       
                            <Box fontWeight='600' my="2">
                                <NavLink navLocation={"Shop"}>
                                    <BiStore />
                                </NavLink> 
                            </Box>    
                            <Box fontWeight='600' my="2">
                                <NavLink navLocation={"Cart"}>
                                    <FiHome />
                                </NavLink> 
                            </Box>        
                            <Box fontWeight="600" my="2">      
                                <NavLink navLocation={"Wishlist"}>
                                    <FiShoppingCart />
                                </NavLink>
                            </Box>    
                            <Box fontWeight="600" my="2">      
                                <NavLink navLocation={"Account"}>
                                    <FiHeart />
                                </NavLink>
                            </Box>    
                            <Box fontWeight="600" my="2">      
                                <NavLink navLocation={"Settings"}>
                                    <FaCog />
                                </NavLink>
                            </Box>
                        </Box>
                        

                        <Box py="2" mt="4">
                            <Text fontWeight="600">Info@example.com</Text>
                            <SocialLinks />
                        </Box>
                    </DrawerBody>
                </DrawerContent>
            </Drawer>
        </>
    )
}

export default Navbar;