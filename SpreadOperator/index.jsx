const nums1 = [1,2,3,4];
const nums2 = [5,6,7,8];

// Combine the two arrays into one
const nums12 = [...nums1, ...nums2];

// Display the combined array
document.getElementById('demo').innerText = nums12.join(', ');

const person1 = {
    name: "houssam",
    age: 6,
}

const person2 = {
    name: "anass",
    age:2,
}

// Combine the two objects
const people = [person1,person2];

// Display the combined object as a JSON string
document.getElementById('pe').innerText = JSON.stringify(people,2);
