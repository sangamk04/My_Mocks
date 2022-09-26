import { Box, Button, Input, Stack } from '@chakra-ui/react';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getLogin } from '../Redux/AuthReducer/action';

const Login = () => {
  const dispatch = useDispatch();
  const logindata = useSelector((state) => state.login);

  let [data, setData] = useState({});
  const navigate = useNavigate();
  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };
  const handleLogin = () => {
    getLogin({ dispatch, data });
  };
  return (
    <>
     
      <Box width="20%" m="auto">
        <Box fontSize="25px" fontWeight="bold" color="teal" m={5}>
         PLEASE LOGIN 
        </Box>
        <Stack spacing={3}>
          <Input
            placeholder="email"
            name="email"
            onChange={(e) => handleChange(e)} />

          <Input
          
            placeholder="password"
            name="password"
            onChange={(e) => handleChange(e)} />

          <Button borderColor onClick={handleLogin}>
            Login
          </Button>
        </Stack>
      </Box>
    </>
  );
};

export default Login;