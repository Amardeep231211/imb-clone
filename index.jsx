
import React from 'react'
import Navbar from './Component/Header/Navbar'
import { Box} from '@mui/material'
import styled from '@emotion/styled'
import { useState ,useEffect} from 'react'

//componenet
import Banner from './Component/Banner'
import UpNext from './Component/UpNext'
import Slides from './Component/Slides'

//styling
const Container = styled(Box)`
    padding: 0 115px !important;
    padding: 20px;
`;

const Wrapper = styled(Box)`
    display: flex;
    padding: 20px 0;
`;

function Home() {

const [movies,setMovies]=useState([]);


  return (
    <>
    <Navbar/>
    <Container>
                <Wrapper>
                    <Banner movies={movies} />
                    <UpNext movies={movies} />
                </Wrapper>
                <Slides movies={movies} />
                <Slides movies={movies} />
                <Slides movies={movies} />
                <Slides movies={movies} />
                <Slides movies={movies} />
            </Container>

            </>

  )
}

export default Home