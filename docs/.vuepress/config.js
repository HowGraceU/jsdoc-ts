module.exports = {
	base: '/tsdoc/',
	dest: './dist',
	title: '使用 jsdoc + typescript 让现有项目享受提示和报错',
  description: '使用 jsdoc + typescript 让现有项目享受提示和报错',
  themeConfig: {
    repo: 'https://github.com/HowGraceU/jsdoc-ts',
		repoLabel: 'github',
		sidebar: [
      {
        title: '写在最前',   // 必要的
				sidebarDepth: 1,    // 可选的, 默认值是 1
				collapsable: false,
        children: [
          '/'
        ]
      },
      {
        title: '指南',
				sidebarDepth: 1,    // 可选的, 默认值是 1
				collapsable: false,
        children: [
					'/guide/'
				]
      },
      {
        title: 'jsdoc',
				sidebarDepth: 1,    // 可选的, 默认值是 1
				collapsable: false,
        children: [
					'/jsdoc/',
					'/jsdoc/type',
					'/jsdoc/function',
					'/jsdoc/typedef',
					'/jsdoc/generic',
				]
      },
      {
        title: 'typescript',
				sidebarDepth: 1,    // 可选的, 默认值是 1
				collapsable: false,
        children: [
					'/typescript/type',
					'/typescript/function',
					'/typescript/typedef',
					'/typescript/generic',
				]
      }
    ]
  }
}