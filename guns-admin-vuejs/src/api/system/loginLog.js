import request from '@/utils/request'

export function getList(params) {
  return request({
    url: '/loginLog/list',
    method: 'get',
    params
  })
}

export function clear(id) {
  return request({
    url: '/loginLog',
    method: 'delete'
  })
}
