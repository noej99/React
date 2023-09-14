import axios from "axios";
import React, { useEffect, useRef, useState } from "react";

const PhotoBBS = () => {
  const photoInput = useRef();
  const imgCss = { maxwidth: "100px" };
  const [p, setP] = useState({ title: "", file: "" });
  const [photos, setPhotos] = useState([]);
  const photosTr = photos.map((v, i) => (
    <tr>
      <td>{v.title}</td>
      <td>
        <img src={"http://localhost/photo/" + v.file} style={imgCss} alt="" />
      </td>
    </tr>
  ));

  const fd = new FormData();
  fd.append("title", p.title); // 요청param이름, 값
  fd.append("file2", p.file);

  const upload = () => {
    axios
      .post("http://localhost/photo.upload", fd, {
        headers: { "Content-Type": "multipart/form-data" },
        withCredentials: true
      })
      .then((res) => {
        alert("성공");
        get();
        setP({ title: "", file: "" });
        photoInput.current.value = "";
      });
  };

  const get = () => {
    axios.get("http://localhost/photo.get").then((res) => {
      setPhotos(res.data.photos);
    });
  };

  useEffect(() => {
    get();
  }, []);

  return (
    <>
      제목 :&nbsp;
      <input
        value={p.title}
        onChange={(e) => {
          setP({ ...p, title: e.target.value });
        }}
      />
      <p />
      사진 :&nbsp;
      <input
        ref={photoInput}
        type="file"
        onChange={(e) => {
          setP({ ...p, file: e.target.files[0] });
        }}
      />
      <p />
      <button onClick={upload}>업로드</button>
      <hr />
      <table border={1}>{photosTr}</table>
    </>
  );
};

export default PhotoBBS;
