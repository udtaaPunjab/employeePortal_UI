import React from "react";

function Home() {
  const gradientBackground = {
    background:
      "radial-gradient(circle, rgba(238,174,202,1) 0%, rgba(148,187,233,1) 100%)",
    minHeight: "80vh",
    align_text: "center",
  };
  return (
    <div>
      <div className="container-fluid">
        <div className="row justify-content-center mt-5">
          <div className="col-md-8">
            <div className="card">
              <div className="card-body" style={gradientBackground}>
                <h1
                  className="text-center"
                  style={{
                    marginTop: "180px",
                    fontSize: "50px",
                    color: "white",
                  }}
                >
                  Welcome to the Employee Portal
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
