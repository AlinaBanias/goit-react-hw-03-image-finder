import { Component } from "react";
import { ReactComponent as ImSearch } from "../../images/search-thing.svg"
import PropTypes from 'prop-types';
import { SearchbarWrapper } from "./Searchbar.styled";


export class SearchBar extends Component {
    state = {
        imageName: '',
    }

    handleSubmit = (e) => {

        const { imageName } = this.state
        const { onSubmit } = this.props
 
        e.preventDefault();

        if (imageName.trim() === '') {
            alert('Enter something')
            return
        }

        onSubmit(imageName)
        
        this.setState({
            imageName: '',
        })
    }

    handleNameChange = (e) => {
        this.setState({
            imageName: e.currentTarget.value,
        })
    };




    render() {
        const { imageName } = this.state;

        return (
            <SearchbarWrapper>
                <form className="SearchForm" onSubmit={this.handleSubmit}>
                    <button type="submit" className="SearchForm-button">
                        <span className="SearchForm-button-label"><ImSearch/></span>
                    </button>

                    <input
                        onChange={this.handleNameChange}
                        value={imageName}
                        className="SearchForm-input"
                        type="text"
                        autoComplete="off"
                        autoFocus
                        placeholder="Search images and photos"
                    />
                </form>
            </SearchbarWrapper>
        );
    };
    
};

SearchBar.propTypes = {
    onSubmit: PropTypes.func.isRequired,
}