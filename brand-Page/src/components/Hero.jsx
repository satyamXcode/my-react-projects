const HeroSection = () => {
    return <>
       <main className="hero container">
           <div className="hero-content">
               <h1>Your Feet Deserve The Best</h1>
               <p>
               It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum
               </p>

               <div className="hero-btn">
                <button>Shop Now</button>
                <button className="secondary-btn">Category</button>
               </div>

               <div className="shopping">
               <p>Also Available On</p>
               <div className="brand-icons">
                <img src="/images/amazon.png" alt="amazon-logo"/>
                <img src="/images/flipkart.png" alt="flipkart-logo"/>
               </div>
               </div>
           </div>
           <div className="hero-image">
           <img src="/images/shoe_image.png" alt="hero-logo"/>
           </div>
       </main>
    </>
}

export default HeroSection;