import Image1 from "../assets/images/image-product-1.jpg";
import Image1Thumbnail from "../assets/images/image-product-1-thumbnail.jpg";
import Image2 from "../assets/images/image-product-2.jpg";
import Image2Thumbnail from "../assets/images/image-product-2-thumbnail.jpg";
import Image3 from "../assets/images/image-product-3.jpg";
import Image3Thumbnail from "../assets/images/image-product-3-thumbnail.jpg";
import Image4 from "../assets/images/image-product-4.jpg";
import Image4Thumbnail from "../assets/images/image-product-4-thumbnail.jpg";

type Data = {
  id: number;
  image: string;
  imageThumbnail: string;
};

export const data: Data[] = [
  {
    id: 1,
    image: Image1,
    imageThumbnail: Image1Thumbnail,
  },
  {
    id: 2,
    image: Image2,
    imageThumbnail: Image2Thumbnail,
  },
  {
    id: 3,
    image: Image3,
    imageThumbnail: Image3Thumbnail,
  },
  {
    id: 4,
    image: Image4,
    imageThumbnail: Image4Thumbnail,
  },
];
