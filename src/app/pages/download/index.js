import Image from "next/image";
import React from "react";
import imageUrl from "../../../public/modified_image_with_metadata.jpg";
export default function Download() {
  const downloadFiles = () => {
    // Baixar a imagem
    const linkImage = document.createElement("a");
    linkImage.href = imageUrl;
    linkImage.download = "modified_image_with_metadata.jpg";
    linkImage.click();
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <button
        onClick={downloadFiles}
        style={{
          padding: "10px 20px",
          fontSize: "16px",
          cursor: "pointer",
          backgroundColor: "#4CAF50",
          color: "white",
          border: "none",
          borderRadius: "5px",
        }}
      >
        <Image
          src={{ uri: imageUrl }}
          alt="Imagem para download"
          width="300"
          style={{ margin: "20px 0" }}
        />
        <br />
      </button>
    </div>
  );
}
