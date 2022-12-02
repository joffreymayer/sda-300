// This code was inspired from: https://www.youtube.com/watch?v=aUjBvuUdkhg
// Intersection-Obersver API Documentation: https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API

// In order to make this running correctly:
//  1) Make sure to reference this JS-File correctly at the top of your HTML-File (don't forget to add a "defer"-statement ion the script-Tag, otherwise it will be loaded BEFORE the rendered content, which is bad!)
//  2) Make sure to add the 'data-lazy' on each <img>-Element INSTEAD of the 'src'-attribute AND - additionally - add the 'lazy'-class to the <img>-Elements you want to be lazy-loaded, otherwise you will not see any animation (because we added also css that hides all images at the beginning)!
//  3) Add the CSS from the video in order to make the CSS-animation work.

const targets = document.querySelectorAll('img.lazy'); // Select all the <img>-Elements with the class "lazy"

const lazyLoad = target => {
    // We use the IntersectionObserver()-API in order to get the lazy-loading job done:
    const io = new IntersectionObserver((entries, observer) => { // entries == Describes, whether we see a change in the "Zustand" of each of the target-HTML-element (= our images we want to lazy-load), e.g. whether the image has intersected with the viewport (--> if yes, then the Zustand becomes "true" and we lazy-load the images, otherwise "false" and no image is loaded).
        entries.forEach(entry => {
            console.log('😍')

            if (entry.isIntersecting) {
                const img = entry.target;
                const src = img.getAttribute('data-lazy');

                img.setAttribute('src', src);
                img.classList.add('lazy-fade'); // add new class that will make the image visible

                observer.disconnect(); // This will disconnect the observer (= we don't need to target the images anymore, AFTER they have been lazy-loaded!), after the image gets visible, in order to not overload the main thread in the browser.
            }
        })
    }); 

    io.observe(target);
}

targets.forEach(lazyLoad); //Call the function 'lazyLoad' on each image.