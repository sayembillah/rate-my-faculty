import React from "react";

const Hero = () => {
  return (
    <section style={styles.heroSection}>
      <div style={styles.intro} className="text-center max-w-3xl mx-auto px-4">
        <h1 className="text-4xl font-extrabold mb-4 text-gray-900">
          Welcome to Rate My Faculty
        </h1>
        <p className="text-lg  font-semibold text-gray-700">
          A platform where you can anonymously rate your local private
          university faculty. Help us to grow by add your ratings.
        </p>
      </div>
      <div
        style={styles.imageRow}
        className="flex justify-center gap-6 flex-wrap max-w-5xl mx-auto px-4"
      >
        <div
          style={styles.imageContainer}
          className="flex flex-col items-center shadow-2xl p-5 rounded-3xl"
        >
          <img
            src="/1.png"
            alt="Manage and edit your rating"
            style={styles.image}
          />
          <p style={styles.imageText}>
            <strong className="text-3xl  bg-clip-text">
              You are always anonymous.
            </strong>
          </p>
        </div>
        <div
          style={styles.imageContainer}
          className="flex flex-col items-center shadow-2xl p-5 rounded-3xl"
        >
          <img
            src="/2.png"
            alt="You are always anonymous"
            style={styles.image}
          />
          <p style={styles.imageText}>
            <strong className="text-3xl  bg-clip-text">
              You are always anonymous.
            </strong>
          </p>
        </div>
        <div
          style={styles.imageContainer}
          className="flex flex-col items-center shadow-2xl p-5 rounded-3xl"
        >
          <img
            src="/3.png"
            alt="Like or dislike comments"
            style={styles.image}
          />
          <p style={styles.imageText}>
            <strong className="text-3xl  bg-clip-text">
              Like or dislike comments.
            </strong>
          </p>
        </div>
      </div>
    </section>
  );
};

const styles = {
  heroSection: {
    padding: "2rem",
    maxWidth: "1000px",
    margin: "0 auto",
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
  },
  intro: {
    textAlign: "center",
    marginBottom: "2rem",
  },
  imageRow: {
    display: "flex",
    justifyContent: "space-between",
    gap: "1rem",
    flexWrap: "wrap",
  },
  imageContainer: {
    flex: "1 1 30%",
    minWidth: "250px",
    textAlign: "center",
  },
  image: {
    width: "80%",
    height: "auto",
    borderRadius: "8px",
  },
  imageText: {
    marginTop: "0.5rem",
    fontWeight: "bold",
    fontSize: "1rem",
  },
};

export default Hero;
