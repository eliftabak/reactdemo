import React from 'react';
import { Thumbnail } from 'react-bootstrap/lib';
import { URL_IMG, IMG_SIZE_XSMALL } from '../const';

export default function Cast({cast}) {
  return (
    <Thumbnail src={URL_IMG+IMG_SIZE_XSMALL+cast.profile_path} alt={cast.name} >
    {/* Problem was here, solved the issue by changing image to a supported size  */}
      <p>{cast.name}</p>
    </Thumbnail>
  );
}

Cast.propTypes = {
  cast: React.PropTypes.shape({
    profile_path: React.PropTypes.string.isRequired,
    name: React.PropTypes.string.isRequired,
  })
};
