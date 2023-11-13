import React from "react";
import pptxgen from "pptxgenjs";
import TitleSlide from "./TitleSlide";
import ContentSlide from "./ContentSlide";
import ImageSlide from "./ImageSlide";
import download from "./assets/download.jpg"

const PPTGenerator = () => {
  const generatePPT = () => {
    const pptx = new pptxgen();

    // Add Title Slide
    const addTitleSlide = () => {
      const titleSlide = pptx.addSlide();
      titleSlide.addText("My Presentation....this is my title slide, Welcome", {
        x: 1,
        y: 1,
        fontSize: 32,
        color: "#FF0000",
        bold:true,
        align:"center",
        italic:true
      });
    };

    // Add Content Slide
   
    const addContentSlide = (text) => {
      const maxCharsPerSlide = 500;
      let remainingDescription = text;
      while (remainingDescription.length > 0) {
        const currentDescription = remainingDescription.substring(0, maxCharsPerSlide);
        remainingDescription = remainingDescription.substring(maxCharsPerSlide);

      const contentSlide = pptx.addSlide();
      contentSlide.addText(currentDescription, {
        x: 1,
        y: 2,
        fontSize: 16,
        color: "#0000FF",
        italic:true
      });
    };
  }


    // Add Image Slide
    const addImageSlide = (imageUrl) => {
      const imageSlide = pptx.addSlide();
      imageSlide.addImage({ path: imageUrl, x: 1, y: 1, w: 6, h: 4 });
    };


    // Generate slides
    addTitleSlide();
    addContentSlide("Hello, World! This is my content slide. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, Lorem ipsum dolor sit amet.., comes from a line in section 1.10.32. It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)");
    // const imageUrl =
    //   './assets/download.jpg';s
    
    addImageSlide(download);

    // Save the presentation
    pptx.writeFile({ fileName: "example" });
  };

  return (
    <div className="max-w-3xl mx-auto my-8 p-4 bg-gray-100 rounded-lg">
      <h1 className="text-3xl font-bold mb-4 text-blue-800">PPT Generator</h1>
      <button
        onClick={generatePPT}
        className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md"
      >
        Generate PPT
      </button>

      {/* Render Child Components */}
      <TitleSlide />
      <ContentSlide text="Hello, World!" />
      <ImageSlide imageUrl={download} />
    </div>
  );
};

export default PPTGenerator;
