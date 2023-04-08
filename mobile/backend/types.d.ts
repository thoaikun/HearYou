declare global {
    namespace app {
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
