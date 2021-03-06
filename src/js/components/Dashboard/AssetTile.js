import React, { PropTypes } from 'react';
import Anchor from 'grommet/components/Anchor';
import Box from 'grommet/components/Box';
import Heading from 'grommet/components/Heading';
import Menu from 'grommet/components/Menu';
import TrashIcon from 'grommet/components/icons/base/Trash';
import EditIcon from 'grommet/components/icons/base/Edit';
import DocumentIcon from 'grommet/components/icons/base/Document';
import { isImage } from 'grommet-cms/utils';

export default function AssetTile (props) {
  const { id, path, title, onDeleteClick, size, showControls, onClick } = props;

  const tileSize = () => {
    switch (size) {
      case 'small':
        return {
          height: { min: 'xsmall', max: 'xsmall' },
          width: { min: 'small', max: 'small' }
        };
      case 'medium':
        return {
          height: { min: 'small', max: 'small' },
          width: { min: 'medium', max: 'medium' }
        };
      case 'large':
        return {
          height: { min: 'medium', max: 'medium' },
          width: { min: 'medium', max: 'medium' }
        };
      default:
        return {
          height: { min: 'small', max: 'small' },
          width: { min: 'medium', max: 'medium' }
        };
    }
  };

  const thumbnail = (isImage(path))
    ? <Box 
        texture={path}
        size={tileSize()}
        style={{
          backgroundSize: 'contain'
        }}
        colorIndex="grey-3"
      />
    : <Box
        size={tileSize()}
        style={{
          backgroundSize: 'contain'
        }}
        colorIndex="grey-3"
        align="center"
        justify="center">
        <DocumentIcon size="xlarge" />
      </Box>;

  const controls = (showControls)
    ? <Box colorIndex="light-2" align="end">
        <Menu responsive={true}
          inline={false}
          dropAlign={{ right: 'right'}}>
          <Anchor onClick={onDeleteClick}>
            <TrashIcon size="small" /> Delete
          </Anchor>
          <Anchor path={`/dashboard/asset/${id}`}>
            <EditIcon size="small" /> Edit
          </Anchor>
        </Menu>
      </Box>
    : undefined;

  return (
    <Box pad="small" onClick={onClick || undefined}>
      <Box separator="all">
        {controls}
        {thumbnail}
        <Box pad="small" justify="center" align="center">
          <Heading tag="h3" margin="none">
            {title || 'Asset'}
          </Heading>
        </Box>
      </Box>
    </Box>
  );
};

AssetTile.propTypes = {
  id: PropTypes.string,
  path: PropTypes.string,
  title: PropTypes.string,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  showControls: PropTypes.bool
};

AssetTile.defaultProps = {
  size: 'medium',
  showControls: true
};

