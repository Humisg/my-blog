import http from '@/api'

export const getBlogListApi = (data: any) => {
    const { username } = data
    return http.get(`/api/blogs/author/${username}`)
}

export const createNewBlogApi = (data: any) => {
    return http.post('/api/blogs', data)
}