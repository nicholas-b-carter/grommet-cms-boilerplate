/* @flow */
import React from 'react';
import Hero from 'grommet/components/Hero';
import Image from 'grommet/components/Image';
import Box from 'grommet/components/Box';
import Headline from 'grommet/components/Headline';
import Label from 'grommet/components/Label';
import Section from 'grommet/components/Section';
// $FlowFixMe required module not found. See here: https://github.com/facebook/flow/issues/101
import { ContentBlocks } from 'grommet-cms/containers';
import type ContentBlockType from './flowTypes';

export default function PostPreview(props: {
  post?: ?{
    image: string,
    title: string,
    subtitle?: string,
    contentBlocks: Array<ContentBlockType>
  }
}) {
  const { post } = props;
  return (
    <Box>
      {post &&
        <Box>
          <Hero
            className="post-preview--hero"
            size="medium"
            colorIndex="grey-2-a"
            background={post.image ? <Image src={post.image} fit="cover" /> : null}
          >
            <Box direction="row" pad="medium">
              {post.title &&
                <Box colorIndex="grey-2-a" basis="full" pad="medium">
                  <Headline size="medium" strong className="post-preview--hero__headline">
                    {post.title}
                  </Headline>
                  <Label truncate uppercase>
                    {post.subtitle || ''}
                  </Label>
                </Box>
              }
            </Box>
          </Hero>
          <Section pad="medium">
            <ContentBlocks blocks={post.contentBlocks} />
          </Section>
        </Box>
      }
    </Box>
  );
}
