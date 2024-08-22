"use client";
import React from "react";

export default function DownloadPage() {
  const imageUrl = "/modified_image_with_metadata.jpg"; // Caminho correto da imagem

  const downloadImage = () => {
    // Criar um link para baixar a imagem
    const link = document.createElement("a");
    link.href = imageUrl;
    link.download = "modified_image_with_metadata.jpg";
    link.click();
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <a
        onClick={downloadImage}
        style={{ maxWidth: "500px", height: "500px", display: "inline-block" }}
      >
        <img
          src={imageUrl}
          alt="Imagem para download"
          width={700}
          height={700}
          style={{ margin: "20px 0" }}
        />
        <br />
      </a>
      <span
        style={{
          display: "inline-block",
          position: "absolute",
          right: "0px",
          bottom: "0px",
          fontSize: "22px",
          color: "#000",
        }}
      >
        Camiseta
      </span>
    </div>
  );
}
