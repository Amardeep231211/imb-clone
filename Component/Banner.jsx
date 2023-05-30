import { Box ,styled} from '@mui/material'
import React from 'react'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css';



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

const StyledBanner = styled('img')({
    width: '100%'
})

const Poster = styled('img')({
    width: 165,
    position: 'absolute',
    left: 10,
    bottom: 0,
    transform: 'translateY(50%)'
})

function Banner({movies}) {
  return (
    <Box style={{ width: '80%' }}>
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
  >
    {
                    movies.map(movie => (
                        <StyledBanner key={movie.id} src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`} />
                    ))
                }

  </Carousel>;
        </Box>
  )
}

export default Banner