export interface BlogItem {
    title: string,
    content: string,
    createdAt: string,
    _id?: string,
    test?: string
}

export interface BlogList extends Array<BlogItem>{}