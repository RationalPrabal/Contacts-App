import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    InputGroup,
    HStack,
    InputRightElement,
    Stack,
    Button,
    Heading,
    Text,
    useColorModeValue,
    Link,
  } from '@chakra-ui/react';
  import React, { useState } from 'react';
  import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import { useDispatch, useSelector } from 'react-redux';
import { registerUser } from '@/redux/auth/action';
import { useToast } from '@chakra-ui/react';
import { useRouter } from 'next/router';
  
  export default function Signup() {
    const {registered,loading,error}=useSelector(store=>store.authReducer)
    const [showPassword, setShowPassword] = useState(false);
    const dispatch= useDispatch()
    const toast= useToast()
    const nav= useRouter()
    const [cred,setCred]= useState({
        name:"",
        email:"",
        password:""
    })
  const registerUsers=()=>{
dispatch(registerUser(cred))
  }
  React.useEffect(()=>{
if(registered){
  toast({
    title: 'Account created.',
    description: "We've created your account for you.",
    status: 'success',
    duration: 4000,
    isClosable: true,
  })
  nav.push("/login")

}
else if(error){
  toast({
    title: 'Couldn\'t create account',
    status: 'error',
    duration: 4000,
    isClosable: true,
  })
}
  },[registered])
    return (
      <Flex
      className="italic"
        minH={'100vh'}
        align={'center'}
        justify={'center'}
        bg={useColorModeValue('gray.50', 'gray.800')}>
        <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
          <Stack align={'center'}>
            <Heading fontSize={'4xl'} textAlign={'center'}>
              Sign up
            </Heading>
            <Text fontSize={'lg'} color={'gray.600'}>
              to enjoy all of our cool features 🎇
            </Text>
          </Stack>
          <Box
            rounded={'lg'}
            bg={useColorModeValue('white', 'gray.700')}
            boxShadow={'lg'}
            p={8}>
            <Stack spacing={4}>
              <HStack>
                <Box>
                  <FormControl id="firstName" isRequired>
                    <FormLabel>Name</FormLabel>
                    <Input type="text" onChange={(e)=>setCred({...cred,name:e.target.value})} />
                  </FormControl>
                </Box>
           
              </HStack>
              <FormControl id="email" isRequired>
                <FormLabel>Email address</FormLabel>
                <Input type="email" onChange={(e)=>setCred({...cred,email:e.target.value})}/>
              </FormControl>
              <FormControl id="password" isRequired>
                <FormLabel>Password</FormLabel>
                <InputGroup>
                  <Input type={showPassword ? 'text' : 'password'} onChange={(e)=>setCred({...cred,password:e.target.value})} />
                  <InputRightElement h={'full'}>
                    <Button
                      variant={'ghost'}
                      onClick={() =>
                        setShowPassword((showPassword) => !showPassword)
                      }>
                      {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                    </Button>
                  </InputRightElement>
                </InputGroup>
              </FormControl>
              <Stack spacing={10} pt={2}>
             {
              !loading ?    <Button 
              onClick={registerUsers}
          
                  size="lg"
                  bg={'pink.400'}
                  color={'white'}
                  _hover={{
                    bg: 'pink.500',
                  }}>
                  Sign up
                </Button>:   <Button 
              onClick={registerUsers}
                
                  size="lg"
                  bg={'pink.400'}
                  color={'white'}
                  _hover={{
                    bg: 'pink.500',
                  }}>
                  Submitting
                </Button>
             }
              </Stack>
              <Stack pt={6}>
                <Text align={'center'}>
                  Already a user? <Link color={'blue.400'}>Login</Link>
                </Text>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Flex>
    );
  }