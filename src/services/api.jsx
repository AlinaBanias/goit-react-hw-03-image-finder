
import axios from "axios";

const URL = 'https://pixabay.com/api/';

export const getImages = async (imageName, pageNumber) => {
    try {
        return await axios.get(URL, {
        params: {
            key: '32190498-c060c2ff03edf94bf531f7f07',
            q: imageName,
            image_type: 'photo',
            orientation: 'horizontal',
            per_page: 12,
            page: pageNumber,
        }
    })
    } catch (error) {
      console.log(error);  
    }
};