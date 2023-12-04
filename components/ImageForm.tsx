"use client";
import axios from "axios";
import { useState, FormEvent, ChangeEvent } from "react";

const ImageForm = () => {
  const [imageUrl, setImageUrl] = useState<string>("");
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.target as HTMLFormElement;
    const title = (form.elements.namedItem("title") as HTMLInputElement).value;
    const imageInput = form.elements.namedItem(
      "image"
    ) as HTMLInputElement | null;

    if (imageInput && imageInput.files && imageInput.files[0]) {
      const imageFile = imageInput.files[0];

      const formData = new FormData();
      formData.append("image", imageFile);
      formData.append("title", title);
      axios.post("http://localhost:5000/upload", formData).then((res) => {
        setImageUrl(res.data.path);
      });
    }
  };

  return (
    <section className="flex-[4] px-5 py-10 rounded bg-gray-900">
      <form
        onSubmit={handleSubmit}
        encType="multipart/form-data"
        className="flex flex-col gap-5"
      >
        <label>Title</label>
        <input
          type="text"
          name="title"
          placeholder="Type here"
          className="input input-bordered input-accent w-full max-w-xs rounded"
        />
        <label>Photo</label>
        <input
          type="file"
          name="image"
          className="file-input file-input-bordered file-input-accent w-full max-w-xs rounded"
        />
        <button className="btn btn-active btn-accent w-fit rounded">
          Upload
        </button>
      </form>
    </section>
  );
};

export default ImageForm;
