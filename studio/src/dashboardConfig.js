export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5fe30e957b93641c4f3e4499',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-wacspba9',
                  apiId: 'ebe44055-651f-42fb-9689-d0ff5b4455af'
                },
                {
                  buildHookId: '5fe30e9503e4371a233fd6bf',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-9bhskjjg',
                  apiId: '4e692fdb-0a9b-4bec-bcb1-0454500772b8'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/zhu/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-9bhskjjg.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
