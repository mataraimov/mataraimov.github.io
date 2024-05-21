import React from 'react';
const AnimationSection = () => {
  return (
    <section className="animation-section" style={{ textAlign: 'center', marginBottom: '120px' }}>
      <h2>Unboxing Experience</h2>
      <div
        className="animation-container"
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          width: '300px',
          height: '300px',
          backgroundColor: '#f00' /* Vibrant red background */,
          borderRadius: '50%',
          margin: '0 auto',
          animation: 'spin 2s linear infinite' /* Animation for rotation */,
        }}
      >
        <span
          style={{
            fontSize: '40px',
            color: '#fff' /* White text for contrast */,
            textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' /* Drop shadow for depth */,
          }}
        >
          Coming Soon
        </span>
      </div>
      <p>Watch our exciting TechTrek X unboxing video coming soon!</p>
      <a
        href="#"
        className="watch-now"
        style={{
          textDecoration: 'none',
          color: '#fff',
          fontWeight: 'bold',
          padding: '10px 20px',
          backgroundColor: '#000',
          borderRadius: '5px',
          marginTop: '20px',
          display: 'inline-block',
        }}
      >
        Watch Now
      </a>
      <style jsx>
        {`
          @keyframes spin {
            from {
              transform: rotate(0deg);
            }
            to {
              transform: rotate(360deg);
            }

            /* Add intermediate keyframes for smoother transition (optional) */
            10% {
              transform: rotate(30deg);
            }
            30% {
              transform: rotate(90deg);
            }
            50% {
              transform: rotate(150deg);
            }
            70% {
              transform: rotate(210deg);
            }
            90% {
              transform: rotate(270deg);
            }
          }
        `}
      </style>
    </section>
  );
};
const NewsPage = () => {
  return (
    <div className="news-page">
      <header style={{ color: '#fff', padding: '20px', textAlign: 'center' }}>
        <h1>TechTrek X News</h1>
      </header>

      <main>
        <section className="news-feed">
          <h2>Latest News</h2>
          <article
            className="news-item"
            style={{
              width: 'calc(33% - 10px)',
              marginBottom: '15px',
              boxShadow: '0 0 5px rgba(0, 0, 0, 0.1)',
              borderRadius: '5px',
              overflow: 'hidden',
            }}
          >
            <figure className="news-image">
              <img
                src="data:image/png;base64,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"
                alt="News Article Image 1"
                style={{ width: '100%', height: '200px', objectFit: 'cover' }}
              />
            </figure>
            <div className="news-content" style={{ padding: '15px' }}>
              <h3>TechTrek X Release Date Announced!</h3>
              <p>
                We're thrilled to announce the official release date for the highly anticipated
                TechTrek X smartphone. Mark your calendars for [date]!
              </p>
              <a
                href="#"
                className="read-more"
                style={{ textDecoration: 'none', color: '#333', fontWeight: 'bold' }}
              >
                Read More
              </a>
            </div>
          </article>

          <article
            className="news-item"
            style={{
              width: 'calc(33% - 10px)',
              marginBottom: '15px',
              boxShadow: '0 0 5px rgba(0, 0, 0, 0.1)',
              borderRadius: '5px',
              overflow: 'hidden',
            }}
          >
            <figure className="news-image">
              <img
                src="https://higherlogicdownload.s3.amazonaws.com/ISACA/FeaturedImages/e19a76de-3e8a-4731-9640-3b34f42fb39c-L.Jpeg"
                alt="News Article Image 2"
                style={{ width: '100%', height: '200px', objectFit: 'cover' }}
              />
            </figure>
            <div className="news-content" style={{ padding: '15px' }}>
              <h3>TechTrek X Awarded Best Smartphone Design!</h3>
              <p>
                We're proud to announce that TechTrek X has been recognized for its exceptional
                design by a prestigious tech magazine. Read more about this exciting achievement!
              </p>
              <a
                href="#"
                className="read-more"
                style={{ textDecoration: 'none', color: '#333', fontWeight: 'bold' }}
              >
                Read More
              </a>
            </div>
          </article>

          <article
            className="news-item"
            style={{
              width: 'calc(33% - 10px)',
              marginBottom: '15px',
              boxShadow: '0 0 5px rgba(0, 0, 0, 0.1)',
              borderRadius: '5px',
              overflow: 'hidden',
            }}
          >
            <figure className="news-image">
              <img
                src="https://media.licdn.com/dms/image/C5622AQHRPvmtir73zA/feedshare-shrink_800/0/1679435043008?e=2147483647&v=beta&t=TpsIQY3jvXJxHKK1x23zY6VTp8lR1XMOqNk1YuPRzyI"
                alt="News Article Image 3"
                style={{ width: '100%', height: '200px', objectFit: 'cover' }}
              />
            </figure>
            <div className="news-content" style={{ padding: '15px' }}>
              <h3>Pre-Order Your TechTrek X Today!</h3>
              <p>
                Don't miss out on the chance to be among the first to own the revolutionary TechTrek
                X. Pre-orders are now open! Visit our pre-order page to secure your device.
              </p>
              <a
                href="#"
                className="read-more"
                style={{ textDecoration: 'none', color: '#333', fontWeight: 'bold' }}
              >
                Pre-Order Now
              </a>
            </div>
          </article>
        </section>

        <section
          className="featured-content"
          style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}
        >
          <h2>Featured Content</h2>
          <div className="featured-item" style={{ width: 'calc(48% - 10px)', marginRight: '10px' }}>
            <img
              src="https://higherlogicdownload.s3.amazonaws.com/ISACA/FeaturedImages/e19a76de-3e8a-4731-9640-3b34f42fb39c-L.Jpeg"
              alt="Featured Image 2"
              style={{ width: '100%' }}
            />
            <div className="featured-caption" style={{ padding: '15px' }}>
              <h3>Unveiling the Power of TechTrek X</h3>
              <p>Explore the cutting-edge features of TechTrek X in this detailed video.</p>
              <a
                href="#"
                className="watch-now"
                style={{ textDecoration: 'none', color: '#333', fontWeight: 'bold' }}
              >
                Watch Now
              </a>
            </div>
          </div>
          <div className="featured-item" style={{ width: 'calc(48% - 10px)' }}>
            <img
              src="https://www.dyspatch.io/wp-content/uploads/pre-order-guide/header-title.png"
              alt="Pre-Order Demand"
              style={{ width: '100%', height: '250px' }}
            />{' '}
            {/* Replace with an image representing pre-order demand */}
            <div className="featured-caption" style={{ padding: '15px' }}>
              <h3>Pre-Order Demand for TechTrek X Soars!</h3>
              <p>
                See the incredible pre-order numbers for TechTrek X in this image. The high demand
                highlights the excitement surrounding this innovative smartphone.
              </p>
            </div>
          </div>
        </section>

        <section className="announcements" style={{ marginBottom: '20px' }}>
          <h2>Announcements</h2>
          <div className="announcement" style={{ padding: '15px', borderBottom: '1px solid #ddd' }}>
            <p>
              **TechTrek X is attending the upcoming CES tech expo! Come visit our booth to
              experience the phone firsthand.**
            </p>
          </div>
          <div className="announcement" style={{ padding: '15px', borderBottom: '1px solid #ddd' }}>
            <p>
              **We're hosting a live Q&A session with the TechTrek X design team next week. Stay
              tuned for details!**
            </p>
          </div>
          {/* Add more announcements here using the same structure */}
        </section>

        {/* Animation section (replace with your animation library) */}
        <AnimationSection />
      </main>

      <footer style={{ backgroundColor: '#f2f2f2', padding: '20px', textAlign: 'center' }}>
        <p>&copy; TechTrek 2024</p>
      </footer>
    </div>
  );
};

export default NewsPage;
