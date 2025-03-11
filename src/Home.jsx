import Carousel from 'react-bootstrap/Carousel';
import dance from './images/dance.jpg';
import   imag from './images/imag.jpg';
import holi from './images/holi.png';
import './Styles/Style.css';

const images = [
    { src: './images/dance.jpg', alt: 'Dance', caption: 'Dance Event', description: 'Join us for an amazing dance performance!' },
    { src: './images/imag.jpg', alt: 'Concert', caption: 'Concert', description: 'Get ready for a sensational concert!' },
    { src: './images/holi.png', alt: 'Holi', caption: 'Holi Festival', description: 'Celebrate the vibrant festival of colors!' },
    { src: './images/dance.jpg', alt: 'Dance 2', caption: 'Dance Performance', description: 'A night of spectacular dance performances!' },
    { src: './images/imag.jpg', alt: 'Concert 2', caption: 'Live Concert', description: 'Enjoy live music from top artists!' },
    { src: './images/holi.png', alt: 'Holi 2', caption: 'Holi Celebration', description: 'Experience the joyous celebration of Holi!' }
  ];

const Home = () => {
    return (
        <>
            <Carousel>
                <Carousel.Item interval={1500}>
                    <img src={dance} style={{ width: "100%", height: "600px" }} />
                    <Carousel.Caption>
                        <h3>Dance</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={1500}>
                    <img src={imag} style={{ width: "100%", height: "600px" }} />
                    <Carousel.Caption>
                        <h3>Concert</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={1500}>
                    <img src={holi} style={{ width: "100%", height: "600px" }} />
                    <Carousel.Caption>
                        <h3>Holi</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>

             <h1 style={{ textAlign: 'center', marginBottom: '20px' }}>Upcoming Events</h1>

      {/* Card container */}
      <div className="cardcontainer">
        {images.map((image, index) => (
          <div className="card" key={index}>
            <img src={dance} alt={image.alt} />
            <h3>{image.caption}</h3>
            <p>{image.description}</p>
          </div>
        ))}
      </div>
{/* <div>
            
            <h1>Events here Please Book Your Ticket But firstly Register......</h1>
                <div className='cardcontainer'> 
         
                <div className='card'>
                <div     >
                    <img src={dance} alt="" width={"200px"} height={"300px"} />
                </div>

                <div > 
                    <img src={imag} alt="" width={"200px"} height={"300px"} />
                </div>

                <div>
                    <img src={holi} alt="" width={"200px"} height={"300px"} />
                </div>     
            </div>
         
        
            <div className='card1'>
                <div >
                    <img src={dance} alt="" width={"200px"} height={"300px"} />
                </div>
                <div>
                    <img src={holi} alt="" width={"200px"} height={"300px"} />
                </div>
                <div>
                    <img src={imag} alt="" width={"200px"} height={"300px"} />
                </div>
                </div>
                <div className='card2'>
                <div>
                    <img src={holi} alt="" width={"200px"} height={"300px"} />
                </div> 

                <div>
                    <img src={dance} alt="" width={"200px"} height={"300px"} />
                </div>
                <div>
                    <img src={holi} alt="" width={"200px"} height={"300px"} />
               
                </div> 
            
               
                </div>
                </div>
                </div> */}
                
        </>
        
    )
}
export default Home;