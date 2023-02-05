// Get HTML element
export const sections = {
    main: document.getElementById('container'),

};
// Generate HTML element
export function generateEl(elType, options = {}, parent) {
    // options must be an object with a property
    // ('elType', { textContent: 'Test',
    //     className: 'Something',
    //     style: 'background-color: blue;',
    //     to add eventListener - the prop must be eventListeners (string) - value must be an object 
    //     eventListeners: { click: () => alert('Button clicked!') } 
    // })
    
    const el = document.createElement(elType);
    Object.assign(el, options);
    if (options.eventListeners) {
        for (const eventType in options.eventListeners) {
            el.addEventListener(eventType, options.eventListeners[eventType]);
        }
    }
    if (parent) {
        parent.appendChild(el);
    }

    return el;
}