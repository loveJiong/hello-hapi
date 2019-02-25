module.exports = [
  {
    method: 'get',
    path: '/',
    handler(request, reply) {
      reply('reply');
    },
    config: {
      tags: ['api', 'tests'],
      description: 'hello-hapi接口测试',
    }
  },
];