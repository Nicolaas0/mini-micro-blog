import React, { useEffect, useState } from "react";

const Create = () => {
  const [username, setUsername] = useState("");
  const [message, setMessage] = useState("");
  const [like, setLike] = useState("");
  const [isPending, setIsPending] = useState(false);
  let l = Math.floor(Math.random() * 10);

  const likeGen = () => {
    setLike(l);
  };

  const fixUname = (u) => {
    return '@'+u;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let v = { username, message, like };
    const un = fixUname(v.username);
    v.username = un;

    setIsPending(true);

    fetch("http://localhost:8000/blogs", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(v),
    }).then(() => {
      setIsPending(false);
    });
  };

  useEffect(() => {
    //add dependencies for l so it didnt create infinite loop
  }, [l]);

  return (
    <div>
      <div className="create">
        <form onSubmit={handleSubmit}
        >
          <label>Username:</label>
          <input
            type="text"
            required
            value={username}
            onChange={(e) => {
              setUsername(e.target.value);
            }}
          />
          <label>Message</label>
          <textarea
            required
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
          {!isPending && <button onClick={likeGen}>Submit</button>}
          {isPending && <button onClick={likeGen}>Adding...</button>}
        </form>
      </div>
    </div>
  );
};

export default Create;
