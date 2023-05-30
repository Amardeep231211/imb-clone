import React from 'react'
import Navbar from '../Component/Header/Navbar'
import "react-multi-carousel/lib/styles.css";
import Carousel from 'react-multi-carousel';

import { useLocation } from 'react-router-dom';
import { Box, Typography, Divider, styled } from '@mui/material'
import MoviesList from '../Component/MoviesList';

import getCategoryMovies from '../Service/api';
import { POPULAR_API_URL, UPCOMING_API_URL, TOPRATED_API_URL, type } from '../Constant/constant';


const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 1,
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 1,
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
    }
};

const Component = styled(Box)`
    width: 83%;
    margin: auto;
`;

const Container = styled(Box)`
    background: #F5F5F5;
    text-align: left;
    padding: 10px;
`

const Banner = styled('img')({
    height: 450,
    width: '100%'
})



function CatagoryMovies() {

    const [movies, setMovies] = useState([]);

    const { search } = useLocation();
    
    useEffect(() => {
        const getData = async (API_URL) => {
            let response = await getCategoryMovies(API_URL);
            setMovies(response.results);
        }

        let API_URL = '';

        if (search.includes('popular')) {
            API_URL = POPULAR_API_URL;
        } else if (search.includes('upcoming')) {
            API_URL = UPCOMING_API_URL;
        } else if (search.includes('toprated')) {
            API_URL = TOPRATED_API_URL;
        }

        getData(API_URL);
    }, [search])

  return (
    <>
    <Navbar/>
    <Componenet>
    <Carousel
      swipeable={false}
      draggable={false}
      showDots={true}
      responsive={responsive}
      ssr={true} // means to render carousel on server-side.
      infinite={true}
      autoPlay={true}
      autoPlaySpeed={3000}
      keyBoardControl={true}
      customTransition="all .5"
      transitionDuration={500}
      containerClass="carousel-container"
      removeArrowOnDeviceType={["tablet", "mobile"]}
      dotListClass="custom-dot-list-style"
      itemClass="carousel-item-padding-40-px"
            >  {
                movies.map(movie => (
                    <Banner key={movie.id} src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`} />
                ))
            }
     </Carousel>;
     <Container>
                    <Typography variant="h6">IMDb Charts</Typography>
                    <Typography variant="h4">{type[search.split('=')[1]]} Movies</Typography>
                    <Typography style={{ fontSize: 12, margin: 5 }}>As determined by IMDb Users</Typography>
                    <Divider />
                    <MoviesList movies={movies} />
                </Container>
     </Componenet>
     </>
  )
}

export default CatagoryMovies