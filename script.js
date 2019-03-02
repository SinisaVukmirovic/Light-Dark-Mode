// variable with path for SVG for the moon
const moonPath = "M16.5 27.5C16.5 42.6878 27.5 55 27.5 55C12.3122 55 0 42.6878 0 27.5C0 12.3122 12.3122 0 27.5 0C27.5 0 16.5 12.3122 16.5 27.5Z";

const sunPath = "M55 27.5C55 42.6878 42.6878 55 27.5 55C12.3122 55 0 42.6878 0 27.5C0 12.3122 12.3122 0 27.5 0C42.6878 0 55 12.3122 55 27.5Z";

const darkMode = document.querySelector('#dark-mode');

let toggle = false;

// a function to make the sun clickable
darkMode.addEventListener('click', () => {
    // creating anime.js timeline for animation
    const timeline = anime.timeline({
        duration: 750,
        easing: 'easeOutExpo'
    });

    // adding different animation to the timeline
    // first turning the sun into a moon
    timeline
        .add(
            {
            targets: '.sun',
            d: [
                {value: toggle ? sunPath : moonPath}
            ]
        })
        .add(
            {
            targets: '#dark-mode',
            rotate: toggle ? 0 : 320
            }, 
            '-=350'    //  wont work if anime js is imported by CDN link!!!
        )
        .add(
        {
        targets: 'section',
        backgroundColor: toggle ? '#97e5ec' : '#353535',    // value cannot be color name('skyblue')
        color: toggle ? '#000' : '#fff'
        },
        '-=700'
    );

    // making the animation toggleble between light and dark mode
    toggle = !toggle;
});