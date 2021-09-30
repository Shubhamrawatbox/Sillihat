import { AiOutlineCompass } from "react-icons/ai";
import { IoPaperPlaneOutline } from "react-icons/io5";
import { HiOutlineClipboard } from "react-icons/hi";

import Paragraph from "../atom/paragraph/Paragraph";
import Span from "../atom/span/Span";

export const Footerdata = [
  {
    image: <AiOutlineCompass />,
    heads: (
      <Paragraph
        prop="Let’s Talk About Your Project"
        color="whitecolor"
        size="para-small"
      />
    ),
    content: (
      <Span props="Consulting from pro software and network architects and seasoned entrepreneurs." />
    ),
  },
  {
    image: <IoPaperPlaneOutline />,
    heads: (
      <Paragraph
        prop="Let’s Talk About Your Idea"
        color="whitecolor"
        size="para-small"
      />
    ),
    content: (
      <Span props="Our team with experience of building and maintaining some of the most complex software will work shoulder to shoulder with your teams to build a robust and scalable product." />
    ),
  },
  {
    image: <HiOutlineClipboard />,
    heads: (
      <Paragraph
        prop="Let’s Talk About Your Future"
        color="whitecolor"
        size="para-small"
      />
    ),
    content: (
      <Span props="Outsource your next technical hurdle to the team who understands your vision and can hustle alongside you." />
    ),
  },
];
