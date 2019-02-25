const Joi = require('joi');

const GROUP_NAME = 'shops';

module.exports = [
  {
    method: 'get',
    path: `/${GROUP_NAME}`,
    async handler(request, reply) {
      reply();
    },
    config: {
      tags: ['api', GROUP_NAME],
      description: '获取店铺列表',
      validate: {
        query: {
          limit: Joi.number().integer().min(1).default(10)
            .description('每页的条目数'),
          page: Joi.number().integer().min(1).default(1)
            .description('页码数'),
        },
      },
    },
  },
  {
    method: 'get',
    path: `/${GROUP_NAME}/{shopId}/goods`,
    async handler(request, reply) {
      reply();
    },
    config: {
      tags: ['api', GROUP_NAME],
      description: '获取店铺的商品列表',
    },
  },
];