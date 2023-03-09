import http from '@/api'

export const uploadApi = (data: any) => {
    return http.post('/api/upload/upload', data)
}