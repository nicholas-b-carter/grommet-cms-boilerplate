import React from 'react';
import {
  ImageForm,
  ParagraphForm,
  ImageParagraphForm,
  CardParagraphForm,
  QuoteForm,
  VideoForm,
  CarouselForm
} from 'grommet-cms/containers/Dashboard/DashboardBlockForm';
import {
  BlockHeading,
  BlockHeadingWireframe,
  BlockParagraph,
  BlockParagraphWireframe,
  BlockImage,
  BlockImageWireframe,
  BlockImageParagraph,
  BlockImageParagraphWireframe,
  BlockCard,
  BlockCardWireframe,
  BlockQuote,
  BlockQuoteWireframe,
  BlockVideo,
  BlockVideoWireframe,
  BlockCarousel,
  BlockCarouselWireframe,
  GenericPreview,
  BlockColorSwatch,
  BlockColorSwatchForm,
  BlockColorSwatchWireframe
} from './index';

export default {
  BlockParagraph: {
    element: <BlockParagraph />,
    preview: <GenericPreview />,
    form: <ParagraphForm />,
    name: 'Paragraph',
    wireframe: <BlockParagraphWireframe />
  },
  BlockHeading: {
    element: <BlockHeading />,
    preview: <GenericPreview />,
    form: <ParagraphForm />,
    name: 'Heading',
    wireframe: <BlockHeadingWireframe />
  },
  BlockImage: {
    element: <BlockImage />,
    preview: <GenericPreview />,
    form: <ImageForm />,
    name: 'Image',
    wireframe: <BlockImageWireframe />
  },
  BlockImageParagraph: {
    element: <BlockImageParagraph />,
    preview: <GenericPreview />,
    form: <ImageParagraphForm />,
    name: 'Image + Paragraph',
    wireframe: <BlockImageParagraphWireframe />
  },
  BlockCardParagraph: {
    element: <BlockCard />,
    preview: <GenericPreview />,
    form: <CardParagraphForm />,
    name: 'Card + Paragraph',
    wireframe: <BlockCardWireframe />
  },
  BlockQuote: {
    element: <BlockQuote />,
    preview: <GenericPreview />,
    form: <QuoteForm />,
    name: 'Quote',
    wireframe: <BlockQuoteWireframe />
  },
  BlockVideo: {
    element: <BlockVideo />,
    preview: <GenericPreview />,
    form: <VideoForm />,
    name: 'Video',
    wireframe: <BlockVideoWireframe />
  },
  BlockCarousel: {
    element: <BlockCarousel />,
    preview: <GenericPreview />,
    form: <CarouselForm />,
    name: 'Carousel',
    wireframe: <BlockCarouselWireframe />
  },
  BlockColorSwatch: {
    element: <BlockColorSwatch />,
    name: 'Color Swatch',
    preview: <GenericPreview />,
    form: <BlockColorSwatchForm />,
    wireframe: <BlockColorSwatchWireframe />
  }
};
