module.exports = function (hexo) {
  hexo.extend.helper.register('content_excerpt', function (content = '') {
    return content.replace(/<h3 class="_excerpt_ignore">[\s\S]+<\/h3>/, '')
  });
}
