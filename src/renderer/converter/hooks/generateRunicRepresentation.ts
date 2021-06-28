import mergeImages, { ImageSource } from "merge-images";

/**
 * generateRunicRepresentation() is a hook that generates .png
 * of runic representation of given value. Uses merge-images package
 * for composing output image.
 */
async function generateRunicRepresentation(value: number): Promise<string> {
  const ones = Math.floor(value % 10);
  const tens = Math.floor((value / 10) % 10) * 10;
  const hundreds = Math.floor((value / 100) % 10) * 100;
  const thousands = Math.floor((value / 1000) % 10) * 1000;

  const imagesArray: ImageSource[] = [];

  imagesArray.push({
    src: `${process.env.PUBLIC_URL}/runes/base.png`,
    x: 128,
    y: 0,
  });
  if (ones !== 0)
    imagesArray.push({
      src: `${process.env.PUBLIC_URL}/runes/${ones}.png`,
      x: 144,
      y: 0,
    });
  if (tens !== 0)
    imagesArray.push({
      src: `${process.env.PUBLIC_URL}/runes/${tens}.png`,
      x: 0,
      y: 0,
    });
  if (hundreds !== 0)
    imagesArray.push({
      src: `${process.env.PUBLIC_URL}/runes/${hundreds}.png`,
      x: 144,
      y: 256,
    });
  if (thousands !== 0)
    imagesArray.push({
      src: `${process.env.PUBLIC_URL}/runes/${thousands}.png`,
      x: 0,
      y: 256,
    });

  const image = await mergeImages(imagesArray, { width: 272, height: 384 });

  return image;
}

export default generateRunicRepresentation;
