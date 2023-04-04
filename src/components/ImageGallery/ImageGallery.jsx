import PropTypes from 'prop-types';


import { ImageGalleryItem } from "components/ImageGalleryItem/ImageGalleryItem";
import { ImageGalleryWrapper } from './ImageGallery.styled';

export const ImageGallery = ({gallery}) => {

        return (
                <ImageGalleryWrapper className="ImageGallery">
                    {gallery.map(({ webformatURL, tags, id, largeImageURL }) =>
                        <ImageGalleryItem
                            key={id}
                            imageUrl={webformatURL}
                            tags={tags}
                            largeImageURL={largeImageURL}
                            />)}
                </ImageGalleryWrapper>
        );
};

ImageGallery.propTypes = {
    gallery: PropTypes.arrayOf(
        PropTypes.shape({
            webformatURL: PropTypes.string.isRequired,
            tags: PropTypes.string.isRequired,
            id: PropTypes.number.isRequired,
            largeImageURL: PropTypes.string.isRequired,
        }).isRequired,
    ).isRequired,
}