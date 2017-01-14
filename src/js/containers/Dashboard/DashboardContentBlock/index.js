import React, { Component, PropTypes } from 'react';
import {
  blockEdit, blockRemove, blockType, blockSubmit, blockMoveUp,
  blockMoveDown
} from '../DashboardContentBlocks/actions';
import { connect } from 'react-redux';
import Box from 'grommet/components/Box';
import { PreviewHeader, BlockSelector } from 'grommet-cms/components/ContentBlocks';
import { BLOCK_TYPE_MAP } from '../DashboardContentBlocks/constants';

export class DashboardContentBlock extends Component {
  constructor(props) {
    super(props);

    this._onBlockSelectClick = this._onBlockSelectClick.bind(this);
    this._onBlockSubmit = this._onBlockSubmit.bind(this);
    this._onEditClick = this._onEditClick.bind(this);
    this._onCloseClick = this._onCloseClick.bind(this);
  }

  _onEditClick(id) {
    this.props.dispatch(blockEdit(id));
  }

  _onCloseClick(id) {
    this.props.dispatch(blockRemove(id));
  }

  _onBlockSelectClick(id, type) {
    this.props.dispatch(blockType(id, type));
  }

  _onBlockSubmit(id, formData) {
    this.props.dispatch(blockSubmit(id, formData));
  }

  _onBlockMove(id, direction) {
    if (direction === 'up')
      this.props.dispatch(blockMoveUp(id));
    if (direction === 'down')
      this.props.dispatch(blockMoveDown(id));
  }

  render() {
    const { blockType, edit, id } = this.props;

    // Show block selector when editing and no block type is defined.
    const blockSelector = (edit && !blockType)
      ? (
        <Box pad="medium">
          <BlockSelector onClick={this._onBlockSelectClick.bind(this, id)}
            blockMap={BLOCK_TYPE_MAP} />
        </Box>
      ) : undefined;

    // Once a block is selected show content form based on block type.
    const form = (edit && blockType)
      ? (
        <Box pad="medium">
          {React.cloneElement(
            BLOCK_TYPE_MAP[blockType].form,
            {
              onSubmit: this._onBlockSubmit.bind(this, id),
              ...this.props
            }
          )}
        </Box>
      ) : undefined;



    // Show block preview when editing/creating is complete.
    const preview = (!edit && blockType)
      ? (
        <Box pad="medium" colorIndex="light-1">
          {React.cloneElement(
            BLOCK_TYPE_MAP[blockType].preview,
            {
              ...this.props
            }
          )}
        </Box>
      ) : undefined;

    // Set box title.
    const title = (blockType)
      ? BLOCK_TYPE_MAP[blockType].name
      : 'New Block';

    // Highlight box when user is editing.
    const color = (edit)
      ? 'neutral-1'
      : 'light-2';

    return (
      <Box
        full="horizontal"
        colorIndex={color}
        pad="small"
      >
        <PreviewHeader
          title={title}
          edit={edit}
          onClose={this._onCloseClick.bind(this, id)}
          onMove={this._onBlockMove.bind(this, id)}
          onEdit={this._onEditClick.bind(this, id)}
        />
        {preview}
        {blockSelector}
        {form}
      </Box>
    );
  }
};

DashboardContentBlock.propTypes = {
  dispatch: PropTypes.func.isRequired
};

function mapStateToProps(state, props) {
  const blockIndex = state.contentBlocks.findIndex(
    (block) => block.id === props.id
  );
  const {
    blockType, card, carousel, content, edit,
    image, imageDesc, imageSize, label, linkUrl, source
  } = state.contentBlocks[blockIndex];

  return {
    blockType, card, carousel, content, edit,
    image, imageDesc, imageSize, label, linkUrl, source
  };
}

export default connect(mapStateToProps)(DashboardContentBlock);
