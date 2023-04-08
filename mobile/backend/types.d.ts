declare global {
    namespace app {
        type Podcast = {
            id: string;
            name: string;
            ownerID: string;
            subscribes: number;
            episodesID: string[];
        }

        type Episode = {
            id: string;
            title: string;
            description: string;
            view: number;
            topic: string;
            // build this from the uuids
            // url: string;
            authorID: string;
        }
    }
}

export { };
