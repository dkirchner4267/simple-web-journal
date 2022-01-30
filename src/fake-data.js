const today = new Date();
const twoDaysAgo = new Date();
twoDaysAgo.setDate(twoDaysAgo.getDate() - 2);
const aWeekAgo = new Date();
aWeekAgo.setDate(aWeekAgo.getDate() - 7);


export const fakeData = [
    {
        id: 1,
        title: "My first entry",
        date: aWeekAgo.toDateString(),
        modified: aWeekAgo.toDateString(),
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
    {
        id: 2,
        title: "I hate people",
        date: twoDaysAgo.toDateString(),
        modified: today.toDateString(),
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    },
    {
        id: 3,
        title: "Puppies!",
        date: today.toDateString(),
        modified: today.toDateString(),
        content: "Just a small town girl, living in a lonely world, she took a midnight train going anywhere. Just a city boy, born and raised in south Detroit, he took a midnight train going anywhere..."
    }
]