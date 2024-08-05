import React from "react";
import "./banner.css";

export default function Banner() {
  return (
    <>
      <div
        id="carouselExampleCaptions"
        className="carousel slide carousel-fade"
        data-bs-ride="false"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="row">
              <div className="col-lg-6">
                <div className="banner-contain">
                  <h5>11</h5>
                  <h5>
                    Collaborate with us to achieve your health goals with the
                    power of plants
                  </h5>
                  <p>
                    Concentration and Memory. Being around plants helps people
                    concentrate better in the home and workplace. Studies show
                    that tasks performed while under.
                  </p>
                  <button className="btn btn-book">Book Now</button>
                </div>
              </div>

              <div className="col-lg-6">
                <div className="banner-img">
                  <img src="img/slide-img.png" alt="" />
                  <div className="banner-contain">
                    <h5>Highest Quality Marijuana Seeds</h5>
                    <p>
                      Habitasse platea dictumst quisque sagittis purus sit.
                      Dignissim enim sit amet venenatis. In est ante in nibh
                      maur is cursus mattis. Euismod elementum nisi quis
                      eleifend quam adipiscing
                    </p>
                    <button className="btn">Book Now</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="row">
              <div className="col-lg-6">
                <div className="banner-contain">
                  <h5>22</h5>
                  <h5>
                    Collaborate with us to achieve your health goals with the
                    power of plants
                  </h5>
                  <p>
                    Concentration and Memory. Being around plants helps people
                    concentrate better in the home and workplace. Studies show
                    that tasks performed while under.
                  </p>
                  <button className="btn">Book Now</button>
                </div>
              </div>

              <div className="col-lg-6">
                <div className="banner-img">
                  <img src="img/slide-img.png" alt="" />
                  <div className="banner-contain">
                    <h5>Highest Quality Marijuana Seeds</h5>
                    <p>
                      Habitasse platea dictumst quisque sagittis purus sit.
                      Dignissim enim sit amet venenatis. In est ante in nibh
                      maur is cursus mattis. Euismod elementum nisi quis
                      eleifend quam adipiscing
                    </p>
                    <button className="btn">Book Now</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="row">
              <div className="col-lg-6">
                <div className="banner-contain">
                  <h5>33</h5>
                  <h5>
                    Collaborate with us to achieve your health goals with the
                    power of plants
                  </h5>
                  <p>
                    Concentration and Memory. Being around plants helps people
                    concentrate better in the home and workplace. Studies show
                    that tasks performed while under.
                  </p>
                  <button className="btn">Book Now</button>
                </div>
              </div>

              <div className="col-lg-6">
                <div className="banner-img">
                  <img src="img/slide-img.png" alt="" />
                  <div className="banner-contain">
                    <h5>Highest Quality Marijuana Seeds</h5>
                    <p>
                      Habitasse platea dictumst quisque sagittis purus sit.
                      Dignissim enim sit amet venenatis. In est ante in nibh
                      maur is cursus mattis. Euismod elementum nisi quis
                      eleifend quam adipiscing
                    </p>
                    <button className="btn">Book Now</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      <section className="team">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="team-contain">
                <h5>
                  Our knowledgeable team can help you design experiences
                  tailored to your needs by accessing one of the flower
                  selections
                </h5>
                <p>
                  Elementum eu facilisis sed odio morbi quis commodo odio.
                  Mauris rhoncus aenean vel elit scelerisque mauris
                  pellentesque. Accumsan sit amet nulla facilisi morbi tempus.
                  Suscipit tellus mauris a diam maecenas sed enim ut sem. Turpis
                  egestas maecenas pharetra convallis posuere
                </p>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="team-img">
                <img src="img/team.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="counter">
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <h5>100+</h5>
              <p>
                New products to explore. Arcu vitae elementum curabitur vitae
                nunc sed
              </p>
            </div>
            <div className="col-md-3">
              <h5>3x</h5>
              <p>
                Quis risus sed vulputae odio ut. Arcu vitae elementum curabitur
                vitae nunc
              </p>
            </div>
            <div className="col-md-3">
              <h5>100%</h5>
              <p>
                New products to explore. Arcu vitae elementum curabitur vitae
                nunc sed
              </p>
            </div>
            <div className="col-md-3">
              <h5>11k</h5>
              <p>
                Quis risus sed vulputae odio ut. Arcu vitae elementum curabitur
                vitae nunc
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="product">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="product-img">
                <img src="img/product.png" alt="" />
              </div>
            </div>
            <div className="col-md-6">
              <div className="product-contain">
                <h5>CBD Facial Serum: Anti-Aging+ Daily Moisturizer </h5>
                <img src="img/star-group.png" alt="" />
                <p>
                  Quis risus sed vulputate odio ut. Arcu vitae elementum
                  curabitur vitae nunc sed. Mauris a diam maecenas sed enim ut
                  sem. Non enim praesent elementum facilisis. Sapien nec
                  sagittis aliquam malesuada bibendum arcu vitae elementum
                </p>
                <div className="row">
                  <div className="col-md-1">
                    <img src="img/yes.png" alt="" />
                  </div>
                  <div className="col-md-11">
                    <h6>Sativa-Dominant</h6>
                  </div>
                  <div className="col-md-1">
                    <img src="img/yes.png" alt="" />
                  </div>
                  <div className="col-md-11">
                    <h6>THC 110.0-160.0mg/g</h6>
                  </div>
                  <div className="col-md-1">
                    <img src="img/yes.png" alt="" />
                  </div>
                  <div className="col-md-11">
                    <h6>CBD 0.0-1.0mg/g</h6>
                  </div>
                  <div className="col-md-1">
                    <img src="img/yes.png" alt="" />
                  </div>
                  <div className="col-md-11">
                    <h6>Euismod elementum</h6>
                  </div>

                  <div className="col-md-3">
                    <h5>$7 .97</h5>
                  </div>
                  <div className="col-md-9">
                    <button className="btn btn-product">Our Products</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="doctor">
        <div className="container">
          <div className="doctor-bg">
            <div className="doctor-contain">
              <img src="img/herbal.png" alt="" />
              <h6>
                Our doctors recommend the best THC to CBD ratio to look for in a
                marijuana strain and suggest the recommended dosage and route of
                administration
              </h6>
            </div>
          </div>
        </div>
      </section>

      <section className="effects">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <div className="effects-contain">
                <h5>Therapeutic Effects of Cannabis and Cannabinoids</h5>
                <p>
                  Accumsan sit amet nulla facilisi morbi tempus. Suscipit tellus
                  mauris a diam maecenas sed enim ut sem. Turpis egestas
                  maecenas pharetra convallis posuere
                </p>
                <button className="btn btn-book">Book Now</button>
              </div>
            </div>
            <div className="col-md-4">
              <img className="effect-img" src="img/effects.png" alt="" />
            </div>
            <div className="col-md-4">
              <div className="effects-contain2">
                <div className="row">
                  <div className="col-md-2">
                    <img src="img/effect1.png" alt="" />
                  </div>
                  <div className="col-md-10">
                    <h5>Relief of chronic pain</h5>
                    <p>
                      Feugiat in fermentum posuere urnajh nec tincidunt praesent
                      semper feugiat pulvinar proin
                    </p>
                  </div>
                  <div className="col-md-2">
                    <img src="img/effect2.png" alt="" />
                  </div>
                  <div className="col-md-10">
                    <h5>Fight cancer</h5>
                    <p>
                      Feugiat in fermentum posuere urnajh nec tincidunt praesent
                      semper feugiat pulvinar proin
                    </p>
                  </div>
                  <div className="col-md-2">
                    <img src="img/effect3.png" alt="" />
                  </div>
                  <div className="col-md-10">
                    <h5>Depression</h5>
                    <p>
                      Feugiat in fermentum posuere urnajh nec tincidunt praesent
                      semper feugiat pulvinar proin
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="shop">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="text-bg">
                <h6>SHOP BY CATEGORY</h6>
              </div>
            </div>
            <div className="col-md-4">
              <div className="img-box">
                <img src="img/shop1.png" alt="" />
                <h5>skin care</h5>
                <div className="cta">
                  <a>
                    <button className="btn btn-book">Shop Now</button>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="img-box">
                <img src="img/shop2.png" alt="" />
                <h5>Hair Care</h5>
                <div className="cta">
                  <a>
                    <button className="btn btn-book">Shop Now</button>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="img-box">
                <img src="img/shop3.png" alt="" />
                <h5>body care</h5>
                <div className="cta">
                  <a>
                    <button className="btn btn-book">Shop Now</button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="story">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="text-bg">
                <h6>OUR STORY</h6>
              </div>
            </div>
            <div className="col-lg-10">
              <div className="story-contain">
                <div className="row">
                  <div className="col-md-9">
                    <h5>Who are the herbal sisters?</h5>
                    <p>
                      The Herbal Sisters are two sisters on the same mission,
                      combining their experiences and love for plant medicine to
                      inspire and empower others on their own healing journey.
                      They both qualified together at the College of
                      Naturopathic Medicine in Herbal medicine, Naturopathy and
                      Iridology. They have been trained in using Traditional
                      Chinese and Ayurvedic practices in their clinic as well as
                      various other diagnostic and therapeutic practices, such
                      as bach flowers, tissue salts and naturopathic nutrition.
                      With Devina’s medical background as a pharmacist, she is
                      able to integrate her medical knowledge with naturopathic
                      principles in the consultation room as your practitioner.
                      Leena is the master formulator who will be preparing your
                      medicine. She sources each herb and ingredient from the
                      most organic cleanest places. She prides herself on
                      creating high quality herbal medicines for each client.
                    </p>
                  </div>
                  <div className="col-md-3">
                    <img src="img/story1.png" alt="" className="story-img" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="nature">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="text-bg">
                <h6>INSPIRED BY NATURE</h6>
              </div>
            </div>
            <div className="col-md-2"></div>
            <div className="col-lg-10">
              <div className="story-contain">
                <div className="row">
                  <div className="col-md-3">
                    <img src="img/nature.png" alt="" className="story-img" />
                  </div>
                  <div className="col-md-9">
                    <h5>What is herbal medicine?</h5>
                    <ul>
                      <li>
                        <p>
                          Herbal medicine is a traditional kind of medicine
                          which is made from the roots, stems, leaves, flowers,
                          or seeds of plants. The preparations of these are used
                          to improve health, prevent disease and aid all kinds
                          of ailments.
                        </p>
                      </li>
                      <li>
                        <p>
                          The medicinal use of herbs dates back to thousands of
                          years. Over 5,000 years in ancient Sumeria, 60,000
                          years in Iraq and 8,000 years in China (1,2). It was
                          used extensively by the ancient Egyptians and still
                          being used as a first line therapy in many countries
                          all over the world.
                        </p>
                      </li>
                      <li>
                        <p>
                          Over the past century due to the rise of the
                          pharmaceutical industry, herbal medicine has been
                          challenged due to the lack of scientific evidence,
                          despite its very long history of use. However, now
                          this is changing as more and more research studies are
                          being churned out and now becoming a trend.
                        </p>
                      </li>
                    </ul>
                    <a href="" className="read">Read More...</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="promise">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="text-bg">
                <h6>WE PROMISE</h6>
              </div>
            </div>
            <div className="col-md-3">
              <img src="img/promise1.png" alt="" />
              <h5>FULL INGREDIENT DISCLOSURE</h5>
            </div>
            <div className="col-md-3">
              <img src="img/promise2.png" alt="" />
              <h5>CRUELTY FREE</h5>
            </div>

            <div className="col-md-3">
              <img src="img/promise3.png" alt="" />
              <h5>FREE FROM HARMFUL CHEMICALS</h5>
            </div>

            <div className="col-md-3">
              <img src="img/promise4.png" alt="" />
              <h5>CERTIFIED ORGANIC INGREDIENTS</h5>
            </div>
          </div>
        </div>
      </section>

      <section className="news">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="text-bg">
                <h6>Latest News</h6>
              </div>
            </div>
            <div className="col-md-6">
              <img src="img/news1.png" alt="" />
            </div>
            <div className="col-md-6">
              <div className="card mb-4" >
                <div className="row g-0">
                  <div className="col-md-5">
                    <img src="img/news2.png" className="img-fluid rounded-start" alt="..." />
                  </div>
                  <div className="col-md-7">
                    <div className="card-body">
                    <div className="row">
                      <div className="col-md-7">
                        <img src="img/calendar.png" alt="" />
                        <span>September 30, 2021</span>
                      </div>
                      <div className="col-md-5">
                        <img src="img/comments.png" alt="" />
                        <span>No Comments</span>
                      </div>
                    </div>
                      <h5 className="card-title">Top 15 Best Strain Of Weed For Anxiety</h5>
                      <p className="card-text">Felis eget velit aliquet sagittis id consectetur. Eleifend donec pretium vulputate sapien nec sagittis
                      </p>
                      {/* <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p> */}
                    </div>
                  </div>
                </div>
              </div>
              <div className="card mb-4" >
                <div className="row g-0">
                  <div className="col-md-5">
                    <img src="img/news3.png" className="img-fluid rounded-start" alt="..." />
                  </div>
                  <div className="col-md-7">
                    <div className="card-body">
                    <div className="row">
                      <div className="col-md-7">
                        <img src="img/calendar.png" alt="" />
                        <span>September 30, 2021</span>
                      </div>
                      <div className="col-md-5">
                        <img src="img/comments.png" alt="" />
                        <span>No Comments</span>
                      </div>
                    </div>
                      <h5 className="card-title">Top 15 Best Strain Of Weed For Anxiety</h5>
                      <p className="card-text">Felis eget velit aliquet sagittis id consectetur. Eleifend donec pretium vulputate sapien nec sagittis
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card mb-4" >
                <div className="row g-0">
                  <div className="col-md-5">
                    <img src="img/news2.png" className="img-fluid rounded-start" alt="..." />
                  </div>
                  <div className="col-md-7">
                    <div className="card-body">
                    <div className="row">
                      <div className="col-md-7">
                        <img src="img/calendar.png" alt="" />
                        <span>September 30, 2021</span>
                      </div>
                      <div className="col-md-5">
                        <img src="img/comments.png" alt="" />
                        <span>No Comments</span>
                      </div>
                    </div>
                      <h5 className="card-title">Top 15 Best Strain Of Weed For Anxiety</h5>
                      <p className="card-text">Felis eget velit aliquet sagittis id consectetur. Eleifend donec pretium vulputate sapien nec sagittis
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
