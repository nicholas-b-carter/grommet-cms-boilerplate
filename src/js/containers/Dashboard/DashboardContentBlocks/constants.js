import React from 'react';
import Box from 'grommet/components/Box';
import PlayFillIcon from 'grommet/components/icons/base/PlayFill';

import BlockParagraphPreview from '../../../components/ContentBlocks/BlockParagraphPreview';
import BlockHeadingPreview from '../../../components/ContentBlocks/BlockHeadingPreview';
import BlockImagePreview from '../../../components/ContentBlocks/BlockImagePreview';
import BlockCardPreview from '../../../components/ContentBlocks/BlockCardPreview';
import BlockQuotePreview from '../../../components/ContentBlocks/BlockQuotePreview';
import BlockVideoPreview from '../../../components/ContentBlocks/BlockVideoPreview';
import BlockCarouselPreview from '../../../components/ContentBlocks/BlockCarouselPreview';

import ImageForm from '../DashboardBlockForm/ImageForm';
import ParagraphForm from '../DashboardBlockForm/ParagraphForm';
import ImageParagraphForm from '../DashboardBlockForm/ImageParagraphForm';
import CardParagraphForm from '../DashboardBlockForm/CardParagraphForm';
import QuoteForm from '../DashboardBlockForm/QuoteForm';
import VideoForm from '../DashboardBlockForm/VideoForm';
import CarouselForm from '../DashboardBlockForm/CarouselForm';

import BlockHeading from '../../../components/ContentBlocks/BlockHeading';
import BlockParagraph from '../../../components/ContentBlocks/BlockParagraph';
import BlockImage from '../../../components/ContentBlocks/BlockImage';
import BlockImageParagraph from '../../../components/ContentBlocks/BlockImageParagraph';
import BlockCard from '../../../components/ContentBlocks/BlockCard';
import BlockQuote from '../../../components/ContentBlocks/BlockQuote';
import BlockVideo from '../../../components/ContentBlocks/BlockVideo';
import BlockCarousel from '../../../components/ContentBlocks/BlockCarousel';

export const BLOCK_TYPE_MAP = {
  BlockParagraph: {
    element: <BlockParagraph />,
    preview: <BlockParagraphPreview />,
    form: <ParagraphForm />,
    name: 'Paragraph',
    wireframe: (
      <Box pad={{ between: 'small' }}>
        <Box full="horizontal" pad="small" colorIndex="light-2" />
        <Box full="horizontal" pad="small" colorIndex="light-2" />
        <Box full="horizontal" pad="small" colorIndex="light-2" />
        <Box full="horizontal" pad="small" colorIndex="light-2" />
      </Box>
    )
  },
  BlockHeading: {
    element: <BlockHeading />,
    preview: <BlockHeadingPreview />,
    form: <ParagraphForm />,
    name: 'Heading',
    wireframe: (
      <Box pad={{ between: 'small' }}>
        <Box full="horizontal" pad="medium" colorIndex="light-2" />
        <Box full="horizontal" pad="medium" colorIndex="light-2" />
      </Box>
    )
  },
  BlockImage: {
    element: <BlockImage />,
    preview: <BlockImagePreview />,
    form: <ImageForm />,
    name: 'Image',
    wireframe: (
      <Box pad={{ between: 'small' }}>
        <Box full="horizontal" pad="large" colorIndex="accent-3" />
        <Box full="horizontal" pad="small" colorIndex="light-2" />
      </Box>
    )
  },
  BlockImageParagraph: {
    element: <BlockImageParagraph />,
    preview: <BlockImagePreview />,
    form: <ImageParagraphForm />,
    name: 'Image + Paragraph',
    wireframe: (
      <Box pad={{ between: 'small' }} direction="row">
        <Box full="horizontal" pad="large" colorIndex="light-2" />
        <Box full="horizontal" pad="small" colorIndex="accent-3" />
      </Box>
    )
  },
  BlockCardParagraph: {
    element: <BlockCard />,
    preview: <BlockCardPreview />,
    form: <CardParagraphForm />,
    name: 'Card + Paragraph',
    wireframe: (
      <Box pad={{ between: 'small' }} direction="row">
        <Box full="horizontal" pad="large" colorIndex="light-2" />
        <Box pad="small" colorIndex="accent-3" />
      </Box>
    )
  },
  BlockQuote: {
    element: <BlockQuote />,
    preview: <BlockQuotePreview />,
    form: <QuoteForm />,
    name: 'Quote',
    wireframe: (
      <Box pad={{ between: 'small' }}>
        <Box full="horizontal" pad="medium" colorIndex="accent-3">
          <Box pad="small" colorIndex="light-2"/>
        </Box>
      </Box>
    )
  },
  BlockVideo: {
    element: <BlockVideo />,
    preview: <BlockVideoPreview />,
    form: <VideoForm />,
    name: 'Video',
    wireframe: (
      <Box pad={{ between: 'small' }}>
        <Box full="horizontal" pad="medium" colorIndex="accent-3" align="center">
          <PlayFillIcon colorIndex="light-2" />
        </Box>
        <Box pad="small" colorIndex="light-2" />
      </Box>
    )
  },
  BlockCarousel: {
    element: <BlockCarousel />,
    preview: <BlockCarouselPreview />,
    form: <CarouselForm />,
    name: 'Carousel',
    wireframe: (
      <Box pad={{ between: 'small' }} direction="row">
        <Box basis="1/4" colorIndex="accent-3"
          pad={{ horizontal: 'small', vertical: 'large' }} />
        <Box basis="1/2" colorIndex="accent-3"
          pad={{ horizontal: 'small', vertical: 'large' }} />
        <Box basis="1/4" colorIndex="accent-3"
          pad={{ horizontal: 'small', vertical: 'large' }} />
      </Box>
    )
  }
};

export const BLOCK_ADD = 'BLOCK_ADD';
export const BLOCK_ADD_LIST = 'BLOCK_ADD_LIST';
export const BLOCK_EDIT = 'BLOCK_EDIT';
export const BLOCK_MOVE_UP = 'BLOCK_MOVE_UP';
export const BLOCK_MOVE_DOWN = 'BLOCK_MOVE_DOWN';
export const BLOCK_REMOVE = 'BLOCK_REMOVE';
export const BLOCK_SUBMIT = 'BLOCK_SUBMIT';
export const BLOCK_TYPE = 'BLOCK_TYPE';