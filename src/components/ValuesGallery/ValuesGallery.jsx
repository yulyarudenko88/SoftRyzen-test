import {
  Gallery,
  GalleryItem,
  TitleWrap,
  Title,
  Desc,
} from "./ValuesGallery.styled.js";

import IconOpenness from "../../assets/images/AboutSection/maximize-circle.svg";
import IconResponsibility from "../../assets/images/AboutSection/global-edit.svg";
import IconInnovation from "../../assets/images/AboutSection/cpu-charge.svg";
import IconQuality from "../../assets/images/AboutSection/ranking.svg";

const ValuesGallery = () => {
  return (
    <Gallery>
      <GalleryItem>
        <TitleWrap>
          <img src={IconOpenness} alt="Icon" width={16} height={16} />
          <Title>Openness</Title>
        </TitleWrap>
        <Desc>to the world, people, new ideas and projects</Desc>
      </GalleryItem>
      <GalleryItem>
        <TitleWrap>
          <img src={IconResponsibility} alt="Icon" width={16} height={16} />
          <Title>Responsibility</Title>
        </TitleWrap>
        <Desc>
          we are aware that the results of our work have an impact on our lives
          and the lives of future generations
        </Desc>
      </GalleryItem>
      <GalleryItem>
        <TitleWrap>
          <img src={IconInnovation} alt="Icon" width={16} height={16} />
          <Title>Innovation</Title>
        </TitleWrap>
        <Desc>
          we use the latest technology to implement non-standard solutions
        </Desc>
      </GalleryItem>
      <GalleryItem>
        <TitleWrap>
          <img src={IconQuality} alt="Icon" width={16} height={16} />
          <Title>Quality</Title>
        </TitleWrap>
        <Desc>
          we do not strive to be the first among others, but we want to be the
          best in our business
        </Desc>
      </GalleryItem>
    </Gallery>
  );
};

export default ValuesGallery;
