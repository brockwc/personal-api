// require models
let db = require('./models');

let bonsaiCollection = [
    {
        commonName: "Jacqueline Hillier Elm",
        genusName: "Ulmus",
        source: "High Hand Nursery, Loomis, CA",
        lastRepotted: ["2018"],
        style: "Broom",
        sizeInCM: 20,
        isIndoors: true
    },
    {
        commonName: "Juniper",
        genusName: "Juniperus procumbens nana",
        source: "Katsura Garden, San Francisco, CA",
        lastRepotted: ["2018"],
        style: "Cascade",
        sizeInCM: 10,
        isIndoors: false
    }
];

db.Bonsai.deleteMany({}, (err, removedBonsai) => {
    console.log("Removed all bonsai...");

    db.Bonsai.create(bonsaiCollection, (err, createdBonsai) => {
        if (err) throw err;
        console.log(`Created ${bonsaiCollection.length} bonsai...`);
    });
});

