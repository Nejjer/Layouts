function onEntry(entry) {
    entry.forEach(change => {
        if (change.isIntersecting) {
            change.target.classList.add("element-show");
        }
    })
}

let option = { threshold: [0.5] };
let observer = new IntersectionObserver(onEntry, option);
let elements = document.querySelectorAll('.element-animation');
for (let elm of elements) {
    observer.observe(elm);
}