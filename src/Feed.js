import React, { useEffect, useState } from "react";
import "./Feed.css";
import InputOption from "./InputOption";
import CreateIcon from "@material-ui/icons/Create";
import ImageIcon from "@material-ui/icons/Image";
import SubscriptionsIcon from "@material-ui/icons/Subscriptions";
import EventNoteIcon from "@material-ui/icons/EventNote";
import CalendarTodayIcon from "@material-ui/icons/CalendarToday";
import Post from "./Post";
import { db } from "./firebase";
import {
  collection,
  addDoc,
  onSnapshot,
  serverTimestamp,
  orderBy,
  query,
} from "firebase/firestore";
import { useSelector } from "react-redux";
import { selectUser } from "./features/user/userSlice";
import FlipMove from "react-flip-move";

const Feed = () => {
  const [posts, setPosts] = useState([]);
  const [input, setInput] = useState("");

  const user = useSelector(selectUser);

  useEffect(() => {
    const postsRef = collection(db, "posts");
    const q = query(postsRef, orderBy("timestamps", "desc"));
    onSnapshot(q, (snap) => {
      const newArray = [];
      snap.forEach((doc) => {
        newArray.push({ id: doc.id, data: doc.data() });
        setPosts(newArray);
      });
    });
  }, []);

  const sendPost = (event) => {
    event.preventDefault();
    const dbRef = collection(db, "posts");
    addDoc(dbRef, {
      name: user.displayName,
      description: user.email,
      message: input,
      photoUrl: user.photoURL || '',
      timestamps: serverTimestamp(),
    });
    setInput("");
  };

  return (
    <div className="feed">
      {/*Feed*/}

      <div className="feed__inputContainer">
        <div className="feed__input">
          <CreateIcon />
          <form>
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              type="text"
            />
            <button onClick={sendPost} type="submit">
              Send
            </button>
          </form>
        </div>

        <div className="feed__inputOptions">
          <InputOption Icon={ImageIcon} color="#70B5F9" text="Photo" />
          <InputOption Icon={SubscriptionsIcon} color="#E7A33E" text="Video" />
          <InputOption Icon={EventNoteIcon} color="#C0CBCD" text="Event" />
          <InputOption
            Icon={CalendarTodayIcon}
            color="#75C15E"
            text="Write article"
          />
        </div>
      </div>

      {/*Posts*/}

      <div className="feed__post">
        <FlipMove>
        {posts.map((post) => {
          return (
            <Post
              key={post.id}
              name={post.data.name}
              description={post.data.description}
              message={post.data.message}
              photoUrl={post.data.photoUrl}
            />
          );
        })}
        </FlipMove>
        
      </div>
    </div>
  );
};

export default Feed;
