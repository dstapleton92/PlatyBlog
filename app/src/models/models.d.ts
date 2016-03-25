declare module models {
    interface IBlogPost {
        title: string;
        author: string;
        content: string;
        id?: string;
        createdAt?: Date;
    }
}
