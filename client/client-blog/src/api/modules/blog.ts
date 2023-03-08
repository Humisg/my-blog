import http from '@/api'

export const getBlogListApi = (data: any) => {
    const { userId } = data
    return http.get(`/api/blogs/author/${userId}`)
}

export const createNewBlogApi = (data: any) => {
    return http.post('/api/blogs', data)
}

export const getBlogDetailApi = (data: any) => {
    const { postId } = data
    return http.get(`/api/blogs/postDetail/${postId}`)
}