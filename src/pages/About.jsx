function About() {
  return (
    <div className="home">
      <h1 className="text-center font-weight-bold">About</h1>
      <h2 className="text-center font-weight-bold">
        This is a group project created by:{" "}
      </h2>
      <div className="d-flex wrap">
        <div className="card w-25 m-1">
          <div className="card-title m-1">Dominic</div>
          <p className="card-text m-1">Made the redux components</p>
        </div>
        <div className="card w-25 m-1">
          <div className="card-title m-1">Vivian</div>
          <p class="card-text m-1">Linked pages</p>
        </div>
        <div className="card w-25 m-1">
          <div className="card-title m-1">Joseph</div>
          <p class="card-text m-1">Fetched from API</p>
        </div>
        <div className="card w-25 m-1">
          <div className="card-title m-1">Ayan</div>
          <p class="card-text m-1">Created form</p>
        </div>
      </div>
    </div>
  );
}

export default About;
