export interface BlogItem {
    title: string,
    content: string,
    createdAt: string,
    _id: string,
    imgurl: string,
    test?: string
}

export interface BlogList extends Array<BlogItem>{}

export interface BlogDetail extends BlogItem {
    _id: string,
    test: string,
    author: object,
    numbers?: number,
}