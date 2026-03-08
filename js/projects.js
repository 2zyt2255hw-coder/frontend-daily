// 前端项目中文详情数据
const projectDetails = {
    'vercel/next.js': {
        title: 'Next.js - React 全栈框架',
        description: 'Next.js 是 Vercel 推出的 React 全栈框架，支持 SSR、SSG、ISR 等渲染方式，是目前最流行的 React 框架之一。',
        tags: '<span class="tag">React</span><span class="tag">SSR</span><span class="tag">全栈</span>',
        install: '```bash\n# 创建新项目\nnpx create-next-app@latest my-app\n\n# 或手动安装\nnpm install next react react-dom\n```',
        usage: '```javascript\n// pages/index.js\nexport default function Home() {\n  return <h1>Hello Next.js!</h1>;\n}\n\n// 使用 App Router (Next.js 13+)\n// app/page.js\n\nexport default function Page() {\n  return <h1>Welcome to Next.js 15</h1>;\n}\n```',
        resources: '• 官方文档：https://nextjs.org/\n• 中文文档：https://nextjs.icu/'
    },
    
    'nodejs/node': {
        title: 'Node.js - JavaScript 运行时',
        description: 'Node.js 是基于 Chrome V8 引擎的 JavaScript 运行时，让 JavaScript 可以、服务端开发。',
        tags: '<span class="tag">Node.js</span><span class="tag">后端</span><span class="tag">JavaScript</span>',
        install: '```bash\n# 使用 nvm 安装（推荐）\ncurl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash\nnvm install 20\nnvm use 20\n\n# 验证安装\nnode -v\n```',
        usage: '```javascript\n// 创建 HTTP 服务器\nconst http = require(\'http\');\n\nconst server = http.createServer((req, res) => {\n  res.statusCode = 200;\n  res.setHeader(\'Content-Type\', \'text/plain\');\n  res.end(\'Hello Node.js!\\n\');\n});\n\nserver.listen(3000, () => {\n  console.log(\'Server running at http://localhost:3000/\');\n});\n```',
        resources: '• 官方文档：https://nodejs.org/\n• 中文文档：https://nodejs.cn/'
    },
    
    'mrdoob/three.js': {
        title: 'Three.js - JavaScript 3D 库',
        description: 'Three.js 是最流行的 WebGL 3D 库，可以轻松创建 3D 场景、动画和交互。',
        tags: '<span class="tag">3D</span><span class="tag">WebGL</span><span class="tag">图形</span>',
        install: '```bash\n# npm 安装\nnpm install three\n\n# 或使用 CDN\n# <script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js"></script>\n```',
        usage: '```javascript\nimport * as THREE from \'three\';\n\n// 创建场景\nconst scene = new THREE.Scene();\n\n// 创建相机\nconst camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);\ncamera.position.z = 5;\n\n// 创建渲染器\nconst renderer = new THREE.WebGLRenderer();\nrenderer.setSize(window.innerWidth, window.innerHeight);\ndocument.body.appendChild(renderer.domElement);\n\n// 创建立方体\nconst geometry = new THREE.BoxGeometry();\nconst material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });\nconst cube = new THREE.Mesh(geometry, material);\nscene.add(cube);\n\n// 渲染循环\nfunction animate() {\n  requestAnimationFrame(animate);\n  cube.rotation.x += 0.01;\n  cube.rotation.y += 0.01;\n  renderer.render(scene, camera);\n}\nanimate();\n```',
        resources: '• 官方文档：https://threejs.org/\n• 示例：https://threejs.org/examples/'
    },
    
    'axios/axios': {
        title: 'Axios - HTTP 客户端',
        description: 'Axios 是基于 Promise 的 HTTP 客户端，支持浏览器和 Node.js，自动转换 JSON 数据。',
        tags: '<span class="tag">HTTP</span><span class="tag">请求</span><span class="tag">API</span>',
        install: '```bash\nnpm install axios\n\n# 或使用 CDN\n# <script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>\n```',
        usage: '```javascript\nimport axios from \'axios\';\n\n// GET 请求\naxios.get(\'/user/12345\')\n  .then(response => console.log(response.data))\n  .catch(error => console.error(error));\n\n// POST 请求\naxios.post(\'/user\', {\n    firstName: \'Fred\',\n    lastName: \'Flintstone\'\n  })\n  .then(response => console.log(response));\n\n// 并发请求\naxios.all([\n  axios.get(\'/user/1\'),\n  axios.get(\'/user/2\')\n]).then(axios.spread((user1, user2) => {\n  console.log(user1.data, user2.data);\n}));\n```',
        resources: '• 官方文档：https://axios-http.com/\n• 中文文档：https://www.axios-js.com/'
    },
    
    'facebook/react': {
        title: 'React - UI 组件库',
        description: 'React 是 Facebook 推出的声明式、高效、灵活的 JavaScript 库，用于构建用户界面。',
        tags: '<span class="tag">React</span><span class="tag">UI</span><span class="tag">组件</span>',
        install: '```bash\n# 使用 Vite 创建\nnpm create vite@latest my-react-app -- --template react\n\n# 或使用 CRA\nnpx create-react-app my-react-app\n\n# 安装依赖\ncd my-react-app\nnpm install\n```',
        usage: '```jsx\nimport React, { useState } from \'react\';\n\nfunction Counter() {\n  const [count, setCount] = useState(0);\n  \n  return (\n    <div>\n      <p>计数: {count}</p>\n      <button onClick={() => setCount(count + 1)}>\n        增加\n      </button>\n    </div>\n  );\n}\n\nexport default Counter;\n```',
        resources: '• 官方文档：https://react.dev/\n• 中文文档：https://zh-hans.react.dev/'
    },
    
    'vuejs/vue': {
        title: 'Vue.js - 渐进式框架',
        description: 'Vue.js 是一套用于构建用户界面的渐进式框架，特点是易上手、灵活、高效。',
        tags: '<span class="tag">Vue</span><span class="tag">框架</span><span class="tag">响应式</span>',
        install: '```bash\n# 使用 Vite 创建\nnpm create vue@latest my-vue-app\n\n# 或使用 Vue CLI\nnpm install -g @vue/cli\nvue create my-vue-app\n\n# CDN 引入\n# <script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>\n```',
        usage: '```html\n<script setup>\nimport { ref, onMounted } from \'vue\'\n\nconst count = ref(0)\n\nfunction increment() {\n  count.value++\n}\n\nonMounted(() => {\n  console.log(\'组件挂载完成\')\n})\n</script>\n\n<template>\n  <button @click="increment\">计数: {{ count }}</button>\n</template>\n```',
        resources: '• 官方文档：https://vuejs.org/\n• 中文文档：https://cn.vuejs.org/'
    },
    
    'sveltejs/svelte': {
        title: 'Svelte - 编译时框架',
        description: 'Svelte 是一个将代码编译成 vanilla JS 的框架，没有虚拟 DOM，性能优异。',
        tags: '<span class="tag">Svelte</span><span class="tag">框架</span><span class="tag">高性能</span>',
        install: '```bash\n# 使用 Vite 创建\nnpm create svelte@latest my-app\n\n# 或使用 REPL\n# https://svelte.dev/repl\n```',
        usage: '```svelte\n<script>\n  let count = 0;\n  \n  function increment() {\n    count += 1;\n  }\n</script>\n\n<button on:click={increment}>\n  点击次数: {count}\n</button>\n\n<style>\n  button {\n    padding: 1rem 2rem;\n    background: #ff3e00;\n    color: white;\n    border: none;\n    border-radius: 4px;\n  }\n</style>\n```',
        resources: '• 官方文档：https://svelte.dev/\n• 中文文档：https://learn.svelte.dev/'
    },
    
    'tailwindlabs/tailwindcss': {
        title: 'Tailwind CSS - CSS 框架',
        description: 'Tailwind CSS 是一个 utility-first 的 CSS 框架，通过组合类名快速构建现代界面。',
        tags: '<span class="tag">CSS</span><span class="tag">样式</span><span class="tag">UI</span>',
        install: '```bash\n# 使用 Vite\nnpm install -D tailwindcss postcss autoprefixer\nnpx tailwindcss init -p\n```',
        usage: '```html\n<!-- 按钮 -->\n<button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">\n  点击我\n</button>\n\n<!-- 卡片 -->\n<div class="max-w-sm rounded overflow-hidden shadow-lg">\n  <img class="w-full" src="/img/card-top.jpg" alt="Sunset in the mountains">\n  <div class="px-6 py-4">\n    <div class="font-bold text-xl mb-2">标题</div>\n    <p class="text-gray-700 text-base">内容描述...</p>\n  </div>\n</div>\n```',
        resources: '• 官方文档：https://tailwindcss.com/\n• 中文文档：https://tailwindcss.com/docs'
    },
    
    'shadcn-ui/ui': {
        title: 'shadcn/ui - 组件库',
        description: 'shadcn/ui 是一组精美可访问的 React 组件，基于 Radix UI 和 Tailwind CSS。',
        tags: '<span class="tag">React</span><span class="tag">组件库</span><span class="tag">UI</span>',
        install: '```bash\n# 在 Next.js 项目中\nnpx shadcn-ui@latest init\n\n# 添加组件\nnpx shadcn-ui@latest add button\nnpx shadcn-ui@latest add card\nnpx shadcn-ui@latest add dialog\n```',
        usage: '```jsx\nimport { Button } from "@/components/ui/button"\nimport { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"\n\nexport function MyComponent() {\n  return (\n    <Card>\n      <CardHeader>\n        <CardTitle>标题</CardTitle>\n      </CardHeader>\n      <CardContent>\n        <Button>点击</Button>\n      </CardContent>\n    </Card>\n  )\n}\n```',
        resources: '• 官方文档：https://ui.shadcn.com/\n• GitHub：https://github.com/shadcn-ui/ui'
    },
    
    'microsoft/vscode': {
        title: 'VS Code - 代码编辑器',
        description: 'Visual Studio Code 是微软推出的免费、开源、跨平台代码编辑器，支持丰富的扩展。',
        tags: '<span class="tag">编辑器</span><span class="tag">IDE</span><span class="tag">VSCode</span>',
        install: '```bash\n# macOS\nbrew install --cask visual-studio-code\n\n# Linux\nsudo apt install code\n\n# Windows\n# 下载安装包：https://code.visualstudio.com/\n```',
        usage: '```\n# 常用快捷键\n\n# 命令面板\nCmd/Ctrl + Shift + P\n\n# 快速打开文件\nCmd/Ctrl + P\n\n# 多光标编辑\nAlt + Click\n\n# 查找并替换\nCmd/Ctrl + F\n\n# 打开终端\nCmd/Ctrl + `\n\n# 侧边栏\nCmd/Ctrl + B\n\n# Git 操作\nCmd + Shift + G\n```',
        resources: '• 官网：https://code.visualstudio.com/\n• 扩展市场：https://marketplace.visualstudio.com/'
    }
};
