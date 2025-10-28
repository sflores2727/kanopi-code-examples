/**
 * Expandable gallery functionality.
 */
document.addEventListener('DOMContentLoaded', () => {
    //Get all expandable gallery blocks on page
    const expandableGalleries = document.querySelectorAll('.wp-block-kanopi-example-expandable-gallery');
    if(expandableGalleries){
        //Loop through each expandable gallery and add event listeners
        expandableGalleries.forEach(expandableGallery => {

            const colCountDesktop = expandableGallery.getAttribute('data-items-per-row');

            //Find all expandable gallery buttons
            expandButtons = expandableGallery.querySelectorAll('.kanopi-example-expandable-gallery-button');

            //Find the live text area
            const liveTextArea = expandableGallery.querySelector('.kanopi-example-expandable-gallery-live-text-area');
            const liveTextAreaTablet = expandableGallery.querySelector('.kanopi-example-expandable-gallery-live-text-area-tablet');

            //Add event listener to each expandable gallery button
            expandButtons.forEach((expandButton, idx) => {
                expandButton.addEventListener('click', (e) => {

                    //Get Gallery Item Info
                    const {liveText, galleryItem, id} = getItemInfo(e.target);

                    //Set Column Count for Desktop and Tablet
                    // const colCountDesktop = 4;
                    const colCountTablet = 2;

                    //Calculate Row to start live area
                    liveTextArea.style.gridRowStart = getLiveTextRow(idx, colCountDesktop);
                    liveTextAreaTablet.style.gridRowStart = getLiveTextRow(idx, colCountTablet);

                    //Toggle Gallery Item
                    if(galleryItem.classList.contains('expanded')){
                        toggleGalleryItem(galleryItem, liveTextArea, liveTextAreaTablet);
                    }else{
                        //First reset all gallery items
                        resetAllGalleryItems(expandableGallery);

                        //Then toggle the clicked gallery item
                        toggleGalleryItem(galleryItem, liveTextArea, liveTextAreaTablet);

                        //Then set the live text with a short delay for screen reader
                        setTimeout(() => {
                            liveTextArea.textContent = '';
                            liveTextAreaTablet.textContent = '';
                            setTimeout(() => {
                                liveTextArea.textContent = liveText;
                                liveTextAreaTablet.textContent = liveText;
                            }, 50);
                        }, 10);
                    }
                })
            })
        })
    }
})

/**
 * Resets all .kanopi-example-expandable-gallery-item elements in the given gallery to their
 * unexpanded state by removing the 'expanded' class.
 *
 * @param {HTMLElement} gallery - The gallery element that contains all the
 *   .kanopi-example-expandable-gallery-item elements.
 */
function resetAllGalleryItems(gallery){
    const galleryItems = gallery.querySelectorAll('.wp-block-kanopi-example-expandable-gallery-item');

    galleryItems.forEach(galleryItem => {
        resetCard(galleryItem);
    })
    
}

/**
 * Given a button target, returns an object with the following properties:
 * - btn: The <button> element that was clicked (closest ancestor of the target)
 * - liveText: The value of the "data-live-text" attribute of the button,
 *   which is the text that should be displayed in the live text region
 *   when the button is clicked.
 * - galleryItem: The closest ancestor of the button that is a
 *   .kanopi-example-expandable-gallery-item element.
 */
function getItemInfo(btnTarget, idx){

    
    //Get data from closest ancestors
    const btn = btnTarget.closest('.kanopi-example-expandable-gallery-button');
    const galleryItem = btnTarget.closest('.wp-block-kanopi-example-expandable-gallery-item');

    //Get data from data attributes
    const liveText = btn.getAttribute('data-live');
    
    //Get the id
    const id = btn.getAttribute('id');

    //Return data object
    return {
        btn,
        liveText,
        galleryItem,
        id
    }
}

/**
 * Toggles the expanded state of a .kanopi-example-expandable-gallery-item element.
 *
 * When the item is expanded, the item is given the 'expanded' class and the
 * aria-expanded attribute of the item and the live text region are set to
 * true. When the item is collapsed, the item is given no class and the
 * aria-expanded attribute of the item and the live text region are set to
 * false.
 *
 * @param {HTMLElement} galleryItem - The element to be toggled.
 * @param {HTMLElement} liveTextArea - The element that displays the live text.
 */
function toggleGalleryItem(galleryItem, liveTextArea, liveTextAreaTablet){
    //Toggle the 'expanded' class for individual gallery item
    galleryItem.classList.toggle('expanded');

    //Get the expandable text area
    const expandableText = galleryItem.querySelector('.kanopi-example-expandable-gallery-expandable-text');

    //Get the button
    const btn = galleryItem.querySelector('.kanopi-example-expandable-gallery-button');

    //
    if(!galleryItem.classList.contains('expanded')){
        liveTextArea.textContent = '';
        liveTextAreaTablet.textContent = '';
        btn.setAttribute('aria-expanded', false);
        liveTextArea.classList.remove('expanded');
        liveTextAreaTablet.classList.remove('expanded');
    }else{
        btn.setAttribute('aria-expanded', true);
        liveTextArea.classList.add('expanded');
        liveTextAreaTablet.classList.add('expanded');
    }
    expandableText.classList.toggle('expanded');
}

/**
 * Resets a .kanopi-example-expandable-gallery-item element to its initial state.
 *
 * When called, the element is given no class and the aria-expanded attribute
 * of the expandable text region is set to false.
 *
 * @param {HTMLElement} galleryItem - The element to be reset.
 */
function resetCard(galleryItem){

    galleryItem.classList.remove('expanded');
    const btn = galleryItem.querySelector('.kanopi-example-expandable-gallery-button');
    btn.setAttribute('aria-expanded', false);
    const expandableText = galleryItem.querySelector('.kanopi-example-expandable-gallery-expandable-text');
    expandableText.classList.remove('expanded');

}

/**
 * Calculates and returns the row number for the live text element based on the position
 * of the gallery item and the number of columns in the grid.
 *
 * @param {number} position - The position of the gallery item in the grid.
 * @param {number} colCount - The number of columns in the grid.
 * @param {number} [offset=2] - The offset to add to the row number. The default is 2, which
 *   means the live text will be placed in the row below the card.
 * @returns {number} The row number for the live text element.
 */
function getLiveTextRow(position, colCount, offset = 2){
    //Calculate and return the next row
    //Because arrays start at 0, and grids start at 1, we need to add 1 to the offset
    //Because we want the live text to be in the row below the card we need to add antother 1 to the offset
    //ie. if position is 5, the card is in row #2. This means that we would want the live text to be in row #3.
        //Math.floor(5/4) = 1
        //we then need to add our offset (2) to get to row #3.
    return Math.floor(position / colCount) + offset ;
}