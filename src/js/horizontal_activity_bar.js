let sidebar = null;
let activityBar = null;
let sidebarContainer = null;
let sidebarContent = null;
let activityBarContainer = null;
let panes = null;

const DEFAULT_ACTIVITYBAR_WIDTH = 48;

function observeElementChanges() {
    console.info('DOM fully loaded and parsed');

    const resizeObserver = new MutationObserver(mutationsList => {
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

    resizeObserver.observe(sidebarContainer, { attributes: true });

    const paneAmountObserver = new MutationObserver(mutationsList => {
        for (const mutation of mutationsList) {
            if (mutation.type === 'childList') {
                if (checkPaneContainerTopChanges()) {
                    setStyle();
                }
            }
        }
    });

    const paneContainerParent = panes[0].parentElement.parentElement;
    paneAmountObserver.observe(paneContainerParent, { childList: true });
}

function setStyle() {
    // Set sidebarContainer.left to 0 to make it appear on the left edge of the screen
    sidebarContainer.style.left = 0;
    // Set sidebarContainer.top to the height of activityBar to make it appear below the activitybar
    sidebarContainer.style.top = `${activityBar.offsetHeight}px`;
    // Adjust placement of closed panes
    panes = sidebar.querySelectorAll('.pane');
    panes.forEach(pane => {
        const paneContainer = pane.parentElement;
        const currTop = parseInt(
            getComputedStyle(paneContainer).getPropertyValue('top'),
            10
        );
        if (paneContainer.dataset.prevTop === currTop || currTop === 0) return;
        const newTop = currTop - activityBar.offsetHeight;
        paneContainer.style.top = `${newTop}px`;
        paneContainer.dataset.prevTop = newTop;
    });
    const newWidth = sidebarContainer.offsetWidth + DEFAULT_ACTIVITYBAR_WIDTH;

    if (activityBarContainer.offsetWidth !== newWidth) {
        // Update the widths of the elements
        sidebarContainer.style.width = `${newWidth}px`;
        sidebarContent.style.width = `${newWidth}px`;
        activityBarContainer.style.width = `${newWidth}px`;
    }
}

function checkPaneContainerTopChanges() {
    let changed = false;
    panes.forEach(pane => {
        const paneContainer = pane.parentElement;
        const currTop = parseInt(
            getComputedStyle(paneContainer).getPropertyValue('top'),
            10
        );
        if (paneContainer.dataset.prevTop !== currTop) {
            changed = true;
            return changed;
        }
    });
    return changed;
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
