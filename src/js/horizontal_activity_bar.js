let sidebar = null;
let activityBar = null;
let sidebarContainer = null;
let sidebarContent = null;
let activityBarContainer = null;

const DEFAULT_ACTIVITYBAR_WIDTH = 48;

function observeElementChanges() {
    console.info('DOM fully loaded and parsed');

    if (!sidebarContainer) {
        console.error(
            'Could not find Container element of workbench.parts.sidebar'
        );
        return;
    }

    // Create an observer instance linked to the callback function
    const observer = new MutationObserver((mutationsList) => {
        for (const mutation of mutationsList) {
            if (mutation.type === 'attributes') {
                if (
                    sidebarContainer.offsetWidth !=
                    activityBarContainer.offsetWidth
                )
                    setStyle();
            }
        }
    });

    // Start observing the target node for configured mutations
    observer.observe(sidebarContainer, { attributes: true });
}

function setStyle() {
    // Set sidebarContainer.left to 0 to make it appear on the left edge of the screen
    sidebarContainer.style.left = 0;
    // Set sidebarContainer.top to the width of activityBarContainer to make it appear below the activitybar
    sidebarContainer.style.top = `${activityBar.offsetHeight}px`;
    const newWidth = sidebarContainer.offsetWidth + DEFAULT_ACTIVITYBAR_WIDTH;

    if (activityBarContainer.offsetWidth !== newWidth) {
        // Update the widths of the elements
        sidebarContainer.style.width = `${newWidth}px`;
        sidebarContent.style.width = `${newWidth}px`;
        activityBarContainer.style.width = `${newWidth}px`;
    }
}

function checkElementsAreLoaded() {
    sidebar = document.getElementById('workbench.parts.sidebar');
    activityBar = document.getElementById('workbench.parts.activitybar');

    if (!sidebar || !activityBar)
        return setTimeout(checkElementsAreLoaded, 1000);

    sidebarContainer = sidebar.parentElement;
    sidebarContent = sidebarContainer.querySelector('.content');
    activityBarContainer = activityBar.parentElement;

    setStyle();
    observeElementChanges();
}

checkElementsAreLoaded();
