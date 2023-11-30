import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';


// React Responsive Carousel

export default function HeroSection() {
  return (
    <Carousel
        autoPlay={true}
        interval={1800}
        showThumbs={false}
        infiniteLoop={true}
        
    >
                <div>
                    <img className="w-full h-[50rem] object-cover " src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" />
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img className="w-full h-[50rem] object-cover " src="https://plus.unsplash.com/premium_photo-1678240508014-d1ab7345bfe6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1942&q=80" />
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img className="w-full h-[50rem] object-cover " src="https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" />
                    <p className="legend">Legend 3</p>
                </div>
                <div>
                    <img className="w-full h-[50rem] object-cover " src="https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" />
                    <p className="legend">Legend 3</p>
                </div>
                <div>
                    <img className="w-full h-[50rem] object-cover " src="https://media.istockphoto.com/id/1300746302/photo/agriculture-and-technology-agritech-environment-communication-network.jpg?s=2048x2048&w=is&k=20&c=CqsVkUSTbhkQMlrTXgA2uLoCkrP87NpQpe4FAP1SAN8=" />
                    <p className="legend">Legend 3</p>
                </div>
            </Carousel>
  )
}
