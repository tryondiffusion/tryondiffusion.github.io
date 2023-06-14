let pidx = 0;
let gidx = 0;

function changeImage(direction, type) {
    if (type === 'person') {
        if (direction === 'next') {
            pidx = (pidx + 1) % 7;
        } else {
            pidx = (pidx - 1 + 7) % 7;
        }
        document.getElementById('personImage').src = `static/demo_images/person/p${pidx}.png`;
    } else {
        if (direction === 'next') {
            gidx = (gidx + 1) % 5;
        } else {
            gidx = (gidx - 1 + 5) % 5;
        }
        document.getElementById('garmentImage').src = `static/demo_images/garment/g${gidx}.png`;
    }

    document.getElementById('tryonImage').src = `static/demo_images/tryon/p${pidx}_g${gidx}.png`;
}
