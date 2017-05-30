/**
 * Created by Mijn PC on 30/05/2017.
 */
const assert = require(`assert`);
assert(process.env.CISCOSPARK_ACCESS_TOKEN, 'This example assumes you have set your access token as an environment variable');
const ciscospark = require(`ciscospark`);
ciscospark.rooms.create({title: `My First Room`})
    .then((room) => {
    return Promise.all([
        ciscospark.memberships.create({
            roomId: room.id,
            personEmail: `alice@example.com`
        }),
        ciscospark.memberships.create({
            roomId: room.id,
            personEmail: `bob@example.com`
        }),
    ])
        .then(() => ciscospark.messages.create({
        markdown: `**Hi Everyone**`,
        roomId: room.id
    }));
});