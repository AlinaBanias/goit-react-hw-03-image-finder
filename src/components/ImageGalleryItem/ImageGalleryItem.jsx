import { Modal } from "../Modal/Modal";
import { Component } from "react";
import PropTypes from 'prop-types';
import { ImageGallerItemWrapper } from "./ImageGalleryItem.styled";

export class ImageGalleryItem extends Component {
    state = {
        modalActive: false,
    }

    toggleModal = () => {
        this.setState(({ modalActive }) => ({ modalActive: !modalActive }))
    };


    render() {
        const { imageUrl, tags, largeImageURL } = this.props
        return (
            <ImageGallerItemWrapper className="ImageGalleryItem" onClick={()=>this.toggleModal()}>
                <img className="ImageGalleryItem-image" src={imageUrl} alt={tags} />
                {this.state.modalActive && <Modal largeImageURL={largeImageURL} toggleModal={this.toggleModal} />}
            </ImageGallerItemWrapper>

        );
    };
};

ImageGalleryItem.propTypes = {
    imageUrl: PropTypes.string.isRequired,
    tags: PropTypes.string.isRequired,
    largeImageURL: PropTypes.string.isRequired,
}