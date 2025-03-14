import React from 'react';
import App from '../editor/app';
import PropTypes from 'prop-types';
import { useState } from '@wordpress/element';
import { LOCATIONS } from '../editor/pages/form-media/constants';

const UnifyProductImages = ( { productsImages, setProductImages, onClose } ) => {
	const [ isOpen, setIsOpen ] = useState( true );

	const handleClose = () => {
		setIsOpen( false );
		if ( onClose ) {
			onClose();
		}
	};

	return (
		<div>
			{ isOpen && <App
				type={ 'media' }
				getControlValue={ () => ( {
					images: productsImages,
				} ) }
				setControlValue={ async ( productImage ) => await setProductImages(
					productImage.url,
					productImage.image.productId,
					productImage.id,
				) }
				onClose={ handleClose }
				isRTL={ elementorCommon.config.isRTL }
				additionalOptions={ {
					location: LOCATIONS.PRODUCT_IMAGE_UNIFICATION,
					withoutHistory: true,
				} }
			/> }
		</div> );
};

UnifyProductImages.propTypes = {
	productsImages: PropTypes.arrayOf( PropTypes.object ),
	setProductImages: PropTypes.func,
	onClose: PropTypes.func,
};

export default UnifyProductImages;

