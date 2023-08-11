import request from '@/utils/request.js';

export const crate_interface_test = async (data) => {
  return request({
    url: '/interface_debugging/crate_interface_test',
    method: 'post',
    data,
  });
};

export const get_interface_list = async (data) => {
  return request({
    url: '/interface_debugging/interface_list',
    method: 'get',
    params: data,
  });
};

export const updata_interface_test = async (data) => {
  return request({
    url: '/interface_debugging/updata_interface_test',
    method: 'post',
    data,
  });
};

export const delete_interface_test = async (data) => {
  return request({
    url: '/interface_debugging/delete_interface_test',
    method: 'delete',
    data,
  });
};
