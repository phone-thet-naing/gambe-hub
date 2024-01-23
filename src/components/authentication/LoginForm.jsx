import {
    Box,
    Button,
    Checkbox,
    Container,
    Divider,
    FormControl,
    FormLabel,
    Heading,
    HStack,
    Input,
    LightMode,
    Link,
    Stack,
    Text,
} from '@chakra-ui/react'
import { useState } from 'react';
// import { Logo } from './Logo'
// import { OAuthButtonGroup } from './OAuthButtonGroup'
// import { PasswordField } from './PasswordField'

const LoginForm = () => {

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    return (
        <LightMode>
            <Container fontFamily={"Poppins"} maxW="lg" py={{ base: '12', md: '24' }} px={{ base: '0', sm: '8' }}>
                <Stack spacing="8">
                    <Stack spacing="6">
                        {/* <Logo /> */}
                        <Stack spacing={{ base: '2', md: '3' }} textAlign="center">
                            <Heading fontFamily={"Poppins"} size={{ base: 'xs', md: 'sm', lg: 'lg' }}>Log into Your Account</Heading>
                            <Text color="fg.muted">
                                Don't have an account? <Link href="#">Sign up</Link>
                            </Text>
                        </Stack>
                    </Stack>
                    <Box
                        py={{ base: '0', sm: '8' }}
                        px={{ base: '4', sm: '10' }}
                        bg={{ base: 'transparent', sm: 'bg.surface' }}
                        boxShadow={{ base: 'none', sm: 'md' }}
                        borderRadius={{ base: 'none', sm: 'xl' }}
                    >
                        <Stack spacing="6">
                            <Stack spacing="5">
                                <FormControl>
                                    <FormLabel htmlFor="email">Email</FormLabel>
                                    <Input id="email" type="email" placeholder='Enter your email' onChange={(e) => setEmail(e.target.value)} />
                                </FormControl>
                                <FormControl>
                                    <FormLabel htmlFor="password">Password</FormLabel>
                                    <Input id="password" type="password" placeholder='Enter your password' onChange={(e) => setPassword(e.target.value)} />
                                </FormControl>
                            </Stack>
                            <HStack justify="space-between">
                                <Checkbox defaultChecked>Remember me</Checkbox>
                                <Button variant="text" size="sm">
                                    Forgot password?
                                </Button>
                            </HStack>
                            <Stack spacing="6">
                                <Button onClick={() => console.log(email, '\n', password)}>Sign in</Button>
                                {/* <HStack>
                                <Divider />
                                <Text textStyle="sm" whiteSpace="nowrap" color="fg.muted">
                                    or continue with
                                </Text>
                                <Divider />
                            </HStack> */}
                                {/* <OAuthButtonGroup /> */}
                            </Stack>
                        </Stack>
                    </Box>
                </Stack>
            </Container>
        </LightMode>
    )
}

export default LoginForm;